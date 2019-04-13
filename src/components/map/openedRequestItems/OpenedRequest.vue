<template>
  <div class="request-opened">
    <!--close button-->
    <div class="request-opened__title">
      <img class="request-opened__back-icon"
           @click="closeRequest"
           src="../../../assets/img/arrow-back.png" alt="">
      <h4 class="request-opened__title__h4">default 42 Street in default City</h4>
    </div>

    <!--request itself-->
    <div class="request-opened__request">
      <request-item
      :request = request
      :index = index
      :userRights = user.rights
      ></request-item>
    </div>

    <v-divider class="opened-request__divider"></v-divider>

    <!--sketch list-->
    <div class="request-opened__sketch-list">
      <sketch-item
        class="request-opened__sketch-item"
        v-for="(loopedSketch, index) in sketchList"
        :sketch = loopedSketch
        :key = index
      >
      </sketch-item>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../../eventBus';
  import RequestItem from './OpenedRequestItem';
  import SketchItem from './OpenedRequestSketch';
  import {getSketchesById} from "../../../api/mapSketches";

  export default {
    name: "OpenedRequest",
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
        sketchList: [],
        user: null
      }
    },
    watch: {
      index: function (newVal, oldVal) {
        this.loadRequestandSketches();
      }
    },
    created() {
      this.user = this.$store.getters.getUser;
      this.loadRequestandSketches();
    },
    mounted() {

    },
    methods: {
      //to RequestList component
      closeRequest() {
        eventBus.$emit('closeRequest');
      },

      loadRequestandSketches() {
        //get all requests from store
        var requestList = this.$store.getters.getAllRequests;

        //get current request from list
        this.request = requestList[this.index];

        // gets all sketches
        getSketchesById(this.request.id, callback);
        var self = this;
        function callback(sketchList) {
          self.sketchList = sketchList;
        }
      }
    }
  }
</script>

<style scoped>
  .request-opened {
    position: relative;
    padding: 0 10px 60px;
  }

  .request-opened__title {
    text-align: center;
    padding: 0 10px 10px;
    font: 20px "PT Sans Bold";
    z-index: 10;
    transition: 0.3s;
  }

  .request-opened__back-icon {
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 5px;
    cursor: pointer;
  }

  .opened-request__divider {
    margin: 10px 0;
  }
</style>
