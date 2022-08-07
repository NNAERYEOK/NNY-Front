import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

export default http
  ? axios.create({
      baseURL: "~~~~",
      headers: {
        "X-AUTH-TOKEN": token,
      },
    })
  : axios.create({
      baseURL: "~~~~",
    });
