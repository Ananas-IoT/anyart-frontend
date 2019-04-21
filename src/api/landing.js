import axios from 'axios'

const API_URL = 'http://35.234.78.240';

export function sendMessage(message, callback) {
  const config = {
    headers: {}
  };

  const url = `${API_URL}/authorization/feedback/`;
  axios.post(url, message, config)
    .then(response => {
      callback();
    })
    .catch(error => {
      callback(error);
    });
}
