<template>
  <div class="sketch-tab-item">
    <div class="sketch-tab-item__text">
      <h4 class="sketch-tab-item__text-title">Sketch {{this.index}}</h4>
      <p class="sketch-tab-item__text-description">{{this.sketch.description}}</p>
      <span class="sketch-tab-item__text-date">{{this.sketch.date}}</span>

      <ul>
        <li
          class="sketch-tab-item__approval"
          v-for="approve in sketch.approvals">
          {{approve.property}}
          <span class="sketch-tab-item__approval__indicator">0</span>
        </li>
      </ul>

      <div
        class="sketch-tab-item__approval-buttons"
        v-if="user.rights === 'gov'">
        <button>approve</button>
        <button>disapprove</button>
      </div>

    </div>
    <img class="sketch-tab-item__photo-preview" src="" alt="">
  </div>
</template>

<script>
  export default {
    name: "SketchTabItem",
    props: {
      sketch: {},
      index: {}
    },
    data() {
      return {
        user: null
      }
    },
    mounted() {
      // if (this.userRole === 'artist') {
      //   this.isArtist = true
      // }
      this.user = this.$store.getters.getUser;

      const file = this.sketch.photo;
      this.showPhoto(file);
    },
    created() {

    },
    methods: {
      showPhoto(file) {
        let preview = document.getElementsByClassName('sketch-tab-item__photo-preview')[this.index];
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
  .sketch-tab-item {
    padding-bottom: 30px;
    border-bottom: 1px solid #000;
  }

  .sketch-tab-item__text {
    display: inline-block;
    width: calc(100% - 150px);
  }

  .sketch-tab-item__text-title {
    margin: 10px 0;
    font-family: "PT Sans Bold";
  }

  .sketch-tab-item__text-date {
    font-size: 14px;
    border-bottom: 0.5px solid #000;
  }

  .sketch-tab-item__photo-preview {
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
