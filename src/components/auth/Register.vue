<template>
  <div class="register">
    <div class="form-wrap"  v-bind:class="{'form-wrap__valid': formValidation}">
      <form class="register__form">
        <h2 class="form__title">Create an account:</h2>

        <input
          class="form__input"
          type="text"
          placeholder="nickname"
          v-model="user.username">

        <input
          class="form__input"
          type="text"
          placeholder="name"
          v-model="user.first_name"
          v-bind:class="{form__input__invalid: !fieldValidation.first_name}"
          required>

        <input
          class="form__input"
          type="text"
          placeholder="surname"
          v-model="user.last_name"
          v-bind:class="{form__input__invalid: !fieldValidation.last_name}"
          required>

        <input
          class="form__input"
          type="text"
          placeholder="email"
          v-model="user.email"
          v-bind:class="{invalid: !fieldValidation.email}"
          required>

        <input
          class="form__input"
          type="password"
          placeholder="password"
          v-model="user.password"
          required>

        <form-button
          :text = "'Next'"
          @click.native="checkUser">
        </form-button>
      </form>

      <div
        class="register__role"
        v-bind:class="{'in-left': formValidation}">

        <h2 class="form__title">Create an account:</h2>
        <p>You was registered as {{user.role}} user!</p>
        <p>{{roleDescription}}</p>
        <div v-if="user.role === 'basic'">
          <div @click="becomeArtist" class="register__become-artist-button">I want to be an Artist!</div>
          <p class="register__role-description">{{descriptionList.artist}}</p>
        </div>
        <form-button class="form__button"
          :text = "'Submit'"
          @click.native="addNewUser">
        </form-button>
      </div>
    </div>
  </div>

</template>

<script>
  import FormButton from '../formComponents/FormButton';
  import axios from 'axios';

  export default {
    name: "register",
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
          role: 'basic'
        },
        fieldValidation: {
          first_name: true,
          last_name: true,
          email: true
        },
        formValidation: false,
        descriptionList: {
          basic: 'As basic user, you will be able to upload photo with request and vote for artist sketches!',
          artist: 'You will have all basic user functions plus ability to upload your sketch'
        }
      }
    },
    computed: {
      roleDescription: function () {
        if (this.user.role === 'basic') {
          return this.descriptionList.basic;
        } else if (this.user.role === 'artist') {
          return this.descriptionList.artist;
        }
      }
    },
    methods: {
      checkUser: function () {
        Object.keys(this.fieldValidation).forEach(v => this.fieldValidation[v] = true);
        var re = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!(re.test(this.user.email.toLowerCase()))) {
          this.fieldValidation.email = false;
        }
        if (false) {
          //check if surname exists
          this.fieldValidation.first_name = false;
          this.fieldValidation.last_name = false;
        }
        if (false) {
          //check if email exists
          this.fieldValidation.email = false;
        }
        if (this.isAllTrue(this.fieldValidation)) {
          this.formValidation = true
        }
      },

      isAllTrue: function (obj) {
        for (var i in obj) {
          if (obj[i] != true) return false;
        }
        return true;
      },

      becomeArtist: function () {
        this.user.role = 'artist';
      },

      addNewUser: function () {

        this.user.rights = this.user.role;

        // const API_URL = 'http://localhost:8000';
        // const url = `${API_URL}/auth/registration/`;
        // axios.post(url, this.user);

        this.$store.dispatch('addNewUser', this.user);
        var token;
        if (this.user.role === 'artist') {
          token = "2";
        } else {
          token = "1";//get token from api
        }
        localStorage.setItem('user-token', token);
        this.$router.push("/");
      },
    }
  }
</script>

<style scoped>

  .form-wrap {
    width: auto;
    background: transparent;
    border: 1px solid transparent;
  }

  .register__form, .register__role {
    position: absolute;
    left: 50%;
    width: 30%;
    padding: 30px;
    margin: 0 auto 0;
    background: #fafafa;
    border-radius: 5px;
    border: 1px solid #eee;
    transform: translateX(-50%);
  }

  .register__form {
    /*v-if="formValidation"*/
    opacity: 1;
    pointer-events: auto;
    transition: 0.3s;
  }

  .form-wrap__valid .register__form {
    opacity: 0;
    pointer-events: none;
  }

  .register__role {
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
  }

  .form-wrap__valid .register__role {
    opacity: 1;
    pointer-events: auto;
  }

  .register__become-artist-button {
    width: fit-content;
    width: -moz-fit-content;
    margin: auto;
    font-family: "PT Sans Bold";
    color: #7d42b9;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transition: 0.1s;
  }

  .register__become-artist-button:hover {
    border-bottom: 1px solid #7d42b9;
  }

  .register__role-description {
    margin: 5px 0 10px;
    font-size: 12px;
  }


  @-webkit-keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translateX(-500px);
      -moz-transform: translateX(-500px);
      -o-transform: translateX(-500px);
      transform: translateX(-500px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }

  .in-left {
    -webkit-animation-name: fadeInLeft;
    -moz-animation-name: fadeInLeft;
    -o-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-delay: .2s;
    -moz-animation-delay: .2s;
    -o-animation-duration: 1s;
    animation-delay: .2s;
  }

</style>
