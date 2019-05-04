import axios from 'axios';
import store from '../store/store'
import eventBus from '../eventBus'

const API_URL = 'https://anyart.pythonanywhere.com';

// var token = store.getters.getUserToken;
// var config = {
//   headers: {'Authorization': 'Bearer ' + token}
// };

export function getMyRequests(resolve, reject) {
  let token = store.getters.getUserToken;
  let config = {
    headers: {'Authorization': 'Bearer ' + token}
  };
  const url = `${API_URL}/workload/wall_photo_wrappers/?my=1`;
  axios.get(url, config)
    .then(response => {
      resolve(response.data.results);
    })
    .catch(err => {
      console.log('getMyRequests ERROR:', err.response);
    });
}

export function getMySketches(resolve, reject) {
  let token = store.getters.getUserToken;
  let config = {
    headers: {'Authorization': 'Bearer ' + token}
  };
  const url = `${API_URL}/workload/sketches/?my=1`;
  // console.log('getSketchesById url:', url);
  axios.get(url, config)
    .then(response => {
      resolve(response.data.results);
    })
    .catch(err => {
      console.log('getMySketches ERROR:', err.response);
      // console.log(config.headers.Authorization);
    });
}
