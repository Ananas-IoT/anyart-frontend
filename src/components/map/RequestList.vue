<template>
  <div>
    <h2>Here goes Request List!</h2>
    <request-item class="request"
                  v-for="(loopedRequest, index) in requestList"
                  :request = loopedRequest
                  :index = index
                  :userRole = user.role
    >
    </request-item>
  </div>
</template>

<script>
  import RequestItem from './RequestItem'

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
        user: null
      }
    },
    created() {
      this.user = this.$store.getters.getUser;
    },
    methods: {

    }
  }
</script>

<style scoped>
  h2 {
    margin-top: 60px;
    font-size: 24px;
    /*color: #7d42b9;*/
  }

  .request {
    padding: 5px 20px;
    font-size: 18px;
    border-top: 2px solid #000;
  }
</style>
