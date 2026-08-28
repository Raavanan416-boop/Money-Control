// ============================================
// 💰 Money Control — Auth Page Component
// ============================================

import { login, register, resetPassword, getAuthErrorMessage } from '../services/auth.js';
import { validateLogin, validateRegister, validateEmail } from '../utils/validators.js';
import { toast } from '../utils/toast.js';

let currentMode = 'login'; // 'login' | 'register' | 'forgot'

/**
 * Render Auth Page HTML
 */
export function renderAuthPage() {
  return `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-logo">
          <span class="auth-logo-icon">💰</span>
          <h1 class="auth-logo-title">Money Control</h1>
          <p class="auth-logo-tagline">Take control of your money.</p>
        </div>

        <div class="auth-card" id="auth-card-body">
          ${renderAuthForm()}
        </div>
      </div>
    </div>
  `;
}

function renderAuthForm() {
  if (currentMode === 'login') {
    return `
      <h2 class="auth-title">Welcome Back 👋</h2>
      <form class="auth-form" id="login-form" novalidate>
        <div class="form-group">
          <label class="form-label" for="login-email">Email Address</label>
          <input type="email" id="login-email" class="form-input" placeholder="name@example.com" autocomplete="email" required />
          <div class="form-error" id="login-email-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="login-password">Password</label>
          <div class="form-input-group">
            <input type="password" id="login-password" class="form-input" placeholder="••••••••" autocomplete="current-password" required />
            <button type="button" class="input-icon-btn" id="toggle-login-password">👁️</button>
          </div>
          <div class="form-error" id="login-password-error"></div>
        </div>

        <div class="auth-forgot">
          <span class="auth-link" id="link-forgot">Forgot Password?</span>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-login-submit">
          <span class="btn-text">Log In</span>
        </button>
      </form>

      <div class="auth-divider">OR</div>

      <div class="auth-footer">
        Don't have an account? <span class="auth-link" id="link-register">Create Account</span>
      </div>
    `;
  } else if (currentMode === 'register') {
    return `
      <h2 class="auth-title">Create Account ✨</h2>
      <form class="auth-form" id="register-form" novalidate>
        <div class="form-group">
          <label class="form-label" for="reg-name">Full Name</label>
          <input type="text" id="reg-name" class="form-input" placeholder="Rahul Sharma" autocomplete="name" required />
          <div class="form-error" id="reg-name-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="reg-email">Email Address</label>
          <input type="email" id="reg-email" class="form-input" placeholder="name@example.com" autocomplete="email" required />
          <div class="form-error" id="reg-email-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="reg-password">Password</label>
          <div class="form-input-group">
            <input type="password" id="reg-password" class="form-input" placeholder="At least 6 characters" autocomplete="new-password" required />
            <button type="button" class="input-icon-btn" id="toggle-reg-password">👁️</button>
          </div>
          <div class="form-error" id="reg-password-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="reg-confirm">Confirm Password</label>
          <input type="password" id="reg-confirm" class="form-input" placeholder="Confirm your password" autocomplete="new-password" required />
          <div class="form-error" id="reg-confirm-error"></div>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-register-submit">
          <span class="btn-text">Create Account</span>
        </button>
      </form>

      <div class="auth-footer">
        Already have an account? <span class="auth-link" id="link-login">Log In</span>
      </div>
    `;
  } else if (currentMode === 'forgot') {
    return `
      <h2 class="auth-title">Reset Password 🔑</h2>
      <p style="font-size: var(--fs-sm); color: var(--text-secondary); text-align: center; margin-bottom: 24px;">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      <form class="auth-form" id="forgot-form" novalidate>
        <div class="form-group">
          <label class="form-label" for="forgot-email">Email Address</label>
          <input type="email" id="forgot-email" class="form-input" placeholder="name@example.com" autocomplete="email" required />
          <div class="form-error" id="forgot-email-error"></div>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-forgot-submit">
          <span class="btn-text">Send Reset Link</span>
        </button>
      </form>

      <div class="auth-footer">
        Back to <span class="auth-link" id="link-login-back">Log In</span>
      </div>
    `;
  }
}

/**
 * Attach Auth Page Event Listeners
 */
