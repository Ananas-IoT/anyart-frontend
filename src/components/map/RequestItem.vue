<template>
  <div class="request-item">
    <div class="request-item__text">
      <h4 class="request-item__text-title">{{this.request.address.name}}</h4>
      <p class="request-item__text-description">{{this.request.description}}</p>
      <span class="request-item__text-date">{{this.request.date}}</span>
    </div>
    <img class="request-item__photo-preview" src="" alt="">
    <button class="" v-if="isArtist" type="button">Upload sketch</button>
  </div>
</template>

<script>
  export default {
    name: "RequestItem",
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
    created() {
    },
    mounted() {
      if(this.userRole === 'artist') {this.isArtist = true}
      const file = this.request.photo;
      this.showPhoto(file);
    },
    methods: {
      showPhoto: function (file) {
        let preview = document.getElementsByClassName('photo-preview')[this.index];
        let reader = new FileReader();
        reader.onloadend = function () {
          preview.src = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
</script>

<style scoped>
  .request-item__text {
    display: inline-block;
  }
  .request-item__text-title {
    margin: 10px 0;
    font-family: "PT Sans Bold";
  }
  .request-item__text-date {
    font-size: 14px;
    border-bottom: 0.5px solid #000;
  }
  .request-item__photo-preview {
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
