import axios from "axios";
import { API_URL} from "./config";
import { isAuthenticated } from "../utils/auth";
isAuthenticated()
// SERVER SITE 
export async function getData(url) {
  return await axios.get(`${API_URL}${url}`).then(({ data }) => data);
}

export async function postData(url, body) {
  return await axios.post(`${API_URL}${url}`, body).then(({ data }) => data);
}

export async function updateData(url, body) {
  return await axios.put(`${API_URL}${url}`, body).then(({ data }) => data);
}

export async function deleteData(url, body) {
  return await axios.delete(`${API_URL}${url}`, body).then(({ data }) => data);
}

export async function updateDataFile(url, body) {
  return await axios.post(`${API_URL}${url}`, body).then(({ data }) => data);
}

export async function fetURL(url) {
  return await axios.get(`${url}`).then(({ data }) => data);
}

var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
}