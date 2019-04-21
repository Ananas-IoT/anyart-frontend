import axios from 'axios'
import store from "../store/store";

const API_URL = 'http://35.234.78.240';

export function sendMessage(message, callback) {
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
      callback();
    })
    .catch(error => {
      callback(error);
    });
}
