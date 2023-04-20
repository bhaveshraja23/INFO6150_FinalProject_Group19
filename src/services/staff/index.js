import axios from "axios";
// api routes
import {
  STAFF_TABLES_ENDPOINT,
  STAFF_TABLE_WITH_TABLE_ID_ENDPOINT,
  STAFF_ORDERS_WITH_TABLE_ID_ENDPOINT,
  STAFF_MENU_WITH_MENU_ITEMS_ENDPOINT,
  STAFF_ORDER_ITEMS_WITH_ORDER_ID_ENDPOINT,
  STAFF_ORDER_ITEMS_ENDPOINT,
  STAFF_ORDER_ITEMS_WITH_ID_ENDPOINT,
  STAFF_FEEDBACK_WITH_ORDER_ID_ENDPOINT,
  STAFF_FEEDBACK_ENDPOINT,
  BOOK_A_TABLE_ENDPOINT,
  ASSIGN_ORDER_TO_TABLE_AND_STAFF_ENDPOINT,
} from "../../constants/api-routes";

export const staffService = {
  getAllTables: async () => {
    try {
      const response = await axios.get(STAFF_TABLES_ENDPOINT);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  updateTable: async (data) => {
    try {
      const response = await axios.put(
        STAFF_TABLE_WITH_TABLE_ID_ENDPOINT,
        data
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getOrdersUnderTable: async (table_id) => {
    try {
      const response = await axios.get(
        STAFF_ORDERS_WITH_TABLE_ID_ENDPOINT(table_id)
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  menuWithMenuItems: async () => {
    try {
      const response = await axios.get(STAFF_MENU_WITH_MENU_ITEMS_ENDPOINT);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  createOrder: async (data) => {
    try {
      const response = await axios.post(BOOK_A_TABLE_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  assignOrder: async (data) => {
    try {
      const response = await axios.post(
        ASSIGN_ORDER_TO_TABLE_AND_STAFF_ENDPOINT,
        data
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getOrderItemsWithOrderId: async (order_id) => {
    try {
      const response = await axios.get(
        STAFF_ORDER_ITEMS_WITH_ORDER_ID_ENDPOINT(order_id)
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  createOrderItem: async (data) => {
    try {
      const response = await axios.post(STAFF_ORDER_ITEMS_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  updateOrderItem: async (data) => {
    try {
      const response = await axios.put(
        STAFF_ORDER_ITEMS_WITH_ID_ENDPOINT(data.id),
        data
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  deleteOrderItem: async (id) => {
    try {
      const response = await axios.delete(
        STAFF_ORDER_ITEMS_WITH_ID_ENDPOINT(id)
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getFeedbackWithOrderId: async (order_id) => {
    try {
      const response = await axios.get(
        STAFF_FEEDBACK_WITH_ORDER_ID_ENDPOINT(order_id)
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  createFeedback: async (data) => {
    try {
      const response = await axios.post(STAFF_FEEDBACK_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
