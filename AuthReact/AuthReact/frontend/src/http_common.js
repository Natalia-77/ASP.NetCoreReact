import axios from "axios";

export default axios.create({
    //baseURL: "http://localhost:63360/",
    baseURL: "/",
    headers: {
      "Content-type": "application/json"
    }
  });