import axios from "axios";

const http = axios.create({
  baseURL: "https://cha2y0ung.pythonanywhere.com",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "https://cha2y0ung.pythonanywhere.com", // 서버 domain
  },
});


// const http = axios.create(
//   { baseURL: "https://cha2y0ung.pythonanywhere.com" },
//   { withCredentials: true, crossDomain: true },
// );
// http.defaults.withCredentials = true;

export default http;
