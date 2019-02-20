<template>
  <div>

    <router-view v-if="window.width >= 1280"></router-view>

    <div
      class="app__small-resolution"
      v-if="window.width < 1280">
      <h2 class="app__small-resolution-text">
        Unfortunately, adaptive version of website is in development now. <br> Try to use your desktop browser!
      </h2>
    </div>

  </div>
</template>

<script>
  import {getUserByToken} from './api/auth'
  // import axios from 'axios'

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
    created: function () {
      let token = localStorage.getItem('user-token');
      const refresh = localStorage.getItem('token-refresh');
      if (token) {
        this.$store.dispatch('setUserToken', token);
        this.$store.dispatch('setRefreshToken', refresh);
        // token = '1';
        this.user = getUserByToken(token, refresh);
        // this.$store.dispatch('setUser', this.user);
      }

      //get resolution on start
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      }
    }

  }
</script>

<style>
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
