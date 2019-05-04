<template>
  <v-app>
    <v-dialog :content-class="'opened-img__dialog'" v-model="opened">
      <v-card class="opened-img__wrap" @click="opened = false">
        <img class="opened-img__img" :src="src" alt="">
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    name: "OpenedImage",
    data() {
      return {
        src: '',
        opened: false
      }
    },
    methods: {
      openImage(src) {
        this.src = src;
        this.opened = true;
      }
    }
  }
</script>

<style scoped>
  .opened-img__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    /*width: 90vh;*/
    /*height: 90vh;*/
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .opened-img__img {
    display: block;
    min-width: 40vw;
    min-height: 40vh;
    max-width: 90vw;
    max-height: 90vh;
  }

  /*==========  Desktop First Method  ==========*/
  /* Large Devices, Wide Screens */
  @media only screen and (max-width : 1200px) {
    .opened-img__img {
      min-width: 60vw;
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .opened-img__img {
      min-width: 70vw;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .opened-img__img {
      min-width: 80vw;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 480px) {
    .opened-img__img {
      min-width: 90vw;
    }
  }
</style>
