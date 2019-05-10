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

</style>
