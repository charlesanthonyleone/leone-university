// Standalone stub replacing the Base44 SDK client. No network, no auth.
import { IDEAS } from '@/data/ideas';
const byDate = (a, b) => String(b.created_date || '').localeCompare(String(a.created_date || ''));
const entity = (rows) => ({
  list: async () => [...rows].sort(byDate),
  filter: async (q = {}) => rows.filter((r) => Object.entries(q).every(([k, v]) => r[k] === v)),
});
export const base44 = {
  entities: { Idea: entity(IDEAS) },
  auth: { me: async () => { throw new Error('auth disabled'); }, logout() {}, redirectToLogin() {} },
  appLogs: { logUserInApp: async () => {} },
};
