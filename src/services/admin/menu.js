import {
  ADMIN_MENU_CREATE_ENDPOINT,
  ADMIN_MENU_CREATE_WITH_ID_ENDPOINT,
} from "../../constants/api-routes";

import axios from "axios";

export const menuService = {
  getAll: async () => {
    try {
      const response = await axios.get(ADMIN_MENU_CREATE_ENDPOINT);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  getById: async (id) => {
    try {
      const response = await axios.get(ADMIN_MENU_CREATE_WITH_ID_ENDPOINT(id));
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  create: async (data) => {
    try {
      const response = await axios.post(ADMIN_MENU_CREATE_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  update: async (data) => {
    try {
      const response = await axios.put(
        ADMIN_MENU_CREATE_WITH_ID_ENDPOINT(data.id),
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
        ADMIN_MENU_CREATE_WITH_ID_ENDPOINT(id)
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
