<template>
  <div class="government">
    <div class="form-wrap">
      <form>
        <h2 class="form__title">Create government account:</h2>

        <div class="form__info form__info-organization">

          <label class="form__input__select-label">Who you are?</label>
          <select
            name="Who you are?"
            class="form__input form__input__select"
            v-model="posSelected">
            <option name="Architect">Architect</option>
            <option name="OSBB">OSBB</option>
            <option name="Administration">Administration</option>
          </select>

          <p
            class="form__input__select__architect"
            v-if="posSelected === 'Architect'">
            Sorry, but we already have one :/
          </p>

          <input
            class="form__input form__input__select__osbb"
            type="text"
            placeholder="Building address"
            v-if="posSelected === 'OSBB'"
            v-model="user.username"
            required>

          <input
            class="form__input form__input__select__administration"
            type="text"
            placeholder="name of department"
            v-if="posSelected === 'Administration'"
            v-model="user.username"
            required>

          <p class="form__input__select-warning">
            Choose wisely -- we will check all the information.
          </p>

        </div>

        <div class="form__info form__info-personal">
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
        </div>

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
          rights: 'gov'
        },
        validation: {
          email: true
        },
        posSelected: ''
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

  .government .form-wrap {
    width: 800px;
  }

  .form__info {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 49%;
    height: 220px;
    /*border: 1px solid red;*/
  }

  .form__input__select-label {
    display: block;
  }

  .form__input__select {
    padding: 5px 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
  }

  .form__input__select-warning {
    vertical-align: bottom;
    position: absolute;
    bottom: 20px;
    left: 50%;
    font-size: 14px;
    transform: translateX(-50%);
  }

  .form__input.form__input__invalid {
    border: 1px solid #ff0000;
  }
</style>
