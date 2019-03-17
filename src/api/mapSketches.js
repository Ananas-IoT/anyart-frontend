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

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer ' + token
    }
  };

  workloadUrl = workloadUrl+'sketches/';
  console.log('before post', workloadUrl);
  var http = new XMLHttpRequest();
  http.open('POST', workloadUrl, true);
  http.setRequestHeader('Content-Type', 'multipart/form-data');
  http.setRequestHeader('Authorization', 'Bearer ' + token);

  http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
      console.log(http.responseText);
    }
  }
  http.send(sketch);
  // axios.post(workloadUrl, bodyFormData, config)
  //   .then(response => {
  //     console.log('response', response);
  //     // getLastSketch(response.data.id);
  //   })
  //   .catch(err => {
  //     console.log('post error: ', err.data);
  //   });
}

export function getSkechesById(req_id) {
  const url = `${API_URL}/workload/sketches/`;
  axios.get(url, config)
    .then(response => {
      console.log('getSketchesById:' + response);
      for (let i = 0; i < response.data.count; i++) {
        // addProbes();
      }
    })
    .catch(err => {

    });
}

function getLastSketch(sketch_id) {
  const url = `${API_URL}/workload/sketches/`;
  axios.get(url, config)
    .then(response => {
      console.log('getLastSketch:' + response);
      // addProbes()
    })
    .catch(err => {

    });
}

function addProbes(sketch) {
  sketch.approvals = {
    architect: false,
    artExpert: false,
    administration: false
  };
  sketch.votes = 100 * Math.random();
  return sketch;
}
