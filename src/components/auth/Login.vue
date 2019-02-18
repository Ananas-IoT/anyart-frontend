<template>
  <div class="login">
    <div class="form-wrap">
      <form>
        <h2 class="form__title">Sign in:</h2>
        <input
          class="form__input"
          type="text"
          placeholder="email"
          v-model="user.email"
          v-bind:class="{invalid: !validation.email}"
          required>

        <input
          class="form__input"
          type="password"
          placeholder="password"
          v-model="user.password"
          v-bind:class="{invalid: !validation.password}"
          required>
        <form-button
          :text="'Submit'"
          @click.native="login">
        </form-button>
      </form>
    </div>
  </div>
</template>

<script>
  import FormButton from '../formComponents/FormButton';
  import {getUserByToken} from "../../api/auth";
  import axios from 'axios';

  export default {
    name: "login",
    components: {
      'form-button': FormButton
    },
    data() {
      return {
        user: {
          email: '',
          password: ''
        },
        validation: {
          surname: true,
          email: true
        }
      }
    },
    computed: {},
    methods: {
      login: function () {
        this.user.username = this.user.email;
        const config = {
          headers: {'Origin': 'http://gurman.pythonanywhere.com'}
        };
        const API_URL = 'https://gurman.pythonanywhere.com';
        const url = `${API_URL}/authorization/token/`;
        axios.post(url, this.user, config)
          .then(response => {
            console.log(response);
            // this.$store.dispatch('setUser', this.user);

            let token = response.data.access;
            let refresh = response.data.refresh;

            getUserByToken(token, refresh);

            localStorage.setItem('user-token', token);
            localStorage.setItem('token-refresh', refresh);

            this.$router.push("/")
          })
          .catch(error => {
          });

      },

      isAllTrue: function (obj) {
        for (var i in obj) {
          if (obj[i] != true) return false;
        }
        return true;
      },
    }
  }
</script>

<style scoped>

</style>
