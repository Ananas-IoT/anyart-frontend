<template>
  <div class="request-item">
    <div class="request-item__text">
      <h4 class="request-item__text-title">{{this.request.address.name}}</h4>
      <p class="request-item__text-description">{{this.request.description}}</p>
      <span class="request-item__text-date">{{this.request.date}}</span>
    </div>
    <img class="request-item__photo-preview" src="" alt="">
    <button class="" v-if="isArtist" type="button" @click="uploadSketch">Upload sketch</button>
  </div>
</template>

<script>
    export default {
        name: "RequestItem"
    }
</script>

<style scoped>

</style>
