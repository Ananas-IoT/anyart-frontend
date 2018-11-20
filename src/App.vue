<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import './api/auth'

  export default {
    name: 'app',
    data() {
      return {}
    },
    // created: function () {
    //   const token = localStorage.getItem('user-token');
    //   if (token) {
    //     // token = JSON.parse(token);
    //     this.user = getUserByToken(token);
    //     this.$store.dispatch('setUser', this.user);
    //
    //     this.$router.push('/');
    //   }
    // }
  }
</script>

<style>
  @import './../node_modules/bootstrap/dist/css/bootstrap-grid.css';
  @import "./assets/landing/css/fonts.css";
  @import "./assets/landing/css/main.css";
</style>
