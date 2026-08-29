// ============================================
// 💰 Money Control — Profile Page Component
// ============================================

import { logout, updateUserProfile, changePassword } from '../services/auth.js';
import { formatDate } from '../utils/formatters.js';
import { openModal, closeModal, showConfirm } from '../components/modal.js';
import { validateName, validatePassword, validateConfirmPassword } from '../utils/validators.js';
import { toast } from '../utils/toast.js';

let state = {
  user: null,
  profile: null
};

/**
 * Render Profile HTML
 */
export function renderProfilePage(appState) {
  state = { ...state, ...appState };
  const { user, profile } = state;

  const name = profile?.name || user?.displayName || 'User';
  const email = user?.email || profile?.email || '';
  const initialLetter = name.charAt(0).toUpperCase();
  const joinedDate = profile?.createdAt ? formatDate(profile.createdAt.split('T')[0]) : 'Recently';

  return `
    <div class="page animate-fade-in">
      <!-- Profile Header -->
      <div class="profile-header card" style="margin-bottom: var(--space-6);">
        <div class="profile-avatar">${initialLetter}</div>
        <h1 class="profile-name">${name}</h1>
        <p class="profile-email">${email}</p>
        <p class="profile-joined">Member since ${joinedDate}</p>
      </div>

      <!-- Profile Actions Group -->
      <div class="settings-group" style="margin-bottom: var(--space-6);">
        <div class="settings-item" id="btn-edit-profile">
          <div class="settings-item-left">
            <div class="settings-item-icon">✏️</div>
            <div>
              <div class="settings-item-text">Edit Profile</div>
              <div class="settings-item-subtitle">Change your full name</div>
            </div>
          </div>
          <div class="settings-item-right">❯</div>
        </div>

        <div class="settings-item" id="btn-change-password">
          <div class="settings-item-left">
            <div class="settings-item-icon">🔑</div>
            <div>
              <div class="settings-item-text">Change Password</div>
              <div class="settings-item-subtitle">Update account password</div>
            </div>
          </div>
          <div class="settings-item-right">❯</div>
        </div>

        ${state.profile?.pinEnabled ? `
          <div class="settings-item" id="btn-profile-lock-app" style="cursor: pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">🔒</div>
              <div>
                <div class="settings-item-text">Lock App</div>
                <div class="settings-item-subtitle">Lock the app and require PIN to unlock</div>
              </div>
            </div>
            <div class="settings-item-right">❯</div>
          </div>
        ` : ''}

        <div class="settings-item danger" id="btn-profile-logout">
          <div class="settings-item-left">
            <div class="settings-item-icon">🚪</div>
            <div>
              <div class="settings-item-text">Log Out</div>
              <div class="settings-item-subtitle">Sign out of Money Control</div>
            </div>
          </div>
          <div class="settings-item-right">❯</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Attach Profile Listeners
 */
export function attachProfileListeners(onLogout, refreshData) {
  // Edit Profile
  const editBtn = document.getElementById('btn-edit-profile');
  if (editBtn) {
    editBtn.onclick = () => {
      const currentName = state.profile?.name || state.user?.displayName || '';
      const content = `
        <form id="edit-profile-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="profile-name-input">Full Name</label>
            <input type="text" id="profile-name-input" class="form-input" value="${currentName}" required autofocus />
            <div class="form-error" id="profile-name-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-profile-name">Save Changes</button>
        </form>
      `;

      openModal({
        title: '✏️ Edit Profile',
        content,
        onOpen: (modal) => {
          modal.querySelector('#edit-profile-form').onsubmit = async (e) => {
            e.preventDefault();
            const newName = modal.querySelector('#profile-name-input').value;
            const err = validateName(newName);
            if (err) {
              modal.querySelector('#profile-name-error').textContent = err;
              return;
            }

            const submitBtn = modal.querySelector('#btn-save-profile-name');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="spinner"></span> Saving...`;

            try {
              await updateUserProfile(newName);
              closeModal();
              toast.success('Profile updated!');
              if (refreshData) refreshData();
            } catch (error) {
              toast.error('Unable to update profile.');
              submitBtn.disabled = false;
              submitBtn.innerHTML = 'Save Changes';
            }
          };
        }
      });
    };
  }

  // Change Password
  const passBtn = document.getElementById('btn-change-password');
  if (passBtn) {
    passBtn.onclick = () => {
      const content = `
        <form id="change-pass-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="curr-pass">Current Password</label>
            <input type="password" id="curr-pass" class="form-input" required autofocus />
            <div class="form-error" id="curr-pass-error"></div>
          </div>
          <div class="form-group">
            <label class="form-label" for="new-pass">New Password</label>
            <input type="password" id="new-pass" class="form-input" required />
            <div class="form-error" id="new-pass-error"></div>
          </div>
          <div class="form-group">
            <label class="form-label" for="confirm-new-pass">Confirm New Password</label>
            <input type="password" id="confirm-new-pass" class="form-input" required />
            <div class="form-error" id="confirm-new-pass-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-new-pass">Update Password</button>
        </form>
      `;

      openModal({
        title: '🔑 Change Password',
        content,
        onOpen: (modal) => {
          modal.querySelector('#change-pass-form').onsubmit = async (e) => {
            e.preventDefault();
            const curr = modal.querySelector('#curr-pass').value;
            const newP = modal.querySelector('#new-pass').value;
            const conf = modal.querySelector('#confirm-new-pass').value;

            // Reset errors
            modal.querySelector('#curr-pass-error').textContent = '';
            modal.querySelector('#new-pass-error').textContent = '';
            modal.querySelector('#confirm-new-pass-error').textContent = '';

            const newErr = validatePassword(newP);
            if (newErr) {
              modal.querySelector('#new-pass-error').textContent = newErr;
              return;
            }

            const confErr = validateConfirmPassword(newP, conf);
            if (confErr) {
              modal.querySelector('#confirm-new-pass-error').textContent = confErr;
              return;
            }

            const submitBtn = modal.querySelector('#btn-save-new-pass');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="spinner"></span> Updating...`;

            try {
              await changePassword(curr, newP);
              closeModal();
              toast.success('Password updated successfully!');
            } catch (error) {
              modal.querySelector('#curr-pass-error').textContent = 'Incorrect current password or re-authentication failed.';
              submitBtn.disabled = false;
              submitBtn.innerHTML = 'Update Password';
            }
          };
        }
      });
    };
  }

  // Logout
  const logoutBtn = document.getElementById('btn-profile-logout');
  if (logoutBtn) {
    logoutBtn.onclick = async () => {
      const confirmed = await showConfirm({
        icon: '🚪',
        title: 'Log Out',
        message: 'Are you sure you want to log out of Money Control?',
        confirmText: 'Log Out',
        danger: true
      });
      if (confirmed) {
        await logout();
        toast.info('Logged out.');
        if (onLogout) onLogout();
      }
    };
  }

  // Lock App
  const lockAppBtn = document.getElementById('btn-profile-lock-app');
  if (lockAppBtn) {
    lockAppBtn.onclick = () => {
      window.dispatchEvent(new CustomEvent('lock-app'));
    };
  }
}
