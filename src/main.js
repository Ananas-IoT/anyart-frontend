import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import {store} from "./store/store"
import * as VueGoogleMaps from 'vue2-google-maps'

import 'bootstrap'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBQyAhqhl06fqpET264Nxhz8xb0ANRJvC4",
    libraries: "places"
  }
});

export const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
});
