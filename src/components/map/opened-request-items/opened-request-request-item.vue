<template>
  <v-app>
    <div class="opened-request-item">

      <div class="wrap">
        <div class="img-open-hover__wrap opened-request-item__photo-preview" @click.stop="openImage">
          <img class="img-open-hover__img" :src=this.request.wall_photos[0] alt="">
          <span class="img-open-hover__span"></span>
        </div>

        <div class="opened-request-item__add-info">
          <div class="opened-request-item__add-info__status">Status: status</div>
          <div class="opened-request-item__add-info__date">01.01.1974</div>
          <v-btn
            class="opened-request-item__btn"
            v-if="userRights === 'artist'"
            color="primary"
            @click="uploadSketch"
          >Upload sketch</v-btn>
        </div>
      </div>


      <div class="opened-request-item__text">
        <div class="opened-request-item__text-owner">owner: Owner</div>
        <p class="opened-request-item__text-description">{{this.request.description}} </p>
      </div>
      <!--<button class="request-list-item__btn" v-if="isArtist" type="button" @click.stop="uploadSketch">Upload sketch-->
      <!--</button>-->
    </div>
  </v-app>
</template>

<script>
  import eventBus from '../../../eventBus'

  export default {
    name: "OpenedRequestItem",
    props: {
      request: Object,
      index: Number,
      userRights: String,
      requestStyleColor: String
    },
    data() {
      return {
        isArtist: false
      }
    },
    mounted() {

      },
    methods: {
      //trigger common-form on Map component
      uploadSketch() {
        eventBus.$emit('uploadSketch', this.request.workload);
      },

      //to Map component
      openImage() {
        eventBus.$emit('openImage', this.request.wall_photos[0]);
      }
    }
  }
</script>

<style scoped>

  .opened-request-item {
    min-height: 200px;
    /*padding: 5px 20px;*/
    margin: 10px 5px 0;
    transition: 0.3s;
  }

  .wrap {
    width: 200px;
    display: inline-block;
  }

  .opened-request-item__photo-preview {
    display: inline-block;
    margin: 5px 20px 0 0;
    border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }

  .opened-request-item__photo-preview .img-open-hover__img {
    display: block;
    max-width: 180px;
    max-height: 180px;
  }

  .opened-request-item__text {
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 220px);
    padding-left: 0;
  }

  .opened-request-item__text-owner {
    margin: -5px 0 5px;
    font-size: 14px;
    color: #999;
  }

  .opened-request-item__text-description {
    font-size: 16px;
  }

  .opened-request-item__add-info {
    text-align: right;
    /*position: absolute;*/
    /*left: 0;*/
    /*bottom: 10px;*/
    /* ot baldy :/ */
    width: 180px;
    font-size: 14px;
  }

  .opened-request-item__add-info__status {
    display: inline-block;
    float: left;
  }

  .opened-request-item__add-info__date {
    display: inline-block;
    /*margin-left: 70px;*/
    font-size: 12px;
    color: #696969;
  }

  .opened-request-item__btn {
    display: block;
    margin: 10px auto;
    font: 14px "PT Sans Bold";
    cursor: pointer;
  }

</style>