export function attachAuthListeners(onAuthSuccess) {
  const cardBody = document.getElementById('auth-card-body');
  if (!cardBody) return;

  const updateView = (newMode) => {
    currentMode = newMode;
    cardBody.innerHTML = renderAuthForm();
    attachAuthListeners(onAuthSuccess);
  };

  // Toggle mode links
  const linkRegister = document.getElementById('link-register');
  if (linkRegister) linkRegister.onclick = () => updateView('register');

  const linkLogin = document.getElementById('link-login');
  if (linkLogin) linkLogin.onclick = () => updateView('login');

  const linkLoginBack = document.getElementById('link-login-back');
  if (linkLoginBack) linkLoginBack.onclick = () => updateView('login');

  const linkForgot = document.getElementById('link-forgot');
  if (linkForgot) linkForgot.onclick = () => updateView('forgot');

  // Password visibility toggle
  const toggleLoginPass = document.getElementById('toggle-login-password');
  if (toggleLoginPass) {
    toggleLoginPass.onclick = () => {
      const passInput = document.getElementById('login-password');
      if (passInput) {
        passInput.type = passInput.type === 'password' ? 'text' : 'password';
      }
    };
  }

  const toggleRegPass = document.getElementById('toggle-reg-password');
  if (toggleRegPass) {
    toggleRegPass.onclick = () => {
      const passInput = document.getElementById('reg-password');
      if (passInput) {
        passInput.type = passInput.type === 'password' ? 'text' : 'password';
      }
    };
  }

  // Handle Login Submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      // Clear previous errors
      document.getElementById('login-email-error').textContent = '';
      document.getElementById('login-password-error').textContent = '';

      const validation = validateLogin(email, password);
      if (!validation.isValid) {
        if (validation.errors.email) document.getElementById('login-email-error').textContent = validation.errors.email;
        if (validation.errors.password) document.getElementById('login-password-error').textContent = validation.errors.password;
        return;
      }

      const submitBtn = document.getElementById('btn-login-submit');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner"></span> Logging in...`;

      try {
        await login(email, password);
        toast.success('LoggedIn successfully!');
        if (onAuthSuccess) onAuthSuccess();
      } catch (err) {
        toast.error(getAuthErrorMessage(err));
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span class="btn-text">Log In</span>`;
      }
    };
  }

  // Handle Register Submission
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.onsubmit = async (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const confirm = document.getElementById('reg-confirm').value;

      // Clear errors
      document.getElementById('reg-name-error').textContent = '';
      document.getElementById('reg-email-error').textContent = '';
      document.getElementById('reg-password-error').textContent = '';
      document.getElementById('reg-confirm-error').textContent = '';

      const validation = validateRegister(name, email, password, confirm);
      if (!validation.isValid) {
        if (validation.errors.name) document.getElementById('reg-name-error').textContent = validation.errors.name;
        if (validation.errors.email) document.getElementById('reg-email-error').textContent = validation.errors.email;
        if (validation.errors.password) document.getElementById('reg-password-error').textContent = validation.errors.password;
        if (validation.errors.confirmPassword) document.getElementById('reg-confirm-error').textContent = validation.errors.confirmPassword;
        return;
      }

      const submitBtn = document.getElementById('btn-register-submit');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner"></span> Creating Account...`;

      try {
        await register(name, email, password);
        toast.success('Account created successfully!');
        if (onAuthSuccess) onAuthSuccess();
      } catch (err) {
        toast.error(getAuthErrorMessage(err));
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span class="btn-text">Create Account</span>`;
      }
    };
  }

  // Handle Forgot Password Submission
  const forgotForm = document.getElementById('forgot-form');
  if (forgotForm) {
    forgotForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = document.getElementById('forgot-email').value;
      document.getElementById('forgot-email-error').textContent = '';

      const emailErr = validateEmail(email);
      if (emailErr) {
        document.getElementById('forgot-email-error').textContent = emailErr;
        return;
      }

      const submitBtn = document.getElementById('btn-forgot-submit');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner"></span> Sending...`;

      try {
        await resetPassword(email);
        toast.success('Password reset email sent! Check your inbox.');
        updateView('login');
      } catch (err) {
        toast.error(getAuthErrorMessage(err));
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span class="btn-text">Send Reset Link</span>`;
      }
    };
  }
}
