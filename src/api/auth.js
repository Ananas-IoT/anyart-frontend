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
      console.log('get user by token response:', response);
      let user = response.data;
      store.dispatch('setUser', user);

      // to AppHeader, Map
      eventBus.$emit('checkUser', user);
    })
    .catch(err => {
      console.log('get user by token ERROR', err.response);
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
      eventBus.$emit('loginError', error);
    });

}

function refreshToken(refresh) {

  const config = {
    headers: {}
  };

  const url = `${API_URL}/authorization/token/refresh/`;

  axios.post(url, {refresh}, config)
    .then(response => {
      console.log('refresh token: ', response);
      getUserByToken(response.data.access);
    }).catch(error => {
      console.log('refresh token ERROR', error.response);
  });
}
