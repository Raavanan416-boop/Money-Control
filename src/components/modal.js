// ============================================
// 💰 Money Control — Modal Component
// ============================================

let activeModal = null;

/**
 * Open a modal with given content
 * @param {Object} options
 * @param {string} options.title - Modal title
 * @param {string} options.content - Modal body HTML
 * @param {string} [options.footer] - Modal footer HTML
 * @param {Function} [options.onOpen] - Callback after modal opens
 * @param {Function} [options.onClose] - Callback when modal closes
 * @param {boolean} [options.hideHeader] - Hide the header
 */
export function openModal(options) {
  closeModal(); // Close any existing modal

  const root = document.getElementById('modal-root');
  if (!root) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      ${options.hideHeader ? '' : `
        <div class="modal-header">
          <h2 class="modal-title">${options.title || ''}</h2>
          <button class="modal-close" id="modal-close-btn" aria-label="Close">✕</button>
        </div>
      `}
      <div class="modal-body">
        ${options.content || ''}
      </div>
      ${options.footer ? `<div class="modal-footer">${options.footer}</div>` : ''}
    </div>
  `;

  root.appendChild(modal);
  document.body.classList.add('no-scroll');
  activeModal = { element: modal, onClose: options.onClose };

  // Close button
  const closeBtn = modal.querySelector('#modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Escape key to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);

  // Callback
  if (options.onOpen) {
    requestAnimationFrame(() => options.onOpen(modal));
  }

  return modal;
}

/**
 * Close the currently open modal
 */
export function closeModal() {
  if (!activeModal) return;

  const { element, onClose } = activeModal;
  element.classList.add('closing');

  setTimeout(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
    document.body.classList.remove('no-scroll');
    if (onClose) onClose();
  }, 200);

  activeModal = null;
}

/**
 * Show a confirmation dialog
 */
export function showConfirm(options) {
  return new Promise((resolve) => {
    const content = `
      <div class="confirm-dialog">
        <div class="confirm-icon">${options.icon || '⚠️'}</div>
        <h3 class="confirm-title">${options.title || 'Are you sure?'}</h3>
        <p class="confirm-message">${options.message || ''}</p>
        <div class="confirm-actions">
          <button class="btn btn-outline" id="confirm-cancel">${options.cancelText || 'Cancel'}</button>
          <button class="btn ${options.danger ? 'btn-danger' : 'btn-primary'}" id="confirm-ok">
            ${options.confirmText || 'Confirm'}
          </button>
        </div>
      </div>
    `;

    openModal({
      content,
      hideHeader: true,
      onOpen: (modal) => {
        modal.querySelector('#confirm-cancel').addEventListener('click', () => {
          closeModal();
          resolve(false);
        });
        modal.querySelector('#confirm-ok').addEventListener('click', () => {
          closeModal();
          resolve(true);
        });
      },
      onClose: () => resolve(false)
    });
  });
}
