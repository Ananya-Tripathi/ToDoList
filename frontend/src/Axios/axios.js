import axios from "axios";
const instance = axios.create({
  baseURL: "https://to-do-list-zytb.onrender.com/api",
});
export default instance;
