<template>
  <div class="how-to-section__workflow">

    <howto-workflow-item
      v-for="index in 6"
      :key=index
      :text= "{
        title: $ml.get('landing-how-to-workflow')[index-1],
        body: $ml.get('landing-how-to-workflow-body')[index-1]
      }"
      v-bind:class="{'how-to__workflow-item__right': index%2 === 0}"
    ></howto-workflow-item>

  </div>
</template>

<script>
  import HowtoWorkflowItem from './landing-how-to-workflow-item';
  import {MLBuilder} from 'vue-multilanguage';

  export default {
    name: "HowtoWorkflow",
    components: {
      'howto-workflow-item': HowtoWorkflowItem
    }
  }
</script>

<style scoped>
  .how-to-section__workflow {
    position: relative;
    /*width: 80%;*/
    width: 900px;
    margin: 100px auto 0;
  }

  .how-to-section__workflow:before {
    content: '';
    position: absolute;
    top: -35px;
    left: 300px;
    width: 240px;
    height: 1100px;
    background: url("../../../assets/img/how-to-section/howto-link.png") no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    /*transform: translate(-60%, 0) scale(-1, 1);*/
    transform: scale(-1, 1);
    pointer-events: none;
    z-index: 1;
  }

  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width: 1200px) {
    .how-to-section__workflow {
      width: 100%;
    }

    .how-to-section__workflow:before {
      left: 330px;
      /*transform: translate(-60%, 0) scale(-1, 1);*/
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width: 992px) {

    .how-to-section__workflow:before {
      left: 0;
      transform: translate(145px, 0) scale(-1, 1);
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {

    .how-to-section__workflow:before {
      display: none;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 576px) {

    .how-to-section__workflow {
      margin-top: 20px;
    }
  }
</style>
