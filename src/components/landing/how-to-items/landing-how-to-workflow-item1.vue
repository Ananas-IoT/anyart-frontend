<template>
  <v-app>
    <div class="how-to__workflow-item-wrap">
      <v-card class="how-to__workflow-item elevation-8">
        <v-card-text class="how-to__workflow-item__text-wrap elevation-5"><p class="how-to__workflow-item__text">
          {{this.text}}</p></v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script>
  export default {
    name: "HowtoWorkflowItem",
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

  .how-to__workflow-item {
    display: inline-block;
    position: relative;
    width: 360px;
    min-height: 160px;
    margin: 120px 0;
    background: #eee;
  }

  .how-to__workflow-item__right {
    text-align: right;
  }

  .how-to__workflow-item:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 300px;
    height: 300px;
    background: url("../../../assets/img/how-to-section/how-to-workflow/new-black/camera.png");
    background-size: contain;
    transform: translate(400px, -65%);
  }

  .how-to__workflow-item__right .how-to__workflow-item:before {
    right: auto;
    left: 0;
    transform: translate(-400px, -65%);
  }

  .how-to__workflow-item__text-wrap {
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #FF7043;
    transform: translate(-10px, -10px);
  }

  .how-to__workflow-item__right .how-to__workflow-item__text-wrap {
    transform: translate(10px, -10px);
  }

  .how-to__workflow-item__text {
    position: relative;
    top: 50%;
    font-size: 24px;
    font-family: "PT Sans Bold";
    color: #fff;
    transform: translateY(-50%);
  }

  .application:nth-child(2) .how-to__workflow-item__text-wrap {
    background: #FFCA28;
  }

  .application:nth-child(3) .how-to__workflow-item__text-wrap {
    background: #66BB6A;
  }

  .application:nth-child(4) .how-to__workflow-item__text-wrap {
    background: #29B6F6;
  }

  .application:nth-child(5) .how-to__workflow-item__text-wrap {
    background: #5C6BC0;
  }

  .application:nth-child(6) .how-to__workflow-item__text-wrap {
    background: #EC407A;
  }

  /*.application:nth-child(2) .how-to__workflow-item:before {*/
    /*background: url("../../../assets/img/how-to-section/how-to-workflow/new-black/libra1.png");*/
    /*background-size: contain;*/
  /*}*/

  /*.application:nth-child(3) .how-to__workflow-item:before {*/
    /*background: url("../../../assets/img/how-to-section/how-to-workflow/new-black/sketch.png");*/
    /*background-size: contain;*/
  /*}*/

  /*.application:nth-child(4) .how-to__workflow-item:before {*/
    /*background: url("../../../assets/img/how-to-section/how-to-workflow/new-black/libra1.png");*/
    /*background-size: contain;*/
  /*}*/

  /*.application:nth-child(5) .how-to__workflow-item:before {*/
    /*background: url("../../../assets/img/how-to-section/how-to-workflow/new-black/vote.png");*/
    /*background-size: contain;*/
  /*}*/

  /*.application:nth-child(6) .how-to__workflow-item:before {*/
    /*background: url("../../../assets/img/how-to-section/how-to-workflow/new-black/heart.png");*/
    /*background-size: contain;*/
  /*}*/

  .application:nth-child(1) .how-to__workflow-item:before {
    background: url("../../../assets/img/how-to-section/how-to-workflow/new-color/camera.png");
    background-size: contain;
  }

  .application:nth-child(2) .how-to__workflow-item:before {
    background: url("../../../assets/img/how-to-section/how-to-workflow/new-color/libra1.png");
    background-size: contain;
  }

  .application:nth-child(3) .how-to__workflow-item:before {
    background: url("../../../assets/img/how-to-section/how-to-workflow/new-color/sketch.png");
    background-size: contain;
  }

  .application:nth-child(4) .how-to__workflow-item:before {
    background: url("../../../assets/img/how-to-section/how-to-workflow/new-color/libra1.png");
    background-size: contain;
  }

  .application:nth-child(5) .how-to__workflow-item:before {
    background: url("../../../assets/img/how-to-section/how-to-workflow/new-color/vote.png");
    background-size: contain;
  }

  .application:nth-child(6) .how-to__workflow-item:before {
    background: url("../../../assets/img/how-to-section/how-to-workflow/new-color/heart.png");
    background-size: contain;
  }

</style>
