<template>
  <div class="request-list">
    <h2 class="request-list__title">Here goes Request List!</h2>
    <request-item class="request-list__request-item"
                  v-for="(loopedRequest, index) in requestList"
                  :request = loopedRequest
                  :index = index
                  :userRole = user.rights
                  @click.native="openRequestTab(index)"
    >
      <!--span is used to send index of current loopedRequest-->
      <!--<span>{{getRequestIndex(index)}}</span>-->
    </request-item>
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
      openRequestTab(index) {
        console.log(index);
        eventBus.$emit('openRequestTab', index);
      },

      //gets request index from html template
      // getRequestIndex(idx) {
      //   console.log(idx);
      //   this.requestIndex = idx;
      // }
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
