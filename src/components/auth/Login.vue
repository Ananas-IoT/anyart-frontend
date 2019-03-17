<template>
  <v-app>
    <div class="auth-wrap login">
      <app-header></app-header>
      <v-form class="form login__form" v-model="validation">

        <v-alert
          class="alert"
          v-if="loginError"
          :value="true"
          type="error"
        >
          {{loginError.text}}
        </v-alert>
        <h2 class="form__title">Login: </h2>
        <v-text-field
          label="Username"
          v-model="user.username"
          :rules="inputRules"
          autofocus
        >
        </v-text-field>
        <v-text-field
          label="Password"
          v-model="user.password"
          :rules="inputRules"
          type="password"
        >
        </v-text-field>
        <v-btn
          color="primary"
          @click="login"
          :disabled="!validation"
        >Login
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script>
  import FormButton from '../formComponents/FormButton';
  import {loginUser} from "../../api/auth";
  import AppHeader from '../AppHeader';
  import eventBus from '../../eventBus';

  export default {
    name: "login",
    components: {
      'form-button': FormButton,
      'app-header': AppHeader
    },
    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        validation: false,
        inputRules: [
          v => !!v || 'Field is required'
        ],
        loginResponse: null,
        loginError: null
      }
    },
    created() {

      eventBus.$on('loginError', (error) => {
        // console.log(error.response.data.non_field_errors[0]);
        this.loginError = {
          boolean: true,
          // text: "an error occured!",
          text: error.response.data.non_field_errors[0],
        };
        setTimeout(() => {
          this.loginError = null
        }, 3000);
      });
    },
    computed: {},
    methods: {
      login: function () {
        // this.user.username = this.user.email;
        // delete this.user.email;
        loginUser(this.user);
      },
    }
  }
</script>

<style scoped>
  .login__form {
    position: relative;
    width: 400px;
    height: auto;
    padding: 30px;
    margin: 100px auto 0;
    background: #fafafa;
    border-radius: 5px;
    border: 1px solid #eee;
  }

</style>
