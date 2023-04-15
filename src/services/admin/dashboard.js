import axios from "axios";
// api routes
import { ADMIN_DASHBOARD_ENDPOINT } from "../../constants/api-routes";

export const dashboardService = {
  get: async (data) => {
    try {
      const response = await axios.get(ADMIN_DASHBOARD_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
