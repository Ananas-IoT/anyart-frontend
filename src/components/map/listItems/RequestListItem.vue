<template>
  <div class="request-list-item">
    <div class="request-list-item__text">
      <!--<h4 class="request-list-item__text-title">{{this.request.location.street_address}}</h4>-->
      <h4 class="request-list-item__text-title">default 42 Street in default City</h4>
      <!--<p class="request-list-item__text-description">{{this.request.description}}</p>-->
      <p class="request-list-item__text-description">{{this.request.description}}</p>
      <span class="request-list-item__text-date">{{this.request.created_at}}</span>
    </div>
    <img class="request-list-item__photo-preview" src="" alt="">
    <button class="request-list-item__btn" v-if="isArtist" type="button" @click.stop="uploadSketch">Upload sketch
    </button>
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
      if (this.userRole === 'artist') {
        this.isArtist = true
      }
      document.getElementsByClassName('request-list-item__photo-preview')[this.index]
        .src = this.request.wall_photos[0];
    },
    created() {

    },
    methods: {
      //trigger common-form on Map component
      uploadSketch() {
        eventBus.$emit('uploadSketch', this.request.workload);
      }
    }
  }
</script>

<style scoped>
  .request-list-item {
    height: 200px;
    background: #fcfcfc;
  }

  .request-list-item__text {
    display: inline-block;
    width: calc(100% - 190px);
  }

  .request-list-item__text-title {
    margin: 10px 0;
    font-family: "PT Sans Bold";
  }

  .request-list-item__text-description {
    font-size: 13px;
  }

  .request-list-item__text-date {
    font-size: 14px;
    border-bottom: 0.5px solid #000;
  }

  .request-list-item__photo-preview {
    display: inline-block;
    width: 180px;
    height: 180px;
    margin: 5px 10px 0 0;
    float: left;
    border: 1px solid #770d85;
    border-radius: 2px;
  }

  .request-list-item__btn {
    display: block;
  }

</style>
