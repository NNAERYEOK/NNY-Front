import axios from "axios";

const http = axios.create(
  { baseURL: "http://cha2y0ung.pythonanywhere.com" },
  { withCredentials: true, crossDomain: true },
);
http.defaults.withCredentials = true;

export default http;
