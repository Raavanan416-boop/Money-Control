// ============================================
// 💰 Money Control — Email Notification Service
// Secure backend delivery via /api/send-otp
// ============================================

/**
 * Dispatch OTP email notification to the user's Gmail/email address
 * Uses the secure backend endpoint /api/send-otp.
 * Only returns success: true when the server confirms real email delivery acceptance.
 * 
 * @param {Object} options
 * @param {string} options.email - User email address
 * @param {string} options.otp - 6-digit OTP code
 * @param {string} options.itemName - Name of item being modified/deleted
 * @param {string} options.itemType - Type of item ('Transaction Edit', 'Account', etc.)
 * @param {string} [options.field] - Name of field being unlocked (e.g. Amount, Date)
 * @returns {Promise<{ success: boolean, delivered: boolean, via?: string, error?: string, details?: Object }>}
 */
export async function sendOtpEmailNotification({ email, otp, itemName, itemType, field }) {
  const cleanEmail = String(email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!cleanEmail || !emailRegex.test(cleanEmail)) {
    console.warn('sendOtpEmailNotification: Invalid or missing recipient email.');
    return { success: false, delivered: false, error: 'A valid recipient email address is required.' };
  }

  const cleanOtp = String(otp || '').trim();
  if (!cleanOtp || !/^\d{6}$/.test(cleanOtp)) {
    return { success: false, delivered: false, error: 'A valid 6-digit OTP code is required.' };
  }

  try {
    const res = await fetch('/api/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: cleanEmail,
        otp: cleanOtp,
        itemName,
        itemType,
        field
      })
    });

    const data = await res.json().catch(() => ({}));

    if (res.ok && data.delivered === true) {
      return {
        success: true,
        delivered: true,
        via: data.provider || 'api',
        details: data
      };
    }

    const failureReason = data.error || (res.ok ? 'Email was not accepted for delivery by the provider.' : `Server error (${res.status})`);
    console.error('OTP email delivery failed:', failureReason);
    return {
      success: false,
      delivered: false,
      error: failureReason,
      details: data
    };
  } catch (err) {
    console.error('Network error calling /api/send-otp:', err);
    return {
      success: false,
      delivered: false,
      error: 'Unable to reach the verification email server. Please check your network connection.'
    };
  }
}

