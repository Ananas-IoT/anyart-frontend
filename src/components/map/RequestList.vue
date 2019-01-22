<template>
  <div class="request-list">
    <h2 class="request-list__title">Here goes Request List!</h2>
    <request-item class="request-list__request-item"
                  v-for="(loopedRequest, index) in requestList"
                  :request = loopedRequest
                  :index = index
                  :userRole = user.role
                  @click.native="openRequest"
    >
      <span>{{getRequestIndex(index)}}</span>
    </request-item>
  </div>
</template>

<script>
  import RequestItem from './RequestListItem'
  import eventBus from '../../eventBus'

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
      this.user = this.$store.getters.getUser;
    },
    methods: {
      openRequest() {
        eventBus.$emit('openRequest', this.requestIndex);
      },
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
