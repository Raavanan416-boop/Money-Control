// ============================================
// 💰 Money Control — Serverless OTP Email Sender
// Used by Vercel deployment for /api/send-otp
// ============================================

import nodemailer from 'nodemailer';

function maskEmailForLog(email) {
  if (!email || typeof email !== 'string') return '';
  const trimmed = email.trim();
  const parts = trimmed.split('@');
  if (parts.length !== 2) return trimmed;
  const [name, domain] = parts;
  if (name.length <= 3) return `${name[0]}***@${domain}`;
  return `${name.slice(0, 2)}****${name.slice(-2)}@${domain}`;
}

export default async function handler(req, res) {
  // Configure CORS headers for mobile and cross-origin clients
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // Handle preflight OPTIONS request from mobile browsers or apps
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { email, otp, itemName, itemType, field } = req.body || {};

    const cleanEmail = String(email || '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return res.status(400).json({ success: false, delivered: false, error: 'A valid recipient email address is required.' });
    }

    const cleanOtp = String(otp || '').trim();
    if (!cleanOtp || !/^\d{6}$/.test(cleanOtp)) {
      return res.status(400).json({ success: false, delivered: false, error: 'A valid 6-digit OTP code is required.' });
    }

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

    // 1. Send via Gmail SMTP if configured (using env vars or verified server fallback)
    const gmailUser = process.env.GMAIL_USER || 'skaviraj416@gmail.com';
    const rawPass = process.env.GMAIL_APP_PASS || process.env.GMAIL_PASS || 'dqan kufp byaa jwwq';
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
        console.log(`✅ [Vercel OTP Server] Email successfully delivered to ${maskedEmail} via Gmail SMTP (msgId: ${info.messageId})`);
        return res.status(200).json({ success: true, delivered: true, provider, message: 'OTP sent successfully! Check your email.' });
      } catch (mailErr) {
        console.error('❌ Nodemailer error on Vercel:', mailErr.message);
        deliveryError = mailErr.message;
      }
    } else {
      deliveryError = 'Gmail credentials (GMAIL_USER and GMAIL_APP_PASS) not configured in server environment.';
    }

    // 2. Send via Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'Money Control <security@moneycontrol.app>',
            to: [cleanEmail],
            subject: subjectText,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
                <h2 style="color: #c084fc; margin-top: 0;">🔐 Security Verification</h2>
                <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                  ${actionText}
                </p>
                <p style="color: #94a3b8; font-size: 14px;">Your one-time verification code is:</p>
                <div style="font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0;">
                  ${cleanOtp}
                </div>
                <p style="color: #64748b; font-size: 13px; line-height: 1.4;">
                  ⚠️ This code expires in 5 minutes. Never share this code with anyone.
                </p>
              </div>
            `
          })
        });

        if (response.ok) {
          console.log(`✅ [Vercel OTP Server] Email successfully delivered to ${maskedEmail} via Resend`);
          return res.status(200).json({ success: true, delivered: true, provider: 'resend', message: 'OTP sent successfully! Check your email.' });
        } else {
          const errText = await response.text();
          console.error('❌ Resend API error on Vercel:', errText);
          deliveryError = errText;
        }
      } catch (resendErr) {
        console.error('❌ Resend fetch error on Vercel:', resendErr.message);
        deliveryError = resendErr.message;
      }
    }

    // 3. Send via Brevo if configured
    if (process.env.BREVO_API_KEY) {
      try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY
          },
          body: JSON.stringify({
            sender: { name: 'Money Control', email: process.env.BREVO_SENDER || 'noreply@moneycontrol.app' },
            to: [{ email: cleanEmail }],
            subject: subjectText,
            htmlContent: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
                <h2 style="color: #c084fc; margin-top: 0;">🔐 Security Verification</h2>
                <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                  ${actionText}
                </p>
                <div style="font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0;">
                  ${cleanOtp}
                </div>
                <p style="color: #64748b; font-size: 13px; line-height: 1.4;">
                  ⚠️ This code expires in 5 minutes. Never share this code with anyone.
                </p>
              </div>
            `
          })
        });

        if (response.ok) {
          console.log(`✅ [Vercel OTP Server] Email successfully delivered to ${maskedEmail} via Brevo`);
          return res.status(200).json({ success: true, delivered: true, provider: 'brevo', message: 'OTP sent successfully! Check your email.' });
        }
      } catch (brevoErr) {
        console.error('❌ Brevo error on Vercel:', brevoErr.message);
      }
    }

    return res.status(502).json({
      success: false,
      delivered: false,
      error: deliveryError || 'Unable to send OTP. Please try again.'
    });
  } catch (error) {
    console.error('❌ send-otp unhandled error:', error.message);
    return res.status(500).json({ success: false, delivered: false, error: error.message || 'Unable to send OTP. Please try again.' });
  }
}
