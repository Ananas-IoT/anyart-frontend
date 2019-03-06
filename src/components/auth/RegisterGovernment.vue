<template>
  <div class="government">
    <div class="form-wrap">
      <form>
        <h2 class="form__title">Create government account:</h2>
        <input class="form__input" type="text" placeholder="name of department" v-model="user.surname"
               v-bind:class="{invalid: !fieldValidation.surname}" required>
        <input class="form__input" type="text" placeholder="email" v-model="user.email" v-bind:class="{invalid: !fieldValidation.email}"
               required>
        <input class="form__input" type="password" placeholder="password" v-model="user.password" required>
        <form-button
          :text = "'Submit'"
          @click.native="checkUser">
        </form-button>
      </form>
    </div>
  </div>
</template>

<script>
  import FormButton from '../formComponents/FormButton';

  export default {
    name: "singupGovernment",
    components: {
      'form-button': FormButton
    },
    data() {
      return {
        user: {
          username: null,
          surname: '',
          email: '',
          password: '',
          role: 'government'
        },
        fieldValidation: {
          surname: true,
          email: true
        }
      }
    },
    computed: {},
    methods: {
      checkUser: function () {
        Object.keys(this.fieldValidation).forEach(v => this.fieldValidation[v] = true);
        var re = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!(re.test(this.user.email.toLowerCase()))) {
          this.fieldValidation.email = false;
        }
        if (false) {
          //checking if surname exists
          this.fieldValidation.surname = false;
        }
        if (false) {
          //checking if email exists
          this.fieldValidation.email = false;
        }
        if (this.isAllTrue(this.fieldValidation)) {
          this.addNewUser();
          this.$router.push("/");
        }
      },

      isAllTrue: function (obj) {
        for (var i in obj) {
          if (obj[i] != true) return false;
        }
        return true;
      },

      addNewUser: function () {
        this.$store.dispatch('addNewUser', this.user);
        var token = "3";//get token from api
        localStorage.setItem('user-token', token);
      },
    }
  }
</script>

<style scoped>

  .form__title {
    font-size: 24px;
  }
</style>
