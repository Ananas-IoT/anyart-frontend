
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

<style>
  .body {
    position: relative;
    height: 100vh;
    padding-top: 100px;
    background: url("../../assets/landing/img/main_bg1.jpg");
  }
  .body:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 0;
  }
  .body .wrap {
    position: relative;
    text-align: center;
    width: 30%;
    padding: 30px;
    margin: 0 auto 0;
    background: #fafafa;
    border-radius: 5px;
    border: 1px solid #eee;
  }
  h2 {
    font-size: 32px;
    text-align: center;
  }

  .body input {
    display: block;
    width: 300px;
    padding: 10px 15px;
    margin: 10px auto;
    border-radius: 5px;
    border: none;
    border: 1px solid #e0e0e0;
    outline: none;
  }
  .body input:focus {
    border: 1px solid #770d85;
  }

  .body button {
    position: relative;
    display: block;
    width: 200px;
    padding: 5px 15px;
    margin: auto;
    font-family: "PT Sans Bold";
    font-size: 16px;
    color: #770d85;
    background: #fff;
    border: 1px solid #770d85;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
  }

  .body button:hover {
    color: #fff;
    background: #770d85;
  }

  .invalid {
    border: 2px solid #ff0000 !important;
  }

  .authenticated {
    text-align: center;
    font-size: 48px;
  }
  .authenticated h3 {
    margin: 100px 0 20px;
  }
  .authenticated a {
    display: inline-block;
    font-size: 18px;
    border-bottom: 1px #000 solid;
  }
</style>
