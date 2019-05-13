<template>
  <v-app>
    <div class="auth-wrap login">
      <app-header></app-header>
      <v-form class="form login__form" v-model="validation">

        <v-alert
          class="alert"
          v-if="this.error"
          :value="true"
          type="error"
        >
          {{this.error}}
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
  import {loginUser} from "../../api/auth";
  import AppHeader from '../the-header';
  import eventBus from '../../eventBus';
  import {serverErrorsMixin} from '../../mixins/serverErrorsMixin'

  export default {
    name: "login",
    components: {
      'app-header': AppHeader
    },
    mixins: [serverErrorsMixin],
    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        validation: false,
        inputRules: [
          v => !!v || 'Field is required'
        ]
      }
    },
    created() {},
    computed: {},
    methods: {
      login() {
        return new Promise((resolve, reject) => {
          loginUser(this.user, resolve, reject);
        })
          .then(response => {
          }, error => {
            this.statusCodeHumanify(error);
          });
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

  /*==========  Desktop First Method  ==========*/
  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 480px) {
    .login__form {
      width: 300px;
      padding: 20px;
      margin: 40px auto 0;
    }
  }
</style>
