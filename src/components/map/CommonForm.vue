<template>
  <div class="common-form">
    <h3 class="common-form__title">Please, complete the {{this.type}} form</h3>

    <div class="common-form__wrap">
      <form>
        <textarea
          class="common-form__request-description"
          v-if="this.type === 'request'"
          v-model="request.description"
          placeholder="description"
                  required></textarea>
        <textarea
          class="common-form__request-description"
          v-if="this.type === 'sketch'"
          v-model="sketch.description"
          placeholder="description"
                  required></textarea>
        <div class="common-form__request-address" v-if="requestAddress !== ''">{{requestAddress.name}}</div>
      </form>
    </div>

    <div class="common-form__img-preview-wrap">
      <img class="common-form__img-preview" ref="photoPreview" src="" alt="photo preview..">
      <label class="common-form__img-preview-label" for="files">Select Image</label>
      <input
        class="common-form__img-preview-input"
        id="files"
        ref="photoUpload"
        @change="processPhoto()"
        type="file">
    </div>

    <form-button
      :text="'Submit and Send'"
      @click.native="chooseProcess">
    </form-button>
  </div>
</template>

<script>
  import FormButton from '../formComponents/FormButton'
  import axios from 'axios'

  export default {
    name: "CommonForm",
    components: {
      'form-button': FormButton
    },
    props: {
      type: {
        type: String,
        required: true
      },
      requestAddress: {
        default: () => ({
          name: '',
        })
      }
    },
    data() {
      return {
        request: {
          // 'workload[requirements]': '',
          // id: 0,
          // photo: null,
          description: '',
          // address: {},
          position: {},
          // author: '',
          // date: ''
        },
        sketch: {
          requestId: 0,
          photo: null,
          description: '',
          author: '',
          date: '',
          likeCounter: 0
        },
        token: null
      }
    },
    created() {
      // this.type = 'request'
      this.token = this.$store.getters.getUserToken;
    },
    methods: {
      chooseProcess() {
        if(this.type === 'request') {
          this.processRequest();
        } else if (this.type === 'sketch') {
          this.processSketch();
        }
      },

      processRequest () {
        // this.request.date = this.getCurDate();
        // this.request.address = this.requestAddress;

        this.request.position = {
          lat: this.requestAddress.geometry.location.lat(),
          lng: this.requestAddress.geometry.location.lng()
        };

        var bodyFormData = new FormData();
        bodyFormData.set('description', 'test');
        bodyFormData.set('location[lat]', '0');
        bodyFormData.set('location[lng]', '0');
        bodyFormData.set('workload[requirements]', 'test');
        bodyFormData.append('wall_photo0', this.request.photo);

        // this.request['location[lat]'] = this.request.position.lat;
        // this.request['location[lng]'] = this.request.position.lng;

        // this.request.author = this.$store.getters.getUser.surname;
        // console.log(this.request);

        const config = {
          headers: {'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + this.token}
        };
        const API_URL = 'https://anyart.pythonanywhere.com';
        const url = `${API_URL}/workload/wall_photo_wrappers/`;
        axios.post(url, bodyFormData, config)
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err.data);
          });


        //----------------------------
        this.$store.dispatch('addRequest', this.request);
        this.$emit('addMarker', this.request);
        this.$emit('clearPosition');
      },

      processSketch() {
        this.sketch.date = this.getCurDate();
        this.sketch.author = this.$store.getters.getUser.surname;

        this.$store.dispatch('addSketch', this.sketch);
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
          if(this.type === 'request') {
            this.request.photo = file;
          } else if(this.type === 'sketch') {
            this.sketch.photo = file;
          }
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
  .common-form {
    text-align: center;
    width: 50%;
    padding: 0 10px 30px;
    margin: 20px 0 40px;
    background: #eee;
    border: 1px solid #7d42b9;
    border-radius: 10px;
  }

  .common-form__wrap {
    text-align: center;
    vertical-align: top;
    width: 50%;
    display: inline-block;
  }

  .common-form__img-preview-wrap {
    text-align: center;
    width: 49%;
    display: inline-block;
  }

  .common-form__img-preview {
    display: block;
    width: 180px;
    height: 180px;
    margin: 0 auto 15px;
  }

  .common-form__img-preview-input {
    display: none;
    color: transparent;
  }

  .common-form__img-preview-label {
    display: inline-block;
    margin: auto;
    cursor: pointer;
    border-bottom: 1px solid #000;
  }

  .common-form__request-description {
    display: block;
    width: 80%;
    height: 120px;
    padding: 5px 10px;
    margin: 20px auto 5px;
  }

  .common-form__request-address {
    display: block;
    width: 80%;
    padding: 5px 10px;
    margin: 5px auto 20px;
  }

</style>
