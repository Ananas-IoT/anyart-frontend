import axios from 'axios'
import store from "../store/store";

const API_URL = 'https://anyart.pythonanywhere.com';
// const API_URL = 'htt://35.234.78.240';

export function sendMessage(message, resolve, reject) {
  var config = {
    headers: {}
  };

  let token = store.getters.getUserToken;
  // console.log(token);
  if(token) {
    config.headers["Authorization"] = "Bearer " + token;
    console.log(config.headers);
  }

  const url = `${API_URL}/authorization/feedback/`;
  axios.post(url, message, config)
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
}
