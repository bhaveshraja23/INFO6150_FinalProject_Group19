export const BASE_URL = `http://localhost:3000`;

// authentication endpoints
export const SIGN_IN_ENDPOINT = `/api/sign-in`;

// booking an order
export const CUSTOMER_TABLE_BOOK_ENDPOINT = `/admin/dashboard`;

// admin endpoints starts
// dashboard
export const ADMIN_DASHBOARD_ENDPOINT = `/admin/dashboard`;

// menu
export const ADMIN_MENU_CREATE_ENDPOINT = `/api/admin/menu`;
export const ADMIN_MENU_CREATE_WITH_ID_ENDPOINT = (menu_id) =>
  `/api/admin/menu/${menu_id}`;

// menu items
export const ADMIN_MENU_ITEM_WITH_MENU_ID_ENDPOINT = (menu_id) =>
  `/api/admin/menu/${menu_id}/menu-item`;
export const ADMIN_MENU_ITEM_CREATE_ENDPOINT = `/api/admin/menu-item`;
export const ADMIN_MENU_ITEM_CREATE_WITH_ID_ENDPOINT = (menu_item_id) =>
  `/api/admin/menu-item/${menu_item_id}`;

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
export const STAFF_TABLES_ENDPOINT = `/api/admin/table`; // getting all the tables
export const STAFF_TABLE_WITH_TABLE_ID_ENDPOINT = `/api/staff/v2/table-update`; // updating the table status

export const STAFF_ORDERS_WITH_TABLE_ID_ENDPOINT = (table_id) =>
  `/api/staff/v2/order-by-table-id/${table_id}`; // getting all the orders under the table which status is BOOKED and INITIATED and INPROGRESS

export const STAFF_MENU_WITH_MENU_ITEMS_ENDPOINT = `/api/admin/menu-with-items`; // getting all the menu with menu items

export const STAFF_ORDER_ITEMS_WITH_ORDER_ID_ENDPOINT = (order_id) =>
  `/api/staff/order/${order_id}/order-item`; // getting order items under the order
export const STAFF_ORDER_ITEMS_ENDPOINT = `/api/staff/order-item`; // creating the order item
export const STAFF_ORDER_ITEMS_WITH_ID_ENDPOINT = (order_item_id) =>
  `/api/staff/order-item/${order_item_id}`; // update and delete order item

export const STAFF_FEEDBACK_WITH_ORDER_ID_ENDPOINT = (order_id) =>
  `/api/staff/${order_id}/feedback`; // getting feedback under the order
export const STAFF_FEEDBACK_ENDPOINT = `/api/staff/feedback`; // creating the feedback
// staff endpoints ends

// Booking an order starts user for both staff and user
export const BOOK_A_TABLE_ENDPOINT = `/api/staff/v2/book-a-table`; // create a user as customer and create a order with his id and keep the order status as booked
export const ASSIGN_ORDER_TO_TABLE_AND_STAFF_ENDPOINT = `/api/staff/v2/assign-staff-table-to-order`; // create a user as customer and create a order with his id and keep the order status as booked
// Booking an order ends
