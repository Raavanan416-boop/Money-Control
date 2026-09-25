import { defineConfig, loadEnv } from 'vite';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Build version — unique per build, used by service worker for cache busting.
// Using Date.now() ensures a new string on every `npm run build`.
const BUILD_VERSION = Date.now().toString();

/**
 * Custom Vite plugin — rewrites __BUILD_VERSION__ inside the copied sw.js
 * after the build is complete.
 *
 * Vite copies public/ files verbatim (no Rollup transform), so `define`
 * substitution does not work for service workers in public/.
 * This plugin patches the output file directly in the closeBundle hook.
 */
function serviceWorkerVersionPlugin() {
  return {
    name: 'sw-version-inject',
    closeBundle() {
      const swOut = path.resolve('dist', 'sw.js');
      if (fs.existsSync(swOut)) {
        let content = fs.readFileSync(swOut, 'utf-8');
        content = content.replaceAll('__BUILD_VERSION__', BUILD_VERSION);
        fs.writeFileSync(swOut, content, 'utf-8');
        console.log(`[sw-version-inject] Injected BUILD_VERSION=${BUILD_VERSION} into dist/sw.js`);
      }
    }
  };
}

/**
 * Dev server middleware to dispatch OTP emails via Gmail SMTP (Nodemailer), Resend, or Brevo.
 * If credentials are not configured, prints code directly to terminal console for local testing.
 */
function otpDevServerPlugin(env) {
  return {
    name: 'otp-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/send-otp', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { email, otp, itemName, itemType } = data;

            console.log('\n============================================================');
            console.log('🔐 [MONEY-CONTROL] SECURE DELETE OTP VERIFICATION');
            console.log(`📧 Recipient Email : ${email}`);
            console.log(`🗑️ Deleting Target : ${itemName} (${itemType || 'Record'})`);
            console.log(`🔢 6-Digit OTP Code: ${otp}`);
            console.log('⏱️ Validity Period : 5 minutes');
            console.log('============================================================\n');

            let delivered = false;
            let provider = 'terminal-simulation';
            let deliveryError = null;

            // 1. Gmail SMTP via Nodemailer
            const gmailUser = env.GMAIL_USER || process.env.GMAIL_USER;
            const gmailPass = (env.GMAIL_APP_PASS || process.env.GMAIL_APP_PASS || env.GMAIL_PASS || process.env.GMAIL_PASS || '').replace(/\s+/g, '');

            if (gmailUser && gmailPass) {
              try {
                const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: gmailUser,
                    pass: gmailPass
                  }
                });

                await transporter.sendMail({
                  from: `"Money Control Security" <${gmailUser}>`,
                  to: email,
                  subject: `🔐 Money Control Verification Code: ${otp}`,
                  text: `Your Money Control verification code is: ${otp}. It will expire in 5 minutes. Permanent deletion of: ${itemName}`,
                  html: `
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
                      <h2 style="color: #c084fc; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        🔐 Security Verification
                      </h2>
                      <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                        You requested to permanently delete <strong style="color: #f87171;">${itemName}</strong> (${itemType || 'Record'}).
                      </p>
                      <p style="color: #94a3b8; font-size: 14px; margin-bottom: 8px;">Your 6-digit verification code is:</p>
                      <div style="font-size: 34px; font-weight: 800; letter-spacing: 10px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; font-family: monospace;">
                        ${otp}
                      </div>
                      <p style="color: #ef4444; font-size: 13px; font-weight: 500; margin-bottom: 4px;">
                        ⚠️ This code expires in 5 minutes.
                      </p>
                      <p style="color: #64748b; font-size: 12px; line-height: 1.4; margin-top: 0;">
                        Never share this code with anyone. If you did not initiate this request, your account may be compromised.
                      </p>
                    </div>
                  `
                });

                delivered = true;
                provider = 'gmail-nodemailer';
                console.log(`✅ [Vite OTP Server] Email successfully sent to ${email} via Gmail SMTP`);
              } catch (mailErr) {
                console.error(`❌ [Vite OTP Server] Gmail send failed:`, mailErr.message);
                deliveryError = mailErr.message;
              }
            }

            // 2. Resend API
            const resendKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
            if (!delivered && resendKey) {
              try {
                const r = await fetch('https://api.resend.com/emails', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${resendKey}`
                  },
                  body: JSON.stringify({
                    from: env.EMAIL_FROM || process.env.EMAIL_FROM || 'Money Control <security@moneycontrol.app>',
                    to: [email],
                    subject: `🔐 Money Control Verification Code: ${otp}`,
                    html: `
                      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
                        <h2 style="color: #c084fc; margin-top: 0;">🔐 Security Verification</h2>
                        <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                          You requested to permanently delete <strong style="color: #f87171;">${itemName}</strong> (${itemType || 'Record'}).
                        </p>
                        <p style="color: #94a3b8; font-size: 14px;">Your one-time verification code is:</p>
                        <div style="font-size: 34px; font-weight: 800; letter-spacing: 10px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; font-family: monospace;">
                          ${otp}
                        </div>
                        <p style="color: #ef4444; font-size: 13px; font-weight: 500;">
                          ⚠️ This code expires in 5 minutes.
                        </p>
                      </div>
                    `
                  })
                });

                if (r.ok) {
                  delivered = true;
                  provider = 'resend';
                  console.log(`✅ [Vite OTP Server] Email successfully sent to ${email} via Resend`);
                } else {
                  const errText = await r.text();
                  console.error('❌ [Vite OTP Server] Resend error:', errText);
                  deliveryError = errText;
                }
              } catch (resendErr) {
                console.error('❌ [Vite OTP Server] Resend failed:', resendErr.message);
                deliveryError = resendErr.message;
              }
            }

            // 3. Brevo API
            const brevoKey = env.BREVO_API_KEY || process.env.BREVO_API_KEY;
            if (!delivered && brevoKey) {
              try {
                const r = await fetch('https://api.brevo.com/v3/smtp/email', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'api-key': brevoKey
                  },
                  body: JSON.stringify({
                    sender: { name: 'Money Control', email: env.BREVO_SENDER || process.env.BREVO_SENDER || 'noreply@moneycontrol.app' },
                    to: [{ email }],
                    subject: `🔐 Money Control Verification Code: ${otp}`,
                    htmlContent: `
                      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
                        <h2 style="color: #c084fc; margin-top: 0;">🔐 Security Verification</h2>
                        <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                          You requested to permanently delete <strong>${itemName}</strong> (${itemType || 'Record'}).
                        </p>
                        <div style="font-size: 34px; font-weight: 800; letter-spacing: 10px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; font-family: monospace;">
                          ${otp}
                        </div>
                        <p style="color: #64748b; font-size: 13px;">⚠️ Expires in 5 minutes.</p>
                      </div>
                    `
                  })
                });

                if (r.ok) {
                  delivered = true;
                  provider = 'brevo';
                  console.log(`✅ [Vite OTP Server] Email successfully sent to ${email} via Brevo`);
                }
              } catch (brevoErr) {
                console.error('❌ [Vite OTP Server] Brevo failed:', brevoErr.message);
              }
            }

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true, delivered, provider, error: deliveryError }));
          } catch (err) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    root: '.',
    publicDir: 'public',
    plugins: [
      serviceWorkerVersionPlugin(),
      otpDevServerPlugin(env)
    ],
    server: {
      port: 3000,
      strictPort: false,
      cors: true,
      open: false
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          entryFileNames: 'assets/app-bundle.[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    }
  };
});
