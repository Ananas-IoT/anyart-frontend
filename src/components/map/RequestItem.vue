<template>
  <div>
    <div class="txt">
      <h4>{{this.request.address.name}}</h4>
      <p>{{this.request.description}}</p>
      <span class="date">{{this.request.date}}</span>
    </div>
    <img class="photo-preview" src="" alt="">
    <button class="btn" v-if="isArtist" type="button">Upload sketch</button>
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
  .txt {
    display: inline-block;
  }
  .txt h4 {
    margin: 10px 0;
    font-family: "PT Sans Bold";
  }
  .txt .date {
    font-size: 14px;
    border-bottom: 0.5px solid #000;
  }
  img {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-top: 5px;
    float: right;
    border: 1px solid #770d85;
    border-radius: 2px;
  }

  .btn {
    width: 140px;
    padding: 5px;
    font-family: "PT Sans Regular";
  }
  .btn:hover {
    font-family: "PT Sans Regular";
  }
</style>
