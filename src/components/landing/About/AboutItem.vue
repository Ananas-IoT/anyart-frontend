<template>
  <div class="about-section__item">
    <div class="about-section__item-pic"><img src="../../../assets/img/about_photo1.jpg" alt=""></div>
    <div class="about-section__item-txt">
      <h3 class="about-section__item-name">{{this.name}}</h3>
      <p class="about-section__item-position">{{this.position}}</p>
      <about-item-contacts></about-item-contacts>
    </div>
  </div>
</template>

<script>
  import AboutItemContacts from './AboutItemContacts'

  export default {
    name: "AboutItem",
    components: {
      'about-item-contacts': AboutItemContacts,
    },
    props: ["name", "position"]


  }
</script>

<style scoped>


  .about-section__item {
    text-align: center;
    height: 460px;
    padding: 20px;
    margin-top: 40px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    transition: 0.3s;
  }

  .about-section__item:hover {
    /*background: rgba(30, 163, 164, 0.4);*/
  }

  .about-section__item-pic {
    width: 80%;
    margin: auto;
    border: 2px solid #1ea3a4;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }

  /*.about-section .row .col-lg-4:nth-child(3) .pic {*/
  /*border-color: #7d42b9;*/
  /*}*/

  /*.about-section .row .col-lg-4:nth-child(4) .pic {*/
  /*border-color: #80b317;*/
  /*}*/

  .about-section__item-pic:before {
    content: '';
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }

  .about-section__item-txt {
    margin-top: 20px;
  }

  .about-section__item-name {
    font: 24px "PT Sans Bold";
    margin: 0;
  }

  .about-section__item-position {
    font-size: 16px;
    margin: 5px auto 10px;
  }

</style>
