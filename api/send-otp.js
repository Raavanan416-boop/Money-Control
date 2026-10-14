// ============================================
// 💰 Money Control — Serverless OTP Email Sender
// Used by Vercel deployment for /api/send-otp
// ============================================

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, otp, itemName, itemType, field } = req.body || {};

    if (!email || !otp) {
      return res.status(400).json({ error: 'Email and OTP are required' });
    }

    const isEditOtp = itemType === 'Transaction Edit';
    const fieldName = field || '';
    const actionText = isEditOtp
      ? (fieldName
          ? `You requested to unlock the <strong style="color: #c084fc;">${fieldName}</strong> field to edit transaction: <strong style="color: #a855f7;">${itemName || 'Transaction'}</strong>.`
          : `You requested to unlock and correct transaction: <strong style="color: #a855f7;">${itemName || 'Transaction'}</strong>.`)
      : `You requested to permanently delete <strong style="color: #f87171;">${itemName || 'Item'}</strong> (${itemType || 'Record'}).`;
    const subjectText = isEditOtp
      ? `🔐 Money Control — Unlock ${fieldName ? fieldName + ' ' : ''}Verification: ${otp}`
      : `🔐 Money Control Verification Code: ${otp}`;
    const plainText = isEditOtp
      ? `Your Money Control verification code is: ${otp}. It will expire in 5 minutes. ${fieldName ? 'Unlock ' + fieldName + ' to edit' : 'Transaction edit unlock for'}: ${itemName || 'Transaction'}`
      : `Your Money Control verification code is: ${otp}. It will expire in 5 minutes. Permanent deletion of: ${itemName || 'Item'}`;

    console.log(`[OTP DISPATCH] OTP requested for ${email} (${isEditOtp ? 'Edit ' + (fieldName || 'Field') : 'Delete'} ${itemName})`);

    // 1. Send via Gmail SMTP if configured
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = (process.env.GMAIL_APP_PASS || process.env.GMAIL_PASS || '').replace(/\s+/g, '');

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

        return res.status(200).json({ success: true, delivered: true, provider: 'gmail-nodemailer' });
      } catch (mailErr) {
        console.error('Nodemailer error on Vercel:', mailErr);
      }
    }

    // 2. Send via Resend if configured
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'Money Control <security@moneycontrol.app>',
          to: [email],
          subject: subjectText,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
              <h2 style="color: #c084fc; margin-top: 0;">🔐 Security Verification</h2>
              <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                ${actionText}
              </p>
              <p style="color: #94a3b8; font-size: 14px;">Your one-time verification code is:</p>
              <div style="font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0;">
                ${otp}
              </div>
              <p style="color: #64748b; font-size: 13px; line-height: 1.4;">
                ⚠️ This code expires in 5 minutes. Never share this code with anyone.
              </p>
            </div>
          `
        })
      });

      if (response.ok) {
        return res.status(200).json({ success: true, delivered: true, provider: 'resend' });
      }
    }

    // 3. Send via Brevo if configured
    if (process.env.BREVO_API_KEY) {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: { name: 'Money Control', email: process.env.BREVO_SENDER || 'noreply@moneycontrol.app' },
          to: [{ email }],
          subject: subjectText,
          htmlContent: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0d1b; color: #f1f5f9; padding: 32px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #2d2640;">
              <h2 style="color: #c084fc; margin-top: 0;">🔐 Security Verification</h2>
              <p style="color: #94a3b8; font-size: 15px; line-height: 1.5;">
                ${actionText}
              </p>
              <div style="font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #a855f7; background: #1a162b; border: 1px solid #3b2d54; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0;">
                ${otp}
              </div>
              <p style="color: #64748b; font-size: 13px; line-height: 1.4;">
                ⚠️ This code expires in 5 minutes. Never share this code with anyone.
              </p>
            </div>
          `
        })
      });

      if (response.ok) {
        return res.status(200).json({ success: true, delivered: true, provider: 'brevo' });
      }
    }

    return res.status(200).json({ success: true, delivered: false, provider: 'fallback' });
  } catch (error) {
    console.error('send-otp error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
