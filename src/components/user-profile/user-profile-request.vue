<template>
  <v-app>
    <v-card class="user-request-item">

      <div class="user-request-item__actions">
        <v-btn
          color="primary"
          @click="openRequest"
          class="user-request-item__actions__btn"
          v-text="$ml.get('user-profile-request-actions')[0]"
        ></v-btn>
        <v-btn
          color="default"
          @click="deleteRequest"
          class="user-request-item__actions__btn"
          v-text="$ml.get('user-profile-request-actions')[1]"
        ></v-btn>
      </div>

      <v-card-title class="user-request-item__header" ref="user-request-item__title">
      </v-card-title>

      <div class="user-request-item__photo-preview">
        <img class="img-open-hover__img" :src=this.request.wall_photos[0] alt="">
        <span class="img-open-hover__span"></span>
      </div>
      <v-card-text class="user-request-item__text">
        <h4 class="user-request-item__text-title">default 42 Street in default City</h4>
        <div class="user-request-item__text-owner">{{$ml.get('request-list-owner')}}{{this.request.owner.username}}</div>
        <p class="user-request-item__text-description">{{this.request.description | textLength(120)}} </p>

      </v-card-text>
      <div class="user-request-item__add-info">
        <div class="user-request-item__add-info__status">{{$ml.get('request-list-status')}}status</div>
        <div class="user-request-item__add-info__sketches">{{this.request.sketch_count}}</div>
        <div class="user-request-item__add-info__date">01.01.1974</div>
      </div>
    </v-card>
  </v-app>
</template>

<script>
  import eventBus from './../../eventBus'

  export default {
    name: "UserRequest",
    props: {
      request: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
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
        this.$refs['user-request-item__title'].style.background = color;
      },

      //triggers delete request on user-profile component
      deleteRequest() {
        this.$emit('deleteRequest', this.index, 'request');
      },

      openRequest() {
        this.$router.push({name: "openRequest", params: {requestIdx: this.index}});
      }
    }
  }

</script>

<style scoped>
  .user-request-item {
    position: relative;
    min-height: 140px;
    max-height: 180px;
    padding-bottom: 10px;
    margin: 10px 5px 0;
    transition: 0.3s;
    cursor: pointer;
  }

  .user-request-item:before {
    content: '';
    position: absolute;
    top: 6px;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    /*border-radius: 4px;*/
    z-index: 1;
    transition: 0.3s;
    pointer-events: none;
    opacity: 0;
  }

  .user-request-item:hover:before {
    pointer-events: auto;
    opacity: 1;
  }

  .user-request-item__actions {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
  }

  .user-request-item:hover .user-request-item__actions {
    pointer-events: auto;
    opacity: 1;
  }

  .user-request-item__photo-preview {
    display: inline-block;
    margin: 5px 10px 0 0;
    border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }

  .user-request-item__photo-preview .img-open-hover__img {
    display: block;
    max-width: 100px;
    max-height: 100px;
  }

  .user-request-item__header {
    padding: 3px 10px;
    border-bottom: 1px solid #eee;
  }

  .user-request-item__text {
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 120px);
    padding-left: 0;
  }

  .user-request-item__text-title {
    font-size: 14px;
    font-family: "PT Sans Bold";
    /*color: #fff;*/
  }

  .user-request-item__text-owner {
    margin: -5px 0 5px;
    font-size: 12px;
    color: #999;
  }

  .user-request-item__text-description {
    max-height: 90px;
    font-size: 13px;
    overflow-y: hidden;
  }

  .user-request-item__add-info {
    text-align: right;
    position: absolute;
    bottom: 5px;
    left: 10px;
    /* ot baldy :/ */
    width: 300px;
    font-size: 14px;
  }

  .user-request-item__add-info__status {
    display: inline-block;
    float: left;
  }

  .user-request-item__add-info__sketches {
    position: relative;
    display: inline-block;
    padding-left: 20px;
    font-family: "PT Sans BoldItalic";
  }

  .user-request-item__add-info__sketches:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    background: url("../../assets/img/pen.png") center center;
    -webkit-background-size: contain;
    background-size: contain;
  }

  .user-request-item__add-info__date {
    display: inline-block;
    margin-left: 70px;
    font-size: 12px;
    color: #696969;
  }

  .user-request-item__btn {
    display: block;
    cursor: pointer;
  }
</style>
