// ============================================
// 💰 Money Control — Validators
// ============================================

/**
 * Validate amount
 */
export function validateAmount(amount) {
  if (amount === '' || amount === null || amount === undefined) {
    return 'Please enter an amount.';
  }
  const num = Number(amount);
  if (isNaN(num)) {
    return 'Please enter a valid number.';
  }
  if (num <= 0) {
    return 'Amount must be greater than ₹0.';
  }
  if (num > 99999999) {
    return 'Amount is too large.';
  }
  return null;
}

/**
 * Validate email
 */
export function validateEmail(email) {
  if (!email || !email.trim()) {
    return 'Please enter your email.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address.';
  }
  return null;
}

/**
 * Validate password
 */
export function validatePassword(password) {
  if (!password) {
    return 'Please enter a password.';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters.';
  }
  return null;
}

/**
 * Validate confirm password
 */
export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return 'Please confirm your password.';
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match.';
  }
  return null;
}

/**
 * Validate required text field
 */
export function validateRequired(value, fieldName) {
  if (!value || !String(value).trim()) {
    return `Please enter ${fieldName}.`;
  }
  return null;
}

/**
 * Validate name
 */
export function validateName(name) {
  if (!name || !name.trim()) {
    return 'Please enter your name.';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters.';
  }
  if (name.trim().length > 50) {
    return 'Name must be less than 50 characters.';
  }
  return null;
}

/**
 * Validate date
 */
export function validateDate(date) {
  if (!date) {
    return 'Please select a date.';
  }
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    return 'Please enter a valid date.';
  }
  return null;
}

/**
 * Validate category
 */
export function validateCategory(category) {
  if (!category) {
    return 'Please select a category.';
  }
  return null;
}

/**
 * Sanitize text input — remove potentially harmful characters
 */
export function sanitizeText(text) {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/[<>]/g, '')    // Remove angle brackets
    .trim();
}

/**
 * Validate transaction form
 */
export function validateTransaction(data) {
  const errors = {};

  const amountErr = validateAmount(data.amount);
  if (amountErr) errors.amount = amountErr;

  const dateErr = validateDate(data.date);
  if (dateErr) errors.date = dateErr;

  const reasonErr = validateRequired(data.reason, 'a reason');
  if (reasonErr) errors.reason = reasonErr;

  const categoryErr = validateCategory(data.category);
  if (categoryErr) errors.category = categoryErr;

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate login form
 */
export function validateLogin(email, password) {
  const errors = {};

  const emailErr = validateEmail(email);
  if (emailErr) errors.email = emailErr;

  const passwordErr = validatePassword(password);
  if (passwordErr) errors.password = passwordErr;

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate register form
 */
export function validateRegister(name, email, password, confirmPassword) {
  const errors = {};

  const nameErr = validateName(name);
  if (nameErr) errors.name = nameErr;

  const emailErr = validateEmail(email);
  if (emailErr) errors.email = emailErr;

  const passwordErr = validatePassword(password);
  if (passwordErr) errors.password = passwordErr;

  const confirmErr = validateConfirmPassword(password, confirmPassword);
  if (confirmErr) errors.confirmPassword = confirmErr;

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
