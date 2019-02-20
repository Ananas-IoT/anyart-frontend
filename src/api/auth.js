import axios from 'axios';
import store from '../store/store'
import eventBus from '../eventBus'

const API_URL = 'https://anyart.pythonanywhere.com';

export function getUserByToken(token, refresh) {

  const config = {
    headers: {'Authorization': 'Bearer ' + token}
  };

  // const API_URL = 'https://4c9a124f-18b2-4645-b302-bed12149859a.mock.pstmn.io';
  // const url = `${API_URL}/get_by_token`;

  const url = `${API_URL}/authorization/profile/`;

  axios.get(url, config)
    .then(response => {
      console.log(response);

      let user = response.data;
      user.role = response.data.user_profile.rights;

      store.dispatch('setUser', user);

      // to AppHeader.vue
      eventBus.$emit('checkUser', user);
    })
    .catch(err => {
      console.log(err);
      refreshToken(refresh);
    });
}

function refreshToken(refresh) {

  const config = {
    headers: {'Origin': 'https://gurman.pythonanywhere.com'}
  };

  const url = `${API_URL}/authorization/token/refresh/`;

  axios.post(url, {refresh}, config)
    .then(response => {
      console.log(response);
      getUserByToken(response.data.access);
    });
}
