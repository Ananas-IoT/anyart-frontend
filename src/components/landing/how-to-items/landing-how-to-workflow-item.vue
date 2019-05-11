<template>
  <v-app>
    <div class="how-to__workflow-item">
      <v-card class="how-to__workflow-item__title">{{this.text.title}}</v-card>
      <v-card class="how-to__workflow-item__text-wrap elevation-8">
        <v-card-text class="how-to__workflow-item__text elevation-8">
          {{this.text.body}}
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script>
  export default {
    name: "HowtoWorkflowItem",
    props: {
      text: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

  .how-to__workflow-item {
    background: #fff5f5;
  }

  .how-to__workflow-item__title {
    display: inline-block;
    position: relative;
    width: 300px;
    min-height: 80px;
    margin: 40px 0 57px 40px;
    font-size: 26px;
    /*font-family: "Helvetica ultralight";*/
    font-family: "PT Sans Bold";
    color: #FF7043;
    background: transparent;
    box-shadow: none;
  }

  .how-to__workflow-item__title:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 140px;
    height: 140px;
    /*width: 160px;*/
    /*height: 160px;*/
    background: url("../../../assets/img/how-to-section/howto-item1.png");
    background-size: contain;
    transform: translate(160px, -57%);
  }

  .how-to__workflow-item__title:after {
    content: '1';
    position: absolute;
    top: 50%;
    right: 0;
    font-size: 42px;
    font-family: "PT Sans Bold";
    color: #000;
    transform: translate(100px, -65%);
  }

  .how-to__workflow-item__text-wrap {
    float: right;
    text-align: left;
    width: 300px;
    margin-top: 20px;
    font-size: 14px;
    background: #eee;
  }

  .how-to__workflow-item__text {
    font-size: 16px;
    color: #1d0e0d;
    background: #fcb39c;
    transform: translate(-10px, -15px);
    /*border-radius: 10px !important;*/
  }

  .application:nth-child(2) .how-to__workflow-item__title {
    color: #FFCA28;
  }

  .application:nth-child(3) .how-to__workflow-item__title {
    color: #66BB6A;
  }

  .application:nth-child(4) .how-to__workflow-item__title {
    color: #29B6F6;
  }

  .application:nth-child(5) .how-to__workflow-item__title {
    color: #EC407A;
  }

  .application:nth-child(6) .how-to__workflow-item__title {
    color: #5C6BC0;
  }

  .application:nth-child(2) .how-to__workflow-item__text {
    /*margin-top: -20px;*/
    color: #1e0f0e;
    background: #f2d88b;
  }

  .application:nth-child(3) .how-to__workflow-item__text {
    margin-top: 20px;
    color: #0e1e0e;
    background: #99c89b;
  }

  .application:nth-child(4) .how-to__workflow-item__text {
    color: #08131e;
    background: #a9daf0;
  }

  .application:nth-child(5) .how-to__workflow-item__text {
    color: #1e0e0e;
    background: #e79db6;
  }

  .application:nth-child(6) .how-to__workflow-item__text {
    color: #0e0e1e;
    background: #b9c0e8;
  }

  .application:nth-child(2) .how-to__workflow-item__title:after {
    content: '2';
  }

  .application:nth-child(3) .how-to__workflow-item__title:after {
    content: '3';
  }

  .application:nth-child(4) .how-to__workflow-item__title:after {
    content: '4';
  }

  .application:nth-child(5) .how-to__workflow-item__title:after {
    content: '5';
  }

  .application:nth-child(6) .how-to__workflow-item__title:after {
    content: '6';
  }

  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width: 1200px) {

    .how-to__workflow-item__title:before {
      transform: translate(190px, -57%);
    }

    .how-to__workflow-item__title:after {
      transform: translate(130px, -65%);
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width: 992px) {

    .how-to__workflow-item__title {
      width: 160px;
      margin: 40px 0 55px 20px;
      font-size: 20px;
    }

    .how-to__workflow-item__title:before {
      transform: translate(170px, -57%);
    }

    .how-to__workflow-item__title:after {
      transform: translate(110px, -65%);
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {

    .how-to__workflow-item__title {
      width: 170px;
      margin: 15px 0 30px 10px;
    }

    .how-to__workflow-item__title:before {
      display: none;
    }

    .how-to__workflow-item__title:after {
      display: none;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 576px) {

    .how-to__workflow-item__title {
      text-align: center;
      display: block;
      width: auto;
      min-height: auto;
      margin: 10px auto 30px;
    }

    .how-to__workflow-item__text-wrap {
      float: none;
      width: 240px;
      margin: 0 auto 20px;
      transform: translateX(5px);
    }
  }
</style>
