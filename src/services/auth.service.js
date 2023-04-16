import axios from "axios";
// api routes
import { SIGN_IN_ENDPOINT } from "../constants/api-routes";

export const authService = {
  login: async (data) => {
    try {
      const response = await axios.post(SIGN_IN_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
