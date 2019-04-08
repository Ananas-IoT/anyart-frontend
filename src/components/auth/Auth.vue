<template>
  <v-app>
  <div class="auth auth-wrap">
    <!--ROOT COMPONENT FOR OTHER AUTH COMPONENTS-->
    <router-view v-if="!isAuth"></router-view>
    <v-card v-else class="auth__logout">
      <h3 class="auth__warning">Are you really want to logout?</h3>
      <v-btn class="auth__logout__btn" color="primary" @click="logOut">Log out</v-btn>
      <router-link class="auth__to-main" to="/">back to main page</router-link>
    </v-card>
  </div>
  </v-app>
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
        localStorage.removeItem('user-token');
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
    width: 100vw;
  }

  .auth__logout {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 320px;
    min-height: 100px;
    padding: 20px;
    transform: translate(-50%, -50%);
  }

  .auth__warning {
    margin-bottom: 20px;
    font-size: 20px;
    font-family: "PT Sans Bold";
  }

  .auth__logout__btn {
    display: block;
    margin: 20px auto 5px;
    /*font-size: 20px;*/
  }

  .auth .auth__to-main {
    position: relative;
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
    color: #000000;
    border-bottom: 1px #000 solid;
  }

  .auth .auth__to-main:before {
    content: 'or';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    font-size: 16px;
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
