import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import map from './map'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
      auth,
      map
  }
});
