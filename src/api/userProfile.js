import axios from 'axios';
import store from '../store/store'
import eventBus from '../eventBus'

const API_URL = 'https://anyart.pythonanywhere.com';

var token = store.getters.getUserToken;

var config = {
  headers: {'Authorization': 'Bearer  ' + token}
};

export function getMyRequests() {
  const config = {
    headers: {}
  };

  const url = `${API_URL}/workload/wall_photo_wrappers?my=1`;
  axios.get(url, config)
    .then(response => {
      return response.data.results;
    })
    .catch(err => {
      console.log(err.data);
    });
}

export function getMySketches() {
  const url = workload + `sketches/`;
  console.log('getSketchesById url:', url);
  axios.get(url)
    .then(response => {
      console.log('getSketchesById:', response.data.results);
      callback(response.data.results);
    })
    .catch(err => {
      console.log('getSketchesById ERROR:', err.response);
      // console.log(config.headers.Authorization);
    });
}
