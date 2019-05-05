import axios from 'axios';
import store from '../store/store'
import {router} from '../main.js'
import eventBus from '../eventBus'


const API_URL = 'https://anyart.pythonanywhere.com';
// const API_URL = 'http://35.234.78.240';

function createConfigWithToken() {
  let token = store.getters.getUserToken;
  return {
    headers: {'Authorization': 'Bearer ' + token}
  };
}

export function sendRequest(request, resolve, reject) {
  let config = createConfigWithToken();
  config.headers['Content-type'] = 'multipart/form-data';

  var bodyFormData = new FormData();
  bodyFormData.set('description', request.description);
  bodyFormData.set('lat', "" + request.position.lat);
  bodyFormData.set('lng', "" + request.position.lng);
  bodyFormData.append('images', request.images[0]);

  const url = `${API_URL}/workload/workloads/`;
  axios.post(url, bodyFormData, config)
    .then(response => {
      console.log('send request: ', response);
      resolve();
      // getLastRequest(response.data.self);
    })
    .catch(err => {
      console.log('send request error: ', err.response);
      reject(err);
    });
}

export function getAllRequests(next) {
  var url;
  if(next) url = next;
  else url = `${API_URL}/workload/wall_photo_wrappers/`;
  axios.get(url)
    .then(response => {
      // console.log(response.data);
      response.data.results.forEach(function (item, idx) {
        store.dispatch('addRequest', item);
      });
      if(response.data.next) getAllRequests(response.data.next);
    })
    .catch(err => {
      console.log(err.data);
    });
}


function getLastRequest(request_id) {
  // console.log(request_id);
  getRequestById(request_id, callback);

  function callback(lastRequest) {
    // console.log(lastRequest);
    store.dispatch('addRequest', lastRequest);
  }
}

function getRequestById(request_id, callback) {

  const url = `${API_URL}/workload/wall_photo_wrappers/${request_id}`;

  axios.get(url)
    .then(response => {
      // console.log(response.data);
      // return response.data;
      callback(response.data);
    });
}

