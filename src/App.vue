<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getUserByToken} from './api/auth'

  export default {
    name: 'app',
    data() {
      return {
        window: {
          width: 0,
          height: 0
        }
      }
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'AnyArt',
      // all titles will be injected into this template
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ]
    },
    created: function () {
      let token = localStorage.getItem('user-token');
      const refresh = localStorage.getItem('token-refresh');
      if (token) {
        this.$store.dispatch('setUserToken', token);
        this.$store.dispatch('setRefreshToken', refresh);
        this.user = getUserByToken(token, refresh);
      }

    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
    }

  }
</script>

<style>
  @import "~vuetify/dist/vuetify.min.css";
  @import './../node_modules/bootstrap/dist/css/bootstrap-grid.css';
  @import "./assets/css/fonts.css";
  @import "./assets/css/main.css";

  .app__small-resolution {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #269abc;
  }

  .app__small-resolution-text {
    text-align: center;
    margin-top: 220px;
    padding: 10%;
  }
</style>
