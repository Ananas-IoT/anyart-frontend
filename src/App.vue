<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getUserByToken} from './api/auth'
  // import axios from 'axios'

  export default {
    name: 'app',
    data() {
      return {}
    },
    created: function () {
      const token = localStorage.getItem('user-token');
      const refresh = localStorage.getItem('token-refresh');
      if (token) {
        this.user = getUserByToken(token, refresh);
        this.$store.dispatch('setUser', this.user);
      }
    }
  }
</script>

<style>
  @import './../node_modules/bootstrap/dist/css/bootstrap-grid.css';
  @import "./assets/css/fonts.css";
  @import "./assets/css/main.css";
</style>
