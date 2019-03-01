import axios from 'axios';
import store from '../store/store'
import {router} from '../main.js'
import eventBus from '../eventBus'

const API_URL = 'https://anyart.pythonanywhere.com';

var token = store.getters.getUserToken;

var config = {
  headers: {'Authorization': 'Bearer ' + token}
};

export function sendSketch(sketch) {

  var bodyFormData = new FormData();
  bodyFormData.set('workload', '2');
  bodyFormData.append('sketch_photo0', sketch.photo);

  const config = {
    headers: {'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer ' + token}
  };
  // config['Content-Type'] = 'multipart/form-data';

  const url = `${API_URL}/workload/sketches/`;
  axios.post(url, bodyFormData, config)
    .then(response => {
      console.log(response);
      getLastSketch(response.data.id);
    })
    .catch(err => {
      console.log(err.data);
    });
}

export function getSkechesById(req_id) {
  const url = `${API_URL}/workload/sketches/`;
  axios.get(url, config)
    .then(response => {
      console.log('getSketchesById:' + response);
    })
    .catch(err => {

    });
}

function getLastSketch(sketch_id) {
  const url = `${API_URL}/workload/sketches/`;
  axios.get(url, config)
    .then(response => {
      console.log('getLastSketch:' + response);
    })
    .catch(err => {

    });
}
