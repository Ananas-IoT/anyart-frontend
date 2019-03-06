<template>
  <div class="login">
    <div class="form-wrap">
      <form>
        <h2 class="form__title">Sign in:</h2>
        <input class="form__input" type="text" placeholder="email" v-model="user.email" v-bind:class="{invalid: !fieldValidation.email}"
               required>
        <input class="form__input" type="password" placeholder="password" v-model="user.password" required>
        <form-button
          :text = "'Submit'"
          @click="checkUser">
        </form-button>
      </form>
      <router-link to="/auth/government">goto govern</router-link>
    </div>
  </div>
</template>

<script>
  import FormButton from '../formComponents/FormButton';

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
        fieldValidation: {
          surname: true,
          email: true
        }
      }
    },
    computed: {

    },
    methods: {
      checkUser: function () {
        if (false) {
          //checking if email exists
          this.fieldValidation.email = false;
        }
        if (false) {
          //checking if password suits
          this.fieldValidation.password = false;
        }
        if (this.isAllTrue(this.fieldValidation)) {
          this.setUser(this.user).then(this.$router.push("/"));
        }
      },

      isAllTrue: function (obj) {
        for (var i in obj) {
          if (obj[i] != true) return false;
        }
        return true;
      },

      setUser: function (user) {
        this.$store.dispatch('setUser', user);
        var token  = "1";//get token from api
        localStorage.setItem('user-token', token);
      },
    }
  }
</script>

<style scoped>

</style>
