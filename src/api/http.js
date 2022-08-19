import axios from "axios";

const http = JSON.parse(localStorage.getItem("token"));

console.log("토큰", http);

export default http
  ? axios.create({
      baseURL: "https://dev.caker.shop/",
      headers: {
        "X-AUTH-TOKEN": http,
      },
    })
  : axios.create({
      baseURL: "https://dev.caker.shop/",
    });
