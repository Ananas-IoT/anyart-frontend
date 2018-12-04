
<template>
  <div>
    <!--ROOT COMPONENT FOR OTHER AUTH COMPONENTS-->
    <router-view v-if="!isAuth"></router-view>
    <div class="authenticated" v-else>
      <h3>Sorry, but you are registered</h3>
      <button @click="logOut">Log out</button>
      <router-link to="/">back to main page</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "auth",
      data() {
          return {

          }
      },
      methods: {
          logOut: function () {
            this.$store.dispatch('clearUser');
            localStorage.removeItem('user-token')
          }
      },
      computed: {
          isAuth() {
            return this.$store.getters.isAuthenticated;
          }
      }
    }
</script>

<style scoped>

</style>
