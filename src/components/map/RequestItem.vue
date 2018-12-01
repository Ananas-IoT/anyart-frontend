<template>
  <div>
    <h4>{{this.request.address.name}}</h4>
    <p>{{this.request.description}}</p>
    <span>{{this.request.date}}</span>
    <img class="photo-preview" src="" alt="">
  </div>
</template>

<script>
  export default {
    name: "RequestItem",
    props: {
      request: {},
      index: {}
    },
    data() {
      return {}
    },
    created() {

    },
    mounted() {
      const file = this.request.photo;
      this.showPhoto(file);
      // console.log(this.request.address.name, this.request.photo.name);
    },
    methods: {
      showPhoto: function (file) {
        let preview = document.getElementsByClassName('photo-preview')[this.index];
        let reader = new FileReader();
        reader.onloadend = function () {
          preview.src = reader.result;
        };
        reader.readAsDataURL(file);
        // console.log(this.request.address.name, this.request.photo.name);
        // console.log(this.request.address.name, file.name);
      }
    }
  }
</script>

<style scoped>

</style>
