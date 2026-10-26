// ============================================
// 💰 Money Control — Transaction Templates Service
// Local-first transaction templates with offline IndexedDB & Firebase sync
// ============================================

import {
  putItem,
  getItem,
  deleteItem,
  getItemsByUserId,
  enqueueSyncOperation,
  generateLocalId
} from './local-db.js';
import { syncPendingOperations } from './sync-engine.js';

/**
 * Create a new transaction template
 * @param {string} uid - User UID
 * @param {Object} data - Template details
 * @returns {Promise<Object>} Created template object
 */
export async function createTemplate(uid, data) {
  if (!uid) throw new Error('User ID is required.');
  if (!data.name || !data.name.trim()) throw new Error('Template name is required.');

  const tmplId = generateLocalId('tmpl');
  const template = {
    id: tmplId,
    userId: uid,
    name: data.name.trim(),
    type: data.type || 'EXPENSE',
    amount: Number(data.amount) || 0,
    category: data.category || 'Other',
    reason: (data.reason || '').trim(),
    notes: (data.notes || '').trim(),
    accountId: data.accountId || '',
    destinationAccountId: data.destinationAccountId || '',
    sourceAccountId: data.sourceAccountId || '',
    syncStatus: 'pending',
    createdAt: new Date().toISOString()
  };

  // 1. Save to local IndexedDB immediately
  await putItem('templates', template);

  // 2. Queue sync operation
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'template',
    action: 'CREATE',
    entityId: tmplId,
    payload: template
  });

  // 3. Trigger background sync if online
  syncPendingOperations(false).catch(() => {});

  return template;
}

/**
 * Get all templates for a user from IndexedDB
 * @param {string} uid - User UID
 * @returns {Promise<Array>}
 */
export async function getUserTemplates(uid) {
  if (!uid) return [];
  const templates = await getItemsByUserId('templates', uid);
  return templates.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
}

/**
 * Delete a template
 * @param {string} uid - User UID
 * @param {string} templateId - Template ID
 */
export async function deleteTemplate(uid, templateId) {
  if (!uid || !templateId) return;

  // 1. Delete from local IndexedDB
  await deleteItem('templates', templateId);

  // 2. Queue delete sync operation
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'template',
    action: 'DELETE',
    entityId: templateId,
    payload: { id: templateId }
  });

  // 3. Trigger sync
  syncPendingOperations(false).catch(() => {});
}
