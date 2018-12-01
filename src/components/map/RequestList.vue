<template>
  <div>
    <h2>Here goes Request List!</h2>
    <request-item class="request"
                  v-for="(loopedRequest, index) in requestList"
                  :request = loopedRequest
                  :index = index
    >
    </request-item>
  </div>
</template>

<script>
  import RequestItem from './RequestItem'

  export default {
    name: "RequestList",
    components: {
      "request-item": RequestItem
    },
    props: {
      requestList: {
        type: Array
      }
    },
    // watch: {
    //   requestList: function () {
    //     var arrLen = Object.keys(this.requestList).length;
    //     var preview = document.getElementsByClassName('photo-preview')[arrLen - 1];
    //     this.showPhoto(this.requestList[arrLen - 1], preview)
    //   }
    // },
    data() {
      return {
        fileReader: new FileReader()
      }
    },
    // mounted() {
    //   for(var i = 0; i < Object.keys(this.requestList).length; i++) {
    //     var preview = document.getElementsByClassName('photo-preview')[i];
    //     var file = this.requestList[i].photo;
    //     this.showPhoto(file, preview);
    //   }
    // },
    methods: {


      // showPhoto: function (file, preview) {
      //   var reader = new FileReader();
      //   reader.onloadend = function () {
      //     preview.src = reader.result;
      //   };
      //   if (file) {
      //     reader.readAsDataURL(file);
      //   } else {
      //     preview.src = '';
      //   }
      // }
    }
  }
</script>

<style scoped>
  h2 {
    margin-top: 40px;
    font-size: 24px;
  }

  .request {
    padding: 5px 20px;
    font-size: 18px;
    border-top: 1px solid #e0e0e0;
  }
</style>
