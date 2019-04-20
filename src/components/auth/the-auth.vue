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
    min-height: 100vh;
    font-size: 18px;
    background: url("../../assets/img/main_bg1.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
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
    margin: 200px auto 0;
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

  >>> .form {
    margin-top: 200px !important;
  }

  >>> .form__title {
    text-align: center;
    margin-bottom: 0;
    font-size: 24px;
  }

  /*==========  Desktop First Method  ==========*/
  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {
    .auth__logout {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      min-height: 100px;
      padding: 20px;
      transform: translate(-50%, -50%);
    }

    >>> .stepper {
      width: 300px;
    }

  }
</style>
