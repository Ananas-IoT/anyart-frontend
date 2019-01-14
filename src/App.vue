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
      if (token) {
        this.user = getUserByToken(token);
        this.$store.dispatch('setUser', this.user);
      }
    }
  }
</script>

<style>
  @import './../node_modules/bootstrap/dist/css/bootstrap-grid.css';
  @import "./assets/landing/css/fonts.css";
  @import "./assets/landing/css/main.css";
</style>
