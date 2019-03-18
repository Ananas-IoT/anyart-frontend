<template>
  <div class="request-opened">
    <!--close button-->
    <div class="request-opened__close">
      <img class="request-opened__close-img"
           @click="closeRequest"
           src="../../assets/img/close.png" alt="">
    </div>

    <!--request itself-->
    <div class="request-opened__request">
      <request-item
      :request = request
      :index = index
      :userRole = "'artist'"
      ></request-item>
    </div>

    <!--sketch list-->
    <div class="request-opened__sketch-list">
      <sketch-item
        class="request-opened__sketch-item"
        v-for="(loopedSketch, index) in sketchList"
        :sketch = loopedSketch
        :index = index
      >
      </sketch-item>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../eventBus';
  import RequestItem from './tabItems/RequestTabItem';
  import SketchItem from './tabItems/SketchTabItem';
  import {getSketchesById} from "../../api/mapSketches";

  export default {
    name: "RequestTab",
    components: {
      'request-item': RequestItem,
      'sketch-item': SketchItem
    },
    props: {
      index: Number
    },
    data() {
      return {
        request: null,
        sketchList: []
      }
    },
    created() {
      //get all requests from store
      var requestList = this.$store.getters.getAllRequests;

      //get current request from list
      this.request = requestList[this.index];
      // gets all sketches
      getSketchesById(this.request.id, callback);
      var self = this;
      function callback(sketchList) {
        // console.log('not this', sketchList);
        self.sketchList = sketchList;
        // console.log('this', self.sketchList);
      }
    },
    methods: {
      //to map component
      closeRequest() {
        this.$emit('closeRequest');
      }
    }
  }
</script>

<style scoped>
  .request-opened {
    padding: 40px;
    background: #fff;
    box-shadow: rgba(0,0,0,0.3) 3px 3px 8px;
  }

  .request-opened h2 {
    margin-top: 300px;
  }

  .request-opened__close {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
</style>
