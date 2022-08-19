import axios from "axios";

const http = axios.create({
  baseURL: "http://cha2y0ung.pythonanywhere.com",
});
http.defaults.withCredentials = true;

const token = JSON.parse(localStorage.getItem("token"));
console.log("토큰~~~~~~~~", token);

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

export default http;
