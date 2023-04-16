export const BASE_URL = `http://localhost:3000`;

// authentication endpoints
export const SIGN_IN_ENDPOINT = `/api/sign-in`;

// booking an order
export const CUSTOMER_TABLE_BOOK_ENDPOINT = `/admin/dashboard`;

// admin endpoints starts
// dashboard
export const ADMIN_DASHBOARD_ENDPOINT = `/admin/dashboard`;

// menu

// menu items

// staff
export const ADMIN_STAFF_ENDPOINT = `/api/admin/user`;
export const ADMIN_STAFF_WITH_ID_ENDPOINT = (staff_id) =>
  `/api/admin/user/${staff_id}`;

// tables
export const ADMIN_TABLES_ENDPOINT = `/api/admin/table`;
export const ADMIN_TABLES_WITH_ID_ENDPOINT = (table_id) =>
  `/api/admin/table/${table_id}`;

// admin endpoints ends

// staff endpoints starts
// staff endpoints ends
