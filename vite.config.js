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
function maskEmailForLog(email) {
  if (!email || typeof email !== 'string') return '';
  const trimmed = email.trim();
  const parts = trimmed.split('@');
  if (parts.length !== 2) return trimmed;
  const [name, domain] = parts;
  if (name.length <= 3) return `${name[0]}***@${domain}`;
  return `${name.slice(0, 2)}****${name.slice(-2)}@${domain}`;
}

/**
 * Dev server middleware to dispatch OTP emails via Gmail SMTP (Nodemailer), Resend, or Brevo.
 * Only returns HTTP 200 with delivered=true after the email provider confirms successful delivery.
 */
function otpDevServerPlugin(initialEnv) {
  return {
    name: 'otp-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/send-otp', async (req, res) => {
        // Set CORS headers so mobile devices on LAN or separate origins can communicate
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

        // Handle preflight OPTIONS request
        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          res.end();
          return;
        }

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
            const { email, otp, itemName, itemType, field } = data;

            // Validate email address format
            const cleanEmail = String(email || '').trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!cleanEmail || !emailRegex.test(cleanEmail)) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, delivered: false, error: 'A valid recipient email address is required.' }));
              return;
            }

            // Validate 6-digit numeric OTP
            const cleanOtp = String(otp || '').trim();
            if (!cleanOtp || !/^\d{6}$/.test(cleanOtp)) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, delivered: false, error: 'A valid 6-digit OTP code is required.' }));
              return;
            }

            // Dynamically reload environment variables from .env if present
            const runtimeEnv = { ...initialEnv, ...loadEnv('development', process.cwd(), ''), ...process.env };

            const isEditOtp = itemType === 'Transaction Edit';
            const fieldName = field || '';
            const actionText = isEditOtp
              ? (fieldName
                  ? `You requested to unlock the <strong style="color: #c084fc;">${fieldName}</strong> field to edit transaction: <strong style="color: #a855f7;">${itemName || 'Transaction'}</strong>.`
                  : `You requested to unlock and correct transaction: <strong style="color: #a855f7;">${itemName || 'Transaction'}</strong>.`)
              : `You requested to permanently delete <strong style="color: #f87171;">${itemName || 'Item'}</strong> (${itemType || 'Record'}).`;
            const subjectText = isEditOtp
              ? `🔐 Money Control — Unlock ${fieldName ? fieldName + ' ' : ''}Verification: ${cleanOtp}`
              : `🔐 Money Control Verification Code: ${cleanOtp}`;
            const plainText = isEditOtp
              ? `Your Money Control verification code is: ${cleanOtp}. It will expire in 5 minutes. ${fieldName ? 'Unlock ' + fieldName + ' to edit' : 'Transaction edit unlock for'}: ${itemName || 'Transaction'}`
              : `Your Money Control verification code is: ${cleanOtp}. It will expire in 5 minutes. Permanent deletion of: ${itemName || 'Item'}`;

            const maskedEmail = maskEmailForLog(cleanEmail);
            console.log(`[OTP DISPATCH] Initiating delivery for ${maskedEmail} (${isEditOtp ? 'Edit ' + (fieldName || 'Field') : 'Delete'} ${itemName || 'Item'})`);

            let delivered = false;
            let provider = null;
            let deliveryError = null;

            // 1. Gmail SMTP via Nodemailer
            const gmailUser = runtimeEnv.GMAIL_USER || 'skaviraj416@gmail.com';
            const rawPass = runtimeEnv.GMAIL_APP_PASS || runtimeEnv.GMAIL_PASS || 'dqan kufp byaa jwwq';
            const gmailPass = (rawPass || '').replace(/\s+/g, '');

            if (gmailUser && gmailPass) {
              try {
                const transporter = nodemailer.createTransport({
                  host: 'smtp.gmail.com',
                  port: 465,
                  secure: true,
                  auth: {
                    user: gmailUser,
                    pass: gmailPass
                  },
                  connectionTimeout: 10000,
                  greetingTimeout: 10000,
                  socketTimeout: 15000
                });

                const info = await transporter.sendMail({
                  from: `"Money Control Security" <${gmailUser}>`,
                  to: cleanEmail,
                  subject: subjectText,
                  text: plainText,
                  html: `
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
                      <h2 style="color: #c084fc; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        🔐 Security Verification
                      </h2>
                      <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                        ${actionText}
                      </p>
                      <p style="color: #94a3b8; font-size: 14px; margin-bottom: 8px;">Your 6-digit verification code is:</p>
                      <div style="font-size: 34px; font-weight: 800; letter-spacing: 10px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; font-family: monospace;">
                        ${cleanOtp}
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
                console.log(`✅ [Vite OTP Server] Email successfully delivered to ${maskedEmail} via Gmail SMTP (msgId: ${info.messageId})`);
              } catch (mailErr) {
                console.error(`❌ [Vite OTP Server] Gmail send failed:`, mailErr.message);
                deliveryError = mailErr.message;
              }
            } else {
              deliveryError = 'Gmail credentials (GMAIL_USER and GMAIL_APP_PASS) not configured in server environment.';
            }

            // 2. Resend API Fallback
            const resendKey = runtimeEnv.RESEND_API_KEY;
            if (!delivered && resendKey) {
              try {
                const r = await fetch('https://api.resend.com/emails', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${resendKey}`
                  },
                  body: JSON.stringify({
                    from: runtimeEnv.EMAIL_FROM || 'Money Control <security@moneycontrol.app>',
                    to: [cleanEmail],
                    subject: subjectText,
                    html: `
                      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
                        <h2 style="color: #c084fc; margin-top: 0;">🔐 Security Verification</h2>
                        <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                          ${actionText}
                        </p>
                        <p style="color: #94a3b8; font-size: 14px;">Your one-time verification code is:</p>
                        <div style="font-size: 34px; font-weight: 800; letter-spacing: 10px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; font-family: monospace;">
                          ${cleanOtp}
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
                  console.log(`✅ [Vite OTP Server] Email successfully sent to ${maskedEmail} via Resend`);
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

            // 3. Brevo API Fallback
            const brevoKey = runtimeEnv.BREVO_API_KEY;
            if (!delivered && brevoKey) {
              try {
                const r = await fetch('https://api.brevo.com/v3/smtp/email', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'api-key': brevoKey
                  },
                  body: JSON.stringify({
                    sender: { name: 'Money Control', email: runtimeEnv.BREVO_SENDER || 'noreply@moneycontrol.app' },
                    to: [{ email: cleanEmail }],
                    subject: subjectText,
                    htmlContent: `
                      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
                        <h2 style="color: #c084fc; margin-top: 0;">🔐 Security Verification</h2>
                        <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                          ${actionText}
                        </p>
                        <div style="font-size: 34px; font-weight: 800; letter-spacing: 10px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; font-family: monospace;">
                          ${cleanOtp}
                        </div>
                        <p style="color: #64748b; font-size: 13px;">⚠️ Expires in 5 minutes.</p>
                      </div>
                    `
                  })
                });

                if (r.ok) {
                  delivered = true;
                  provider = 'brevo';
                  console.log(`✅ [Vite OTP Server] Email successfully sent to ${maskedEmail} via Brevo`);
                }
              } catch (brevoErr) {
                console.error('❌ [Vite OTP Server] Brevo failed:', brevoErr.message);
              }
            }

            res.setHeader('Content-Type', 'application/json');
            if (delivered) {
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, delivered: true, provider, message: 'OTP sent successfully! Check your email.' }));
            } else {
              res.statusCode = 502;
              res.end(JSON.stringify({
                success: false,
                delivered: false,
                error: deliveryError || 'Unable to send OTP. Please try again.'
              }));
            }
          } catch (err) {
            console.error('❌ [Vite OTP Server] Unhandled error:', err.message);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, delivered: false, error: err.message || 'Unable to send OTP. Please try again.' }));
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
      host: true, // Listen on 0.0.0.0 so mobile devices on the same Wi-Fi can connect
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
