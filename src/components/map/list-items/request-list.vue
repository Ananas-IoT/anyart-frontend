<template>
  <v-app>
    <div class="request-list-wrap">
      <div
        class="request-list"
        v-show="!openedRequestTriggerShow"
      >
        <h2 class="request-list__title">Here goes Request List!</h2>
        <request-item class="request-list__request-item"
                      v-for="(loopedRequest, index) in requestList"
                      :request=loopedRequest
                      :key=index
                      @click.native="openRequest(index)"
        >
        </request-item>
      </div>
      <div class="opened-request">
        <opened-request
          v-if="openedRequestTriggerShow"
        >
        </opened-request>
      </div>
    </div>
  </v-app>
</template>

<script>
  import RequestItem from './request-list-item'
  import OpenedRequest from '../opened-request-items/opened-request'
  import eventBus from '../../../eventBus'
  import {getAllRequests} from '../../../api/mapRequests'

  export default {
    name: "RequestList",
    components: {
      "request-item": RequestItem,
      "opened-request": OpenedRequest,
    },
    props: {},
    data() {
      return {
        requestList: [],
        user: null,
        openedRequestTriggerShow: false,
      }
    },
    watch: {
      '$route.params.requestIdx': function () {
        if(this.$route.params.requestIdx === undefined) this.openedRequestTriggerShow = false;
        else this.openedRequestTriggerShow = true;
      }
    },
    created() {
      if(this.$route.params.requestIdx !== undefined) this.openedRequestTriggerShow = true;

      this.user = this.$store.getters.getUser;
      this.requestList = this.$store.getters.getAllRequests;
      if (this.requestList.length === 0) {
        getAllRequests();
      }

      //from OpenedRequest component
      eventBus.$on('closeRequest', () => {
        this.openedRequestTriggerShow = false;
      });
    },
    methods: {
      openRequest(index) {
        this.$router.push({name: "openRequest", params: {requestIdx: index}});
      },
    }
  }
</script>

<style scoped>
  .request-list-wrap {
    position: relative;
    height: 100vh;
    padding-top: 50px;
  }

  .request-list__title {
    position: relative;
    display: block;
    width: fit-content;
    padding: 0 140px;
    margin: 0 auto 30px;
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
    font-size: 18px;
  }

  /*==========  Desktop First Method  ==========*/
  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .request-list__title {
      padding: 0 20px;
    }

    .request-list__title:before, .request-list__title:after {
      display: none;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 480px) {

  }
</style>
