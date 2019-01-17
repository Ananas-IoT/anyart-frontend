<template>
  <div class="request-form">
    <h3 class="request-form__title">Please, complete the {{type}} form</h3>
    <div class="request-from__wrap">
      <form>
        <textarea class="request-form__request-description" v-model="request.description" placeholder="description"
                  required></textarea>
        <div class="request-form__request-address" v-if="requestAddress">{{requestAddress.name}}</div>
      </form>
    </div>
    <div class="request-form__img-preview-wrap">
      <img class="request-form__img-preview" ref="photoPreview" src="" alt="photo preview..">
      <label class="request-form__img-preview-label" for="files">Select Image</label>
      <input class="request-form__img-preview-input" id="files" ref="photoUpload" @change="processPhoto()" type="file">
    </div>
    <form-button
      :text="'Submit and Send'"
      @click.native="processRequest">
    </form-button>
  </div>
</template>

<script>
  import FormButton from '../formComponents/FormButton'

  export default {
    name: "RequestTemplate",
    components: {
      'form-button': FormButton
    },
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
      processPhoto: function () {
        var preview = this.$refs.photoPreview;
        var file = this.$refs.photoUpload.files[0];
        var reader = new FileReader();

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
      getCurDate: function () {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        today = mm + '.' + dd + '.' + yyyy;
        return today;
      }
    }
  }
</script>

<style scoped>
  .request-form {
    text-align: center;
    width: 50%;
    padding: 0 10px 30px;
    margin: 20px 0 40px;
    background: #eee;
    border: 1px solid #7d42b9;
    border-radius: 10px;
  }

  .request-from__wrap {
    text-align: center;
    vertical-align: top;
    width: 50%;
    display: inline-block;
  }

  .request-form__img-preview-wrap {
    text-align: center;
    width: 49%;
    display: inline-block;
  }

  .request-form__img-preview {
    display: block;
    width: 180px;
    height: 180px;
    margin: 0 auto 15px;
  }

  .request-form__img-preview-input {
    display: none;
    color: transparent;
  }

  .request-form__img-preview-label {
    display: inline-block;
    margin: auto;
    cursor: pointer;
    border-bottom: 1px solid #000;
  }

  .request-form__request-description {
    display: block;
    width: 80%;
    height: 120px;
    padding: 5px 10px;
    margin: 20px auto 5px;
  }

  .request-form__request-address {
    display: block;
    width: 80%;
    padding: 5px 10px;
    margin: 5px auto 20px;
  }

</style>
