import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import map from './map'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
      auth,
      map
  }
});

export default store;
