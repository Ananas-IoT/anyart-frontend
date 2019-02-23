<template>
  <div class="government">
    <div class="form-wrap">
      <form>
        <h2 class="form__title">Create government account:</h2>

        <input
          class="form__input"
          type="text"
          placeholder="name of department"
          v-model="user.username"
          required>

        <input
          class="form__input"
          type="text"
          placeholder="name"
          v-model="user.first_name"
          required>

        <input
          class="form__input"
          type="text"
          placeholder="surname"
          v-model="user.last_name"
          required>

        <input
          class="form__input"
          type="text"
          placeholder="email"
          v-model="user.email"
          v-bind:class="{form__input__invalid: !validation.email}"
          required>

        <input
          class="form__input"
          type="password"
          placeholder="password"
          v-model="user.password"
          required>

        <form-button
          :text = "'Submit'"
          @click.native="register">
        </form-button>

      </form>
    </div>
  </div>
</template>

<script>
  import FormButton from '../formComponents/FormButton';
  import {registerUser} from "../../api/auth";

  export default {
    name: "registerGovernment",
    components: {
      'form-button': FormButton
    },
    data() {
      return {
        user: {
          fist_name: '',
          last_name: '',
          username: '',
          password: '',
          email: '',
          rights: 'basic'
        },
        validation: {
          email: true
        },
      }
    },
    computed: {},
    methods: {
      register () {
        Object.keys(this.validation).forEach(v => this.validation[v] = true);
        var re = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!(re.test(this.user.email.toLowerCase()))) {
          this.validation.email = false;
        }
        if (this.isAllTrue(this.validation)) {
          registerUser(this.user);
        }
      },

      isAllTrue: function (obj) {
        for (let i in obj) {
          if (obj[i] !== true) return false;
        }
        return true;
      },
    }
  }
</script>

<style scoped>

  .form__title {
    font-size: 24px;
  }

  .form__input.form__input__invalid {
    border: 1px solid #ff0000;
  }
</style>
