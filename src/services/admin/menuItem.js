import {
  ADMIN_MENU_ITEM_CREATE_ENDPOINT,
  ADMIN_MENU_ITEM_CREATE_WITH_ID_ENDPOINT,
  ADMIN_MENU_ITEM_WITH_MENU_ID_ENDPOINT,
} from "../../constants/api-routes";

import axios from "axios";

export const menuItemService = {
  getAllMenuItemsWithMenuId: async (menu_id) => {
    try {
      const response = await axios.get(
        ADMIN_MENU_ITEM_WITH_MENU_ID_ENDPOINT(menu_id)
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  getAll: async () => {
    try {
      const response = await axios.get(ADMIN_MENU_ITEM_CREATE_ENDPOINT);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  getById: async (id) => {
    try {
      const response = await axios.get(
        ADMIN_MENU_ITEM_CREATE_WITH_ID_ENDPOINT(id)
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  create: async (data) => {
    try {
      const response = await axios.post(ADMIN_MENU_ITEM_CREATE_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  update: async (data) => {
    try {
      const response = await axios.put(
        ADMIN_MENU_ITEM_CREATE_WITH_ID_ENDPOINT(data.id),
        data
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  delete: async (id) => {
    try {
      const response = await axios.delete(
        ADMIN_MENU_ITEM_CREATE_WITH_ID_ENDPOINT(id)
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
