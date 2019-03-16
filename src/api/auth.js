import axios from 'axios';
import store from '../store/store'
import {router} from '../main.js'
import eventBus from '../eventBus'

const API_URL = 'https://anyart.pythonanywhere.com';

export function getUserByToken(token, refresh) {

  const config = {
    headers: {'Authorization': 'Bearer ' + token}
  };

  const url = `${API_URL}/authorization/profile/`;

  axios.get(url, config)
    .then(response => {
      console.log(response);

      let user = response.data;
      // user.rights = response.data.rights;

      store.dispatch('setUser', user);

      // to AppHeader.vue
      eventBus.$emit('checkUser', user);
    })
    .catch(err => {
      console.log(err);
      refreshToken(refresh);
    });
}

export function registerUser(user) {

  const config = {
    headers: {}
  };

  const url = `${API_URL}/authorization/register/`;

  axios.post(url, user, config)
    .then(response => {
      // console.log(response);
      eventBus.$emit('registerResponse', response);
      store.dispatch('setUser', user);

      let token = response.data.access;
      let refresh = response.data.refresh;

      localStorage.setItem('user-token', token);
      store.dispatch('setUserToken', token);
      localStorage.setItem('token-refresh', refresh);
      store.dispatch('setRefreshToken', refresh);

      router.push("/");
    })
    .catch(error => {
      // console.log(error);
      eventBus.$emit('registerError', error);
    })
}

export function loginUser(user) {

  const config = {
    headers: {}
  };

  const url = `${API_URL}/authorization/token/`;

  axios.post(url, user, config)
    .then(response => {
      console.log(response);

      let token = response.data.access;
      let refresh = response.data.refresh;

      getUserByToken(token, refresh);

      localStorage.setItem('user-token', token);
      store.dispatch('setUserToken', token);

      localStorage.setItem('token-refresh', refresh);
      store.dispatch('setRefreshToken', refresh);

      router.push("/")
    })
    .catch(error => {
    });

}

function refreshToken(refresh) {

  const config = {
    headers: {}
  };

  const url = `${API_URL}/authorization/token/refresh/`;

  axios.post(url, {refresh}, config)
    .then(response => {
      console.log(response);
      getUserByToken(response.data.access);
    });
}
