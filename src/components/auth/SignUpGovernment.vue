<template>
  <div class="body">
    <h2>This is government login page:</h2>

    <form>
      <h2>Sign up:</h2>
      <input type="text" placeholder="name of department" v-model="user.surname"
             v-bind:class="{invalid: !fieldValidation.surname}" required>
      <input type="text" placeholder="email" v-model="user.email" v-bind:class="{invalid: !fieldValidation.email}"
             required>
      <input type="password" placeholder="password" v-model="user.password" required>
      <button @click="checkUser">Sign Up</button>
    </form>
  </div>

</template>

<script>

  export default {
    name: "singupGovernment",
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
    computed: {

    },
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
            this.addNewUser().then(this.$router.push("/"))
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
        var token  = "1";//get token from api
        localStorage.setItem('token', token);
      },
    }
  }
</script>

<style scoped>

</style>
