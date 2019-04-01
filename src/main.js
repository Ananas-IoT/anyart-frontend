import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import {store} from "./store/store"
import * as VueGoogleMaps from 'vue2-google-maps'
import Meta from 'vue-meta'
import Vuetify from 'vuetify'

import 'bootstrap'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Meta);
Vue.use(Vuetify, {
  theme: {
    primary: '#770d85'
  }
});

var key;
try {
  var getGoogleAPIKey = require("../maps-api-key");
  key = getGoogleAPIKey.getGoogleAPIKey();
} catch (e) {
  key = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;
}

Vue.use(VueGoogleMaps, {
  load: {
    key: key,
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

var filterTextLength = function (text, lenth, clamp) {
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > lenth ? content.slice(0, lenth) + clamp : content;
};
Vue.filter('textLength', filterTextLength);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
});


