import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import {store} from "./store/store"
import * as VueGoogleMaps from 'vue2-google-maps'
import Meta from 'vue-meta'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

import 'bootstrap'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Meta);
Vue.use(Vuetify, {
  theme: {
    primary: '#770d85'
  }
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCfINKJQdlE9pU6Rb0r99QNmeZ9CR_q1jY",
    libraries: "places"
  }
});

export const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
});
