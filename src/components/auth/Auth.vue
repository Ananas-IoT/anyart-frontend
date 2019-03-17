<template>
  <div class="auth">
    <!--ROOT COMPONENT FOR OTHER AUTH COMPONENTS-->
    <router-view v-if="!isAuth"></router-view>
    <div v-else>
      <h3 class="auth__warning">Sorry, but you are registered</h3>
      <button @click="logOut">Log out</button>
      <router-link class="auth__to-main" to="/">back to main page</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "auth",
    data() {
      return {}
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

  .auth {
    text-align: center;
    font-size: 48px;
  }

  .auth .auth__warning {
    margin: 100px 0 20px;
  }

  .auth .auth__to-main {
    display: inline-block;
    font-size: 18px;
    border-bottom: 1px #000 solid;
  }

  /*  >>>  is for ingeritance of child components  */

  >>> .auth-wrap {
    position: relative;
    height: 100vh;
    padding-top: 100px;
    font-size: 18px;
    background: url("../../assets/img/main_bg1.jpg");
  }

  >>> .auth-wrap:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  >>> .stepper {
    width: 400px;
    margin: auto;
    border-radius: 3px;
  }

  >>> .stepper-step {
    font-size: 14px;
    cursor: pointer;
  }

  >>> .stepper-items__card {
    box-shadow: none;
  }

  >>> .alert {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

  /*>>> .form-wrap {*/
  /*position: relative;*/
  /*text-align: center;*/
  /*width: 30%;*/
  /*padding: 30px;*/
  /*margin: 0 auto 0;*/
  /*background: #fafafa;*/
  /*border-radius: 5px;*/
  /*border: 1px solid #eee;*/
  /*}*/

  >>> .form__title {
    text-align: center;
    margin-bottom: 0;
    font-size: 24px;
  }

  /*>>> .form__input {*/
    /*display: block;*/
    /*width: 300px;*/
    /*padding: 10px 15px;*/
    /*margin: 10px auto;*/
    /*border-radius: 5px;*/
    /*border: none;*/
    /*border: 1px solid #e0e0e0;*/
    /*outline: none;*/
  /*}*/

  /*>>> .form__input:focus {*/
    /*border: 1px solid #770d85;*/
  /*}*/

  /*>>> .form__input__invalid {*/
    /*border: 2px solid #ff0000 !important;*/
  /*}*/

</style>
