import axios from "axios";
export const isAuthenticated = () => {
  if (localStorage.kc99App) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + JSON.parse(localStorage.kc99App).user.usr_token;
      return true;
  }
  clearCurrentUser();
  return false;
};

export const getCurrentLang = () => {
  if (localStorage.lang) {
    return localStorage.lang;
  }
  return "th"
}

export const setCurrentLang = (lang) => {
  localStorage.lang = lang;
  return;
}

export const setCurrentUser = (data) => {
  localStorage.kc99App = JSON.stringify(data);
  isAuthenticated()
};

export const getCurrentUser = () => {
  if (localStorage.kc99App) {
    return JSON.parse(localStorage.kc99App);
  }
};
export const clearCurrentUser = () => {
  axios.defaults.headers.common.Authorization = "";
  localStorage.kc99App = null;
  delete localStorage.kc99App;
  localStorage.clear();
  return;
};
