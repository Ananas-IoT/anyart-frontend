<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    created: function () {
      const token = localStorage.getItem('user-token');
      if (token) {
        let user = {}; //get user by token from api
        this.$store.dispatch('setUser', user);

        this.$router.push('/');
      }
    }

  }
</script>

<style>

</style>
