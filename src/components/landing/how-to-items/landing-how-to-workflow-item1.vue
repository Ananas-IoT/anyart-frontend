<template>
  <v-app>
    <div class="how-to__workflow-item-wrap">
      <v-card class="how-to__workflow-item">
        <v-card-title class="how-to__workflow-item__text__title">{{this.text.title}}</v-card-title>
      </v-card>
      <v-card class="how-to__workflow-item-text elevation-8">
        <v-card-text class="how-to__workflow-item__text__body elevation-8">
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

  .how-to__workflow-item-wrap {
    background: #fff5f5;
  }

  .how-to__workflow-item {
    display: inline-block;
    position: relative;
    width: 300px;
    min-height: 80px;
    margin: 30px 0 40px 40px;
    background: transparent;
    box-shadow: none;
  }

  .how-to__workflow-item:before {
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

  .how-to__workflow-item:after {
    content: '1';
    position: absolute;
    top: 50%;
    right: 0;
    font-size: 42px;
    font-family: "PT Sans Bold";
    transform: translate(100px, -65%);
  }

  .how-to__workflow-item__text__title {
    font-size: 26px;
    /*font-family: "Helvetica ultralight";*/
    font-family: "PT Sans Bold";
    color: #FF7043;
  }

  .how-to__workflow-item-text {
    float: right;
    text-align: left;
    width: 300px;
    margin-top: 20px;
    font-size: 14px;
    background: #eee;
  }

  .how-to__workflow-item__text__body {
    font-size: 16px;
    color: #fff;
    background: #ff916f;
    transform: translate(-10px, -15px);
  }

  .application:nth-child(2) .how-to__workflow-item__text__title {
    color: #FFCA28;
  }

  .application:nth-child(3) .how-to__workflow-item__text__title {
    color: #66BB6A;
  }

  .application:nth-child(4) .how-to__workflow-item__text__title {
    color: #29B6F6;
  }

  .application:nth-child(5) .how-to__workflow-item__text__title {
    color: #5C6BC0;
  }

  .application:nth-child(6) .how-to__workflow-item__text__title {
    color: #EC407A;
  }

  .application:nth-child(2) .how-to__workflow-item__text__body {
    margin-top: -20px;
    background: #f3c94a;
  }

  .application:nth-child(3) .how-to__workflow-item__text__body {
    margin-top: 20px;
    background: #78b87b;
  }

  .application:nth-child(4) .how-to__workflow-item__text__body {
    background: #4dbff3;
  }

  .application:nth-child(5) .how-to__workflow-item__text__body {
    background: #6e7abe;
  }

  .application:nth-child(6) .how-to__workflow-item__text__body {
    background: #e95a8a;
  }

  .application:nth-child(2) .how-to__workflow-item:after {
    content: '2';
  }

  .application:nth-child(3) .how-to__workflow-item:after {
    content: '3';
  }

  .application:nth-child(4) .how-to__workflow-item:after {
    content: '4';
  }

  .application:nth-child(5) .how-to__workflow-item:after {
    content: '5';
  }

  .application:nth-child(6) .how-to__workflow-item:after {
    content: '6';
  }

</style>
