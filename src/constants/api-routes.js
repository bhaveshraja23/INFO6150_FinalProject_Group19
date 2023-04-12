export const BASE_URL = `http://localhost:8000`;

// authentication endpoints

// booking an order
export const CUSTOMER_TABLE_BOOK_ENDPOINT = `/admin/dashboard`;

// admin endpoints starts
// dashboard
export const ADMIN_DASHBOARD_ENDPOINT = `/admin/dashboard`;

// menu

// menu items

// staff
export const ADMIN_STAFF_ENDPOINT = `/admin/staff`;
export const ADMIN_STAFF_WITH_ID_ENDPOINT = (staff_id) =>
  `/admin/staff/${staff_id}`;

// tables
export const ADMIN_TABLES_ENDPOINT = `/admin/tables`;
export const ADMIN_TABLES_WITH_ID_ENDPOINT = (table_id) =>
  `/admin/tables/${table_id}`;

// admin endpoints ends

// staff endpoints starts
// staff endpoints ends
