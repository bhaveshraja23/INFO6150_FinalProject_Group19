import axios from "axios";
// api routes
import {
  ADMIN_STAFF_ENDPOINT,
  ADMIN_STAFF_WITH_ID_ENDPOINT,
} from "../../constants/api-routes";

export const staffService = {
  getAll: async () => {
    try {
      const response = await axios.get(ADMIN_STAFF_ENDPOINT);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  getById: async (id) => {
    try {
      const response = await axios.get(ADMIN_STAFF_WITH_ID_ENDPOINT(id));
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  create: async (data) => {
    try {
      const response = await axios.post(ADMIN_STAFF_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  update: async (data) => {
    try {
      const response = await axios.put(
        ADMIN_STAFF_WITH_ID_ENDPOINT(data.id),
        data
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  delete: async (id) => {
    try {
      const response = await axios.delete(ADMIN_STAFF_WITH_ID_ENDPOINT(id));
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
