<template>
  <v-app>
    <v-card class="request-list-item">

      <v-card-title class="request-list-item__header" ref="request-list-item__title">
      </v-card-title>

      <div class="img-open-hover__wrap request-list-item__photo-preview" @click.stop="openImage">
        <img class="img-open-hover__img" :src=this.request.wall_photos[0] alt="">
        <span class="img-open-hover__span"></span>
      </div>
      <v-card-text class="request-list-item__text">
        <h4 class="request-list-item__text-title">default 42 Street in default City</h4>
        <div class="request-list-item__text-owner">owner: Owner</div>
        <p class="request-list-item__text-description">{{this.request.description | textLength(100)}} </p>

        <div class="request-list-item__add-info">
          <div class="request-list-item__add-info__status">Status: status</div>
          <div class="request-list-item__add-info__sketches">6</div>
          <div class="request-list-item__add-info__date">01.01.1974</div>
        </div>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  import eventBus from '../../../eventBus'

  export default {
    name: "RequestListItem",
    props: {
      request: {}
    },
    data() {
      return {
        isArtist: true
      }
    },
    mounted() {
      this.setRandomColor();
    },
    methods: {
      setRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        this.$refs['request-list-item__title'].style.background = color;
      },

      //trigger common-form on Map component
      uploadSketch() {
        eventBus.$emit('uploadSketch', this.request.workload);
      },
      openImage() {
        eventBus.$emit('openImage', this.request.wall_photos[0]);
      }
    }
  }
</script>

<style scoped>

  .request-list-item {
    min-height: 200px;
    max-height: 300px;
    /*padding: 5px 20px;*/
    margin: 10px 5px 0;
    /*background: rgba(30, 163, 164, 0.5);*/
    transition: 0.3s;
    cursor: pointer;
  }

  .request-list-item:hover {
    background: #eee;
  }

  .request-list-item__photo-preview {
    display: inline-block;
    margin: 5px 10px 0 0;
    border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }

  .request-list-item__photo-preview .img-open-hover__img {
    display: block;
    max-width: 180px;
    max-height: 180px;
  }

  .request-list-item__header {
    padding: 3px 10px;
    /*background: #770d85;*/
    /*background: rgba(25, 163, 164, 0.6);*/
    /*background: rgba(119, 13, 133, 0.75);*/
    border-bottom: 1px solid #eee;
  }

  .request-list-item__text {
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 200px);
    padding-left: 0;
  }

  .request-list-item__text-title {
    font-size: 18px;
    font-family: "PT Sans Bold";
    /*color: #fff;*/
  }

  .request-list-item__text-owner {
    margin: -5px 0 5px;
    font-size: 14px;
    color: #999;
  }

  .request-list-item__text-description {
    max-height: 90px;
    font-size: 16px;
    overflow-y: hidden;
  }

  .request-list-item__add-info {
    text-align: right;
    position: absolute;
    bottom: 10px;
    /* ot baldy :/ */
    width: 300px;
    font-size: 14px;
  }

  .request-list-item__add-info__status {
    display: inline-block;
    float: left;
  }

  .request-list-item__add-info__sketches {
    position: relative;
    display: inline-block;
    padding-left: 20px;
    font-family: "PT Sans BoldItalic";
  }

  .request-list-item__add-info__sketches:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    background: url("../../../assets/img/pen.png") center center;
    -webkit-background-size: contain;
    background-size: contain;
  }

  .request-list-item__add-info__date {
    display: inline-block;
    margin-left: 70px;
    font-size: 12px;
    color: #696969;
  }

  .request-list-item__btn {
    display: block;
    cursor: pointer;
  }

</style>
