<template>
  <v-app>
    <v-dialog
      v-model="uploadFormTriggerIf"
      :width="360"
      :content-class="'upload-form__dialog-wrap custom-scrollbar'"
    >
      <v-card class="upload-form">
        <v-alert
          class="alert"
          v-if="sendError"
          :value="true"
          type="error"
        >
          {{sendError.text}}
        </v-alert>

        <v-card-title class="upload-form__title">{{this.type}} form</v-card-title>
        <v-form v-model="validation">

          <div class="upload-form__img-preview-wrap">
            <img class="upload-form__img-preview" ref="photoPreview" v-show="previewPhotoTriggerShow"
                 alt="photo preview..">
            <label class="upload-form__img-preview-label" for="files">Select Image</label>
            <input
              class="upload-form__img-preview-input"
              id="files"
              ref="photoUpload"
              @change="processPhoto()"
              type="file"
            >
          </div>

          <v-textarea
            label="Description"
            class="upload-form__description"
            :rows="4"
            :rules="inputRules"
            solo
            autofocus
          >
          </v-textarea>
          <div class="upload-form__request-address" v-if="requestAddress !== ''">{{requestAddress.formatted_address}}
          </div>
        </v-form>
        <v-btn
          class="upload-form__btn"
          color="primary"
          :disabled="!validation"
          @click="chooseProcess"
        >Send
        </v-btn>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="successMessage"
      :width="320"
      persistent
    >
      <v-card>
        <v-card-title class="upload-form__success-message__title">Information!</v-card-title>
        <v-card-text class="upload-form__success-message__text">Your request was successfully sent! We inform you that before appear on the map, your {{type}} should be approved! <br>
          If something will go wrong, we will inform you.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" flat @click="successMessage = false">Ok, I understood</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import FormButton from '../formComponents/FormButton'
  import {sendRequest} from "../../api/mapRequests";
  import {sendSketch} from '../../api/mapSketches';
  import eventBus from '../../eventBus';

  export default {
    name: "UploadForm",
    components: {
      'form-button': FormButton
    },
    props: {

      //Request or Sketch form
      type: {
        type: String,
        required: true
      },

      //for request address
      requestAddress: {
        default: () => ({
          name: '',
        })
      },

      //for sketch POST route
      workloadId: {
        default: null
      }
    },
    data() {
      return {
        //photo, description and position will be added
        request: {},

        //photo and description will be added
        sketch: {},

        uploadFormTriggerIf: false,
        inputRules: [
          v => !!v || 'Field is required'
        ],
        validation: false,
        previewPhotoTriggerShow: false,
        sendError: null,
        successMessage: false
      }
    },
    created() {
      eventBus.$on('sendSuccess', () => {
        this.uploadFormTriggerIf = false;
        this.successMessage = true;
        this.$emit('clearPosition');
      });

      eventBus.$on('sendRequestError', (error) => {
        console.log(error.response);
        this.sendError = {
          boolean: true,
          text: error.response.data.detail,
        };
        setTimeout(() => {
          this.sendError = null;
        }, 3000);
      });

      eventBus.$on('sendSketchError', (error) => {
        console.log(error.response);
        this.sendError = {
          boolean: true,
          text: error.response.data.detail,
        };
        setTimeout(() => {
          this.sendError = null
        }, 3000);
      });
    },
    computed: {},
    methods: {
      openUploadForm() {
        this.uploadFormTriggerIf = true;
      },

      chooseProcess() {
        if (this.type === 'request') {
          this.processRequest();
        } else if (this.type === 'sketch') {
          this.processSketch();
        }
      },

      processRequest() {
        this.request.position = {
          lat: this.requestAddress.geometry.location.lat(),
          lng: this.requestAddress.geometry.location.lng()
        };

        sendRequest(this.request);
        this.$emit('addMarker', this.request);
      },

      processSketch() {
        sendSketch(this.sketch, this.workloadId);
        // this.$emit('clearPosition');
      },

      processPhoto() {
        var preview = this.$refs.photoPreview;
        var file = this.$refs.photoUpload.files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
          preview.src = reader.result;
        };

        if (file) {
          reader.readAsDataURL(file);
          if (this.type === 'request') {
            this.request.photo = file;
          } else if (this.type === 'sketch') {
            this.sketch.photo = file;
          }
          this.computePhotoPreviewShow();
        } else {
          preview.src = '';
        }
      },

      computePhotoPreviewShow() {
        this.previewPhotoTriggerShow = this.sketch.photo !== undefined || this.request.photo !== undefined;
      }
    },
  }
</script>

<style scoped>
  .alert {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

  .upload-form {
    position: relative;
    text-align: center;
    width: 100%;
    padding: 30px 15px;
    overflow-x: hidden;
  }

  .upload-form__title {
    display: inline-block;
    text-align: center;
    padding: 0;
    margin: 0 0 20px;
    font-size: 20px;
    font-family: "PT Sans Bold";
    text-transform: capitalize;
  }

  .upload-form__img-preview-wrap {
    text-align: center;
  }

  .upload-form__img-preview {
    display: block;
    max-width: 240px;
    max-height: 240px;
    margin: 0 auto 15px;
  }

  .upload-form__img-preview-input {
    display: none;
    color: transparent;
  }

  .upload-form__img-preview-label {
    display: inline-block;
    margin: auto;
    cursor: pointer;
    border-bottom: 1px solid #000;
  }

  .upload-form__description {
    width: 80%;
    margin: 20px auto 5px;
  }

  .upload-form__request-address {
    text-align: center;
    display: block;
    width: 80%;
    margin: 5px auto 20px;
  }

  .upload-form__btn {
    margin: 0;
  }

  .upload-form__success-message__title {
    display: block;
    text-align: center;
    width: 100%;
    font-size: 20px;
    font-family: "PT Sans Bold";
    padding-bottom: 0;
  }

  .upload-form__success-message__text {
    font-size: 16px;
    padding-bottom: 0;
  }

</style scoped>
