// ============================================
// 💰 Money Control — Skeleton Loader
// ============================================

/**
 * Dashboard skeleton
 */
export function renderDashboardSkeleton() {
  return `
    <div class="page" style="opacity: 0.7;">
      <div style="margin-bottom: 24px;">
        <div class="skeleton" style="height: 28px; width: 200px; margin-bottom: 8px;"></div>
        <div class="skeleton" style="height: 14px; width: 150px;"></div>
      </div>
      <div class="skeleton" style="height: 140px; border-radius: 20px; margin-bottom: 24px;"></div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
        <div class="skeleton" style="height: 56px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 56px; border-radius: 16px;"></div>
      </div>
      ${renderTransactionSkeleton(3)}
    </div>
  `;
}

/**
 * Transaction list skeleton
 */
export function renderTransactionSkeleton(count = 5) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
        <div class="skeleton" style="width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div class="skeleton" style="height: 14px; width: 60%; margin-bottom: 8px;"></div>
          <div class="skeleton" style="height: 10px; width: 40%;"></div>
        </div>
        <div class="skeleton" style="height: 16px; width: 70px;"></div>
      </div>
    `;
  }
  return html;
}

/**
 * Analytics skeleton
 */
export function renderAnalyticsSkeleton() {
  return `
    <div class="page" style="opacity: 0.7;">
      <div style="margin-bottom: 24px;">
        <div class="skeleton" style="height: 28px; width: 150px; margin-bottom: 8px;"></div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <div class="skeleton" style="width: 40px; height: 40px; border-radius: 12px;"></div>
        <div class="skeleton" style="height: 22px; flex: 1;"></div>
        <div class="skeleton" style="width: 40px; height: 40px; border-radius: 12px;"></div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
      </div>
      <div class="skeleton" style="height: 300px; border-radius: 16px; margin-bottom: 24px;"></div>
    </div>
  `;
}

/**
 * Generic page skeleton
 */
export function renderPageSkeleton() {
  return `
    <div class="page" style="opacity: 0.7;">
      <div style="margin-bottom: 24px;">
        <div class="skeleton" style="height: 28px; width: 180px; margin-bottom: 8px;"></div>
        <div class="skeleton" style="height: 14px; width: 250px;"></div>
      </div>
      <div class="skeleton" style="height: 200px; border-radius: 16px; margin-bottom: 24px;"></div>
      <div class="skeleton" style="height: 48px; border-radius: 12px; margin-bottom: 16px;"></div>
      <div class="skeleton" style="height: 48px; border-radius: 12px; margin-bottom: 16px;"></div>
      <div class="skeleton" style="height: 48px; border-radius: 12px;"></div>
    </div>
  `;
}
