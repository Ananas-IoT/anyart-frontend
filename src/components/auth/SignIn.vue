<template>
  <div class="body">
    <h2>This is login page:</h2>
    <form>
      <h2>Sign in:</h2>
      <input type="text" placeholder="email" v-model="user.email" v-bind:class="{invalid: !fieldValidation.email}"
             required>
      <input type="password" placeholder="password" v-model="user.password" required>
      <button @click="checkUser">Sign in</button>
    </form>
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
