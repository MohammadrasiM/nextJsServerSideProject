import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", //YOUR_API_URL HERE
  headers: {
    "Content-Type": "application/json",
  },
});
