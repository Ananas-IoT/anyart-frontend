<template>
  <div class="request-tab-item">
    <div class="request-tab-item__text">
      <h4 class="request-tab-item__text-title">{{this.request.location.street_address}}</h4>
      <p class="request-tab-item__text-description">{{this.request.description}}</p>
      <span class="request-tab-item__text-date">{{this.request.workload.created_at}}</span>
    </div>
    <img class="request-tab-item__photo-preview" src="" alt="">
    <!--<button class="" v-if="isArtist" type="button" @click="uploadSketch">Upload sketch</button>-->
  </div>
</template>

<script>
  export default {
    name: "RequestTabItem",
    props: {
      request: {},
      index: {},
      userRole: {}
    },
    data() {
      return {
        isArtist: false
      }
    },
    mounted() {
      if (this.userRole === 'artist') {
        this.isArtist = true
      }
      document.getElementsByClassName('request-tab-item__photo-preview')[0]
        .src = this.request.wall_photos[0];
      // const file = this.request.photo;
      // this.showPhoto(file);
    },
    created() {

    },
    methods: {
      showPhoto(file) {
        // let preview = document.getElementsByClassName('request-tab-item__photo-preview')[this.index];
        // let reader = new FileReader();
        // reader.onloadend = function () {
        //   preview.src = reader.result;
        // };
        // reader.readAsDataURL(file);
      },
      //trigger request-form on Map component
      uploadSketch() {
        // eventBus.$emit('uploadSketch');
      }
    }
  }
</script>

<style scoped>
  .request-tab-item {
    height: 160px;
    padding-bottom: 30px;
    border-bottom: 1px solid #000;
  }

  .request-tab-item__text {
    display: inline-block;
    width: calc(100% - 150px);
  }

  .request-tab-item__text-title {
    margin: 10px 0;
    font-family: "PT Sans Bold";
  }

  .requestt-item__text-date {
    font-size: 14px;
    border-bottom: 0.5px solid #000;
  }

  .request-tab-item__photo-preview {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-top: 5px;
    float: right;
    border: 1px solid #770d85;
    border-radius: 2px;
  }

  /*.btn {*/
  /*width: 140px;*/
  /*padding: 5px;*/
  /*font-family: "PT Sans Regular";*/
  /*}*/
  /*.btn:hover {*/
  /*font-family: "PT Sans Regular";*/
  /*}*/
</style>
