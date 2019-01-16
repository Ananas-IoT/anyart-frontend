<template>
  <button class="landing__button">{{this.text}}</button>
</template>

<script>
    export default {
        name: "LandingButton",
        props: ["text"]
    }
</script>

<style scoped>
  .landing__button {
    width: 200px;
    display: block;
    padding: 15px 0;
    margin: 20px auto;
    color: #7d42b9;
    font-size: 16px;
    background: transparent;
    border: none;
    border: 2px solid #770d85;
    cursor: pointer;
    transition: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .landing__button:hover {
    color: #fff;
    font-weight: bold;
  }

  .landing__button:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300%;
    transform: translateY(-100%);
    background: #9f4ea9 linear-gradient(to bottom, #9f4ea9 33.3%, #1ea3a4 33.3%, #1ea3a4 66.6%, #67ec02 66.6%);
    transition: 0.3s ease-in-out;
    pointer-events: none;
    z-index: -1;
  }

  .landing__button:hover:before {
    transform: translateY(0);
  }
</style>
