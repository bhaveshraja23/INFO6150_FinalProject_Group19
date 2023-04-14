import axios from "axios";
// api routes
import { CUSTOMER_TABLE_BOOK_ENDPOINT } from "../../constants/api-routes";

export const bookATableService = {
  create: async (data) => {
    try {
      const response = await axios.post(CUSTOMER_TABLE_BOOK_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
