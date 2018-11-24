<template>
  <div>
    <h2>Here goes Request List!</h2>
    <div class="request" v-for="request in requestList">
      <h4>{{request.address.name}}</h4>
      <p>{{request.description}}</p>
      <span>{{request.date}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RequestList",
    props: {
      requestList: {}
    }
  }
</script>

<style scoped>
  h2 {
    margin-top: 40px;
    font-size: 24px;
  }

  .request {
    padding: 5px 20px;
    font-size: 18px;
    border-top: 1px solid #e0e0e0;
  }
</style>
