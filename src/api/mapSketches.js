import axios from 'axios';
import store from '../store/store'
import {router} from '../main.js'
import eventBus from '../eventBus'

const API_URL = 'https://anyart.pythonanywhere.com';

var token = store.getters.getUserToken;

var config = {
  headers: {'Authorization': 'Bearer ' + token}
};

export function sendSketch(sketch, workloadUrl) {
  console.log('sketch itself: ', sketch);
  var bodyFormData = new FormData();
  bodyFormData.set('sketch_description', sketch.description);
  bodyFormData.append('sketch_photo0', sketch.photo);

  // config['Content-Type'] = 'multipart/form-data';

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer' + token
    }
  };
  var url = workloadUrl+'sketches/';
  console.log('before post', url);
  axios.post(url, bodyFormData, config)
    .then(response => {
      console.log('response', response);
      getLastSketch(url, response.data.id);
    })
    .catch(err => {
      console.log('post error: ', err.response);
    });
}

export function getSketchesById(req_id, callback) {
  const url = `${API_URL}/workload/workloads/` + req_id + `/sketches/`;
  axios.get(url)
    .then(response => {
      // console.log('getSketchesById:', response.data.results);
      callback(response.data.results);
    })
    .catch(err => {
      console.log('getSketchesById ERROR:', err.response);
      // console.log(config.headers.Authorization);
    });
}

function getLastSketch(workloadUrl, sketch_id) {
  var url = workloadUrl + sketch_id;
  axios.get(url, config)
    .then(response => {
      console.log('getLastSketch:', response);
    })
    .catch(err => {
      console.log('getLastSketch ERROR:' + err.response);
    });
}
