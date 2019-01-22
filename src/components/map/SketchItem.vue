<template>
  <div class="sketch-item">
    <div class="sketch-item__text">
      <h4 class="sketch-item__text-title">Sketch {{this.index}}</h4>
      <p class="sketch-item__text-description">{{this.sketch.description}}</p>
      <span class="sketch-item__text-date">{{this.sketch.date}}</span>
    </div>
    <img class="sketch-item__photo-preview" src="" alt="">
  </div>
</template>

<script>
  export default {
    name: "SketchItem",
    props: {
      sketch: {},
      index: {}
    },
    data() {
      return {
        isArtist: false
      }
    },
    created() {
    },
    mounted() {
      if (this.userRole === 'artist') {
        this.isArtist = true
      }
      const file = this.sketch.photo;
      this.showPhoto(file);
    },
    methods: {
      showPhoto(file) {
        let preview = document.getElementsByClassName('sketch-item__photo-preview')[this.index];
        let reader = new FileReader();
        reader.onloadend = function () {
          preview.src = reader.result;
        };
        reader.readAsDataURL(file);
      },
    }
  }
</script>

<style scoped>
  .sketch-item {
    padding-bottom: 30px;
    border-bottom: 1px solid #000;
  }

  .sketch-item__text {
    display: inline-block;
    width: calc(100% - 150px);
  }

  .sketch-item__text-title {
    margin: 10px 0;
    font-family: "PT Sans Bold";
  }

  .sketch-item__text-date {
    font-size: 14px;
    border-bottom: 0.5px solid #000;
  }

  .sketch-item__photo-preview {
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
