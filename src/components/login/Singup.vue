<template>
  <div class="body">

    <form v-show="!validation">
      <h2>Sign up:</h2>
      <input type="text" placeholder="nickname" v-model="user.username">
      <input type="text" placeholder="name and surname" v-model="user.surname"
             v-bind:class="{invalid: !fieldValidation.surname}" required>
      <input type="text" placeholder="email" v-model="user.email" v-bind:class="{invalid: !fieldValidation.email}"
             required>
      <input type="password" placeholder="password" v-model="user.password" required>
      <button @click="checkUser">next</button>
    </form>

    <div class="role" v-show="validation">
      <h3>Wow! Such good!</h3>
      <p>You was registered as {{user.role}} user!</p>
      <p>{{roleDescription}}</p>
      <div v-if="user.role === 'basic'">
        <button @click="becomeArtist">I want to be an Artist!</button>
        <p>{{descriptionList.artist}}</p>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: "singup",
    data() {
      return {
        user: {
          username: '',
          surname: '',
          email: '',
          password: '',
          role: 'basic'
        },
        fieldValidation: {
          surname: true,
          email: true
        },
        validation: false,
        descriptionList: {
          basic: 'As basic user, you will be able to upload photo with request and vote for artist sketches!',
          artist: 'You will have all basic user functions plus ability to upload your sketch'
        }
      }
    },
    computed: {
      // curUser() {
      //   return this.$store.getters.getCurrentUser
      // }
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
          //checking if surname exists
          this.fieldValidation.surname = false;
        }
        if (false) {
          //checking if email exists
          this.fieldValidation.email = false;
        }
        if (this.isAllTrue(this.fieldValidation)) {
          this.validation = true
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
