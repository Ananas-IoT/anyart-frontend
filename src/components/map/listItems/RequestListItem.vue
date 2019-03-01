<template>
  <div class="request-list-item">
    <div class="request-list-item__text">
      <h4 class="request-list-item__text-title">{{this.request.location.street_address}}</h4>
      <p class="request-list-item__text-description">{{this.request.description}}</p>
      <span class="request-list-item__text-date">{{this.request.workload.created_at}}</span>
    </div>
    <img class="request-list-item__photo-preview" src="" alt="">
    <button class="" v-if="isArtist" type="button" @click.stop="uploadSketch">Upload sketch</button>
  </div>
</template>

<script>
  import eventBus from '../../../eventBus'
  // import {getImage} from "../../../api/mapRequests";

  export default {
    name: "RequestListItem",
    props: {
      request: {},
      index: Number,
      userRole: {}
    },
    data() {
      return {
        isArtist: true
      }
    },
    mounted() {
      if(this.userRole === 'artist') {this.isArtist = true}
      document.getElementsByClassName('request-list-item__photo-preview')[this.index]
        .src = this.request.wall_photos[0].photo;

      // let file = this.request.wall_photos[0].photo;

      // console.log(file);
      // let parsed_file = getImage(file);
      // console.log(file);
      // this.showPhoto(parsed_file);
    },
    created() {

    },
    methods: {
      // showPhoto (file) {
      //   let preview = document.getElementsByClassName('request-list-item__photo-preview')[this.index];
      //   let reader = new FileReader();
      //   reader.onloadend = function () {
      //     preview.src = reader.result;
      //   };
      //   reader.readAsDataURL(file);
      // },

      //trigger common-form on Map component
      uploadSketch() {
        eventBus.$emit('uploadSketch');
      }
    }
  }
</script>

<style scoped>
  .request-list-item__text {
    display: inline-block;
    width: calc(100% - 150px);
  }
  .request-list-item__text-title {
    margin: 10px 0;
    font-family: "PT Sans Bold";
  }
  .request-list-item__text-date {
    font-size: 14px;
    border-bottom: 0.5px solid #000;
  }
  .request-list-item__photo-preview {
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
