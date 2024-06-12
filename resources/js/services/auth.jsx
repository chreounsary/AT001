import * as API_SERVICE from "./service";
import axios from "axios";
const Login = async (body) => {
  const response = await API_SERVICE.postData(`login`, body);
  return response;
};

const Register = async (body) => {
  const response = await API_SERVICE.postData(`register`, body);
  return response;
}

const getCurrentIP = async () => {
  const res = await axios.get("https://api.ipify.org/?format=json");
  return res;
}

const getTokenHttp = async () => {
  const response = await API_SERVICE.getData(`getToken`);
  return response;
}
export { 
  Login,
  Register,
  getTokenHttp,
  getCurrentIP
}
