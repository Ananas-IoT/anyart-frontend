<template>
  <div class="body">
    <h3>Please, complete the {{type}} form</h3>
   <div class="request-wrap">
     <form>
       <textarea v-model="request.description" placeholder="description" required></textarea>
       <div v-if="requestAddress">{{requestAddress.name}}</div>
     </form>
   </div>
   <div class="img-preview">
     <img ref="photoPreview" src="" alt="photo preview..">
     <label for="files" class="img-input">Select Image</label>
     <input id="files" ref="photoUpload" @change="processPhoto()" type="file">
   </div>
    <button class="btn" @click="processRequest" type="button">Submit and Send</button>
  </div>
</template>

<script>
  export default {
    name: "RequestTemplate",
    props: {
      requestAddress: {
        default: {name: ''},
        type: Object
      }
    },
    data() {
      return {
        request: {
          photo: null,
          description: '',
          address: {},
          position: {},
          author: '',
          date: ''
        },
        type: "Request"
      }
    },
    methods: {
      processRequest: function () {

        this.request.date = this.getCurDate();
        this.request.address = this.requestAddress;

        this.request.position = {
          lat: this.requestAddress.geometry.location.lat(),
          lng: this.requestAddress.geometry.location.lng()
        };

        this.request.author = this.$store.getters.getUser.surname;
        // console.log(this.request);

        this.$store.dispatch('addRequest', this.request);
        this.$emit('addMarker', this.request);
        this.$emit('clearPosition');
      },
      processPhoto: function() {
        var preview = this.$refs.photoPreview;
        var file    = this.$refs.photoUpload.files[0];
        var reader  = new FileReader();

        reader.onloadend = function () {
          preview.src = reader.result;
        };

        if (file) {
          reader.readAsDataURL(file);
          this.request.photo = file;
        } else {
          preview.src = '';
        }
      },
      getCurDate: function() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        if(dd<10) {dd = '0'+dd}
        if(mm<10) {mm = '0'+mm}
        today = mm + '.' + dd + '.' + yyyy;
        return today;
      }
    }
  }
</script>

<style scoped>
  .body {
    text-align: center;
    width: 50%;
    padding: 0 10px 30px;
    margin: 20px 0 40px;
    background: #eee;
    border: 1px solid #7d42b9;
    border-radius: 10px;
  }
  .request-wrap {
    text-align: center;
    vertical-align: top;
    width: 50%;
    display: inline-block;
  }
  .img-preview {
    text-align: center;
    width: 49%;
    display: inline-block;
  }
  .img-preview img {
    display: block;
    width: 180px; height: 180px;
    margin: 0 auto 15px;
  }
  .img-preview input[type='file'] {
    display: none;
    color: transparent;
  }
  .img-preview .img-input {
    display: inline-block;
    margin: auto;
    cursor: pointer;
    border-bottom: 1px solid #000;
  }

  form div {
    display: block;
    width: 80%;
    padding: 5px 10px;
    margin: 5px auto 20px;
  }

  form textarea {
    display: block;
    width: 80%;
    height: 120px;
    padding: 5px 10px;
    margin: 20px auto 5px;
  }

  .body button {
    display: block;
    width: 200px;
    padding: 8px 15px;
    margin: 15px auto 0;
  }
</style>
