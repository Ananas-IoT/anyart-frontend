<template>
  <button class="landing__button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "LandingButton",
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
    border: 1px solid #770d85;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .landing__button:hover {
    color: #fff;
    font-weight: bold;
    border: transparent;
  }

  .landing__button:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300%;
    transform: translateY(-100%);
    background: #9f4ea9 linear-gradient(to bottom, #5C6BC0 33.3%, #29B6F6 33.3%, #FFCA28 66.6%, #FF7043 66.6%);
    transition: 0.3s ease-in-out;
    pointer-events: none;
    z-index: -1;
  }

  .landing__button:hover:before {
    transform: translateY(0);
  }

  .landing__button {
    -webkit-tap-highlight-color: transparent;
  }

  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width: 1200px) {

  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width: 992px) {
    nav ul {
      display: none;
      width: 100%;
    }

    nav ul li {
      display: block;
      width: 100%;

    }

    nav ul li a, nav ul li span {
      width: 100%;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .landing__button {
      padding: 10px 0;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {
    .landing__button {

    }
  }

  /* Custom, iPhone Retina */
  @media only screen and (max-width: 320px) {

  }

</style>
