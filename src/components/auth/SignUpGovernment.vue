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

        }
      },

      isAllTrue: function (obj) {
        for (var i in obj) {
          if (obj[i] != true) return false;
        }
        return true;
      },

      addUser: function () {
        this.$store.dispatch('addUser', this.user);
      },
    }
  }
</script>

<style scoped>
  .body {
    text-align: center;
    width: 40%;
    padding: 30px;
    margin: 40px auto 0;
    background: #eee;
    border-radius: 5px;
  }
  h2 {
    text-align: center;
  }

  .body input {
    display: block;
    width: 300px;
    padding: 10px 15px;
    margin: 10px auto;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  .body button {
    display: block;
    width: 320px;
    height: 30px;
    margin: auto;
  }

  .invalid {
    border: 2px solid #ff0000 !important;
  }
</style>
