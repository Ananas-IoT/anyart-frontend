<template>
  <div class="request-list">
    <h2 class="request-list__title">Here goes Request List!</h2>
    <!--<request-item class="request-list__request-item"-->
                  <!--v-for="(loopedRequest, index) in requestList"-->
                  <!--:request = loopedRequest-->
                  <!--:index = index-->
                  <!--:userRole = user.rights-->
                  <!--@click.native="openRequestTab"-->

    <!--&gt;-->
      <!--&lt;!&ndash;span is used to send index of current loopedReqest&ndash;&gt;-->
      <!--<span>{{getRequestIndex(index)}}</span>-->
    <!--</request-item>-->
  </div>
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
      requestList: {
        type: Array
      }
    },
    data() {
      return {
        user: null,
        requestIndex: null
      }
    },
    created() {
      getAllRequests();
      // this.user = this.$store.getters.getUser;
      //
      // const config = {
      //   headers: {'Authorization': 'Bearer ' + this.token}
      // };
      // const API_URL = 'https://anyart.pythonanywhere.com';
      // const url = `${API_URL}/workload/wall_photo_wrappers/`;
      // axios.get(url, config)
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(err => {
      //     console.log(err.data);
      //   });
    },
    methods: {
      //to map component
      openRequestTab() {
        eventBus.$emit('openRequestTab', this.requestIndex);
      },

      //gets request index from html template
      getRequestIndex(idx) {
        this.requestIndex = idx;
      }
    }
  }
</script>

<style scoped>
  .request-list__title {
    margin-top: 60px;
    font-size: 24px;
    /*color: #7d42b9;*/
  }

  .request-list__request-item {
    padding: 5px 20px;
    font-size: 18px;
    border-top: 2px solid #000;
    cursor: pointer;
  }
</style>
