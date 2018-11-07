
<template>
  <div>
    <!--ROOT COMPONENT FOR OTHER AUTH COMPONENTS-->
    <router-view v-if="!isAuth"></router-view>
    <div class="authenticated" v-else>
      <h3>Sorry, but you are registered</h3>
      <button>back to main page</button>
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
      computed: {
          isAuth() {
            return this.$store.getters.isAuthenticated;
          }
      }
    }
</script>

<style>
  .body {
    text-align: center;
    width: 40%;
    padding: 30px;
    margin: 100px auto 0;
    background: #eee;
    border-radius: 5px;
  }
  h2 {
    text-align: center;
  }

  .body input {
    display: block;
    width: 300px;
    padding: 10px 15px;
    margin: 10px auto;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  .body button {
    display: block;
    width: 320px;
    height: 30px;
    margin: auto;
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
</style>
