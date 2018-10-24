<template>
  <div>
    <h2>This is login page:</h2>
    <signup></signup>
  </div>
</template>

<script>
  import Signup from './Singup'
    export default {
      name: "login",
      components: {
        'signup': Signup
      },
      data() {
        return {

        }
      },
      methods: {

      }
    }
</script>

<style scoped>
  h2 {
    text-align: center;
    margin-top: 100px;
  }
</style>
