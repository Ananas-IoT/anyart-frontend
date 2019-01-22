<template>
  <div class="request-opened">
    <div class="request-opened__request">
      <request-item
      :request = request
      :index = index
      :userRole = "'artist'"
      ></request-item>
      <!--<h2>INDEX IS : {{this.index}}</h2>-->
    </div>
    <div class="request-opened__sketch-list">

    </div>
  </div>
</template>

<script>
  import eventBus from '../../eventBus'
  import RequestItem from './RequestItem'

  export default {
    name: "RequestOpened",
    components: {
      'request-item': RequestItem
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

    }
  }
</script>

<style scoped>
  .request-opened {
    padding: 40px;
    background: #fff;
  }
  .request-opened h2 {
    margin-top: 300px;
  }
</style>
