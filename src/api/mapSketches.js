import axios from 'axios';
import store from '../store/store'


const API_URL = 'https://anyart.pythonanywhere.com';
// const API_URL = 'http://35.234.78.240';


function createConfigWithToken() {
  let token = store.getters.getUserToken;
  return {
    headers: {'Authorization': 'Bearer ' + token}
  };
}

export function sendSketch(sketch, workloadUrl, resolve, reject) {
  let config = createConfigWithToken();
  config.headers['Content-type'] = 'multipart/form-data';

  // console.log('sketch itself: ', sketch);
  var bodyFormData = new FormData();
  bodyFormData.set('sketch_description', sketch.description);
  bodyFormData.append('images', sketch.images[0]);

  var url = workloadUrl + 'sketches/';
  console.log('before post', url);
  axios.post(url, bodyFormData, config)
    .then(response => {
      console.log('post sketch success', response);
      resolve();
    })
    .catch(err => {
      console.log('post sketch ERROR: ', err.response);
      reject(err);
    });
}

export function getSketchesById(workload, callback) {
  let config = createConfigWithToken();

  const url = workload + `sketches/`;
  console.log('getSketchesById url:', url);
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

export function voteForSketch(sketchId, voteId, resolve, reject) {
  let config = createConfigWithToken();

  let url = `${API_URL}/approval/sketches/` + sketchId + `/votes/`;
  if(voteId) {
    url += voteId;
    axios.delete(url, config)
      .then(response => {
        console.log(response);
        resolve();
      })
      .catch(error => {
        console.log(error.response);
        reject();
      });
  } else {
    let data = {vote: 1};
    axios.post(url, data, config)
      .then(response => {
        console.log(response);
        resolve();
      })
      .catch(error => {
        console.log(error.response);
        reject();
      });
  }
}

function getLastSketch(workloadUrl, sketch_id) {
  let config = createConfigWithToken();

  let url = workloadUrl + sketch_id;
  axios.get(url, config)
    .then(response => {
      console.log('getLastSketch:', response);
    })
    .catch(err => {
      console.log('getLastSketch ERROR:' + err.response);
    });
}
