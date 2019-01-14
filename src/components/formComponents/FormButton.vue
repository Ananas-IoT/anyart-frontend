<template>
  <button class="form__button" type="button">{{this.text}}</button>
</template>

<script>
  export default {
    name: "FormButton",
    props: ['text'],
  }
</script>

<style scoped>
  .form__button {
    position: relative;
    display: block;
    width: 200px;
    padding: 5px 15px;
    margin: auto;
    font-family: "PT Sans Bold";
    font-size: 16px;
    color: #770d85;
    background: #fff;
    border: 1px solid #770d85;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
  }

  .form__button:hover {
    color: #fff;
    background: #770d85;
  }
</style>
