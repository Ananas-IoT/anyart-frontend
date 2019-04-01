<template>
  <v-app>
    <div class="request-list">
      <!--<div class="request-list__bg"></div>-->
      <!--<div class="request-list__content">-->
        <h2 class="request-list__title">Here goes Request List!</h2>
        <request-item class="request-list__request-item"
                      v-for="(loopedRequest, index) in requestList"
                      :request = loopedRequest
                      :index = index
                      :userRole = user.rights
        >
        </request-item>
      <!--</div>-->
    </div>
  </v-app>
</template>

<script>
  import RequestItem from './listItems/RequestListItem'
  import eventBus from '../../eventBus'
  import {getAllRequests} from '../../api/mapRequests'
  import axios from 'axios'

  export default {
    name: "RequestList",
    components: {
      "request-item": RequestItem
    },
    props: {
      // requestList: {
      //   type: Array
      // }
    },
    data() {
      return {
        requestList: [],
        user: null,
        requestIndex: null
      }
    },
    created() {
      this.user = this.$store.getters.getUser;
      this.requestList = this.$store.getters.getAllRequests;
      console.log(this.requestList.length);
      if (this.requestList.length === 0) {
        getAllRequests();
      }
    },
    methods: {
      //to map component
      openRequestTab(index) {
        console.log(index);
        eventBus.$emit('openRequestTab', index);
      },
    }
  }
</script>

<style scoped>
  .request-list {
    position: relative;
    height: 100vh;
  }

  /*.request-list__bg {*/
    /*position: fixed;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*background: rgba(30, 163, 164, 0.5);*/
  /*}*/

  /*.request-list__content {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 2;*/
  /*}*/

  .request-list__title {
    position: relative;
    display: block;
    width: fit-content;
    padding: 0 140px;
    margin: 60px auto 30px;
    font-size: 24px;
  }

  .request-list__title:before, .request-list__title:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 120px;
    height: 2px;
    background: #770d85;
  }

  .request-list__title:before {
    left: 10px;
  }

  .request-list__title:after {
    right: 10px;
  }

  .request-list__request-item {
    width: 100%;
    /*margin: 5px 10px 0 5px;*/
    font-size: 18px;
  }
</style>
