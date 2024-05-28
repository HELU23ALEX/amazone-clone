import axios from "axios";
const axiosInstance = axios.create({
  
  // baseURL: "http://127.0.0.1:5001/clone-d14cc/us-central1/api",

  // on render
  baseURL: "https://amazon-api-deploy-do1s.onrender.com",
});

export { axiosInstance };
