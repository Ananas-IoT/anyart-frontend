<template>
  <div class="request-opened">
    <div class="request-opened__close">
      <img class="request-opened__close-img"
           @click="closeRequest"
           src="../../assets/img/close.png" alt="">
    </div>
    <div class="request-opened__request">
      <request-item
      :request = request
      :index = index
      :userRole = "'artist'"
      ></request-item>
    </div>
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
  import eventBus from '../../eventBus'
  import RequestItem from './RequestItem'
  import SketchItem from './SketchItem'

  export default {
    name: "RequestOpened",
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
      var requestList = this.$store.getters.getAllRequests;
      this.request = requestList[this.index];

      var sketchList = this.$store.getters.getAllSketches;
      for(let i = 0; i < sketchList.length; i++) {
        if (sketchList[i].requestId === this.index) {
          this.sketchList.push(sketchList[i]);
        }
        console.log(this.sketchList);

      }
    },
    methods: {
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
