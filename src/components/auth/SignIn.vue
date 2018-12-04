<template>
  <div class="body">
    <div class="wrap">
      <form>
        <h2>Sign in:</h2>
        <input type="text" placeholder="email" v-model="user.email" v-bind:class="{invalid: !fieldValidation.email}"
               required>
        <input type="password" placeholder="password" v-model="user.password" required>
        <button @click="checkUser">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    name: "singip",
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
  @import '../../assets/landing/css/auth.css';
</style>
