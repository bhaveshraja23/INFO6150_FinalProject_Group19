import axios from "axios";
// api routes
import { BASE_URL } from "../constants/api-routes";

const base_url = BASE_URL;

axios.defaults.baseURL = base_url;
