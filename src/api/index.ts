import axios from "axios";
import auth from "./auth.api";

export const webClient = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
});

const API = { auth };

export default API;
