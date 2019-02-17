import axios from 'axios';
import store from '../store/store'
import eventBus from '../eventBus'

export function getUserByToken(token, refresh) {

  const config = {
    headers: {'Origin': 'http://gurman.pythonanywhere.com',
              'Authorization': 'Bearer ' + token}
  };
  // console.log(config);
  // const API_URL = 'https://4c9a124f-18b2-4645-b302-bed12149859a.mock.pstmn.io';
  const API_URL = 'https://gurman.pythonanywhere.com';
  // const url = `${API_URL}/get_by_token`;
  const url = `${API_URL}/authorization/profile/`;
  axios.get(url, config)
    .then(response => {
      console.log(response);
      // store.dispatch('setUser', response.data.user);

      //to AppHeader.vue
      // eventBus.$emit('checkUser', response.data.user);
    });


  // if (token === '1') {
  //   console.log(token);
  //   return {
  //     first_name: "Daniil",
  //     last_name: "Lohvinov",
  //     role: "basic"
  //   }
  // }
  // if (token === '2') {
  //   return {
  //     first_name: "Artist",
  //     last_name: "Artist",
  //     role: "artist"
  //   }
  // }
  // if (token === '3') {
  //   return {
  //     first_name: "Vasyl",
  //     last_name: "Vasyl",
  //     role: "government"
  //   }
  // }
}
