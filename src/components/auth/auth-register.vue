<template>
  <v-app>
    <div class="auth-wrap register">
      <app-header></app-header>
      <v-stepper
        class="stepper"
        v-model="stepperCurrent"
        :alt-labels="true">

        <v-alert
          class="alert"
          v-if="this.error"
          :value="true"
          type="error"
        >
          {{this.error}}
        </v-alert>

        <v-stepper-header
          class="auth-stepper-header stepper-header">
          <v-stepper-step
            class="stepper-step"
            :complete="stepperCurrent > 1"
            step="1"
            @click="backToStep(1)"
          > {{this.$ml.get('auth-register-stepper')[0]}}
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            class="stepper-step"
            :complete="stepperCurrent > 2"
            step="2"
            @click="backToStep(2)"
          > {{this.$ml.get('auth-register-stepper')[1]}}
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            class="stepper-step"
            :complete="stepperCurrent > 3"
            step="3"
            @click="backToStep(3)"
          > {{this.$ml.get('auth-register-stepper')[2]}}
          </v-stepper-step>
        </v-stepper-header>

        <h2 class="form__title" v-text="$ml.get('auth-register-title')"></h2>
        <p class="form__subtitle" v-text="$ml.get('auth-register-subtitle')"></p>

        <v-stepper-items class="stepper-items">
          <v-stepper-content step="1">
            <v-card
              class="stepper-items__card"
              height="190px"
            >
              <v-form v-model="validation">
                <v-text-field
                  :label="$ml.get('auth-email')"
                  v-model="user.email"
                  :rules="inputRules"
                  autofocus
                >
                </v-text-field>
                <v-text-field
                  :label="$ml.get('auth-password')"
                  v-model="user.password"
                  :rules="inputRules"
                  type="password"
                >
                </v-text-field>
                <v-text-field
                  :label="$ml.get('auth-confirm-password')"
                  type="password"
                >
                </v-text-field>
              </v-form>
            </v-card>
            <v-btn
              color="primary"
              @click="stepperCurrent = 2; validation = false"
              :disabled="!validation"
            > {{$ml.get('auth-register-stepper')[3]}}
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card
              class="stepper-items__card"
              height="190px"
            >
              <v-form v-model="validation">
                <v-text-field
                  :label="$ml.get('auth-username')"
                  v-model="user.username"
                  :rules="inputRules"
                  autofocus
                >
                </v-text-field>
                <v-text-field
                  :label="$ml.get('auth-first-name')"
                  v-model="user.first_name"
                  :rules="inputRules"
                >
                </v-text-field>
                <v-text-field
                  :label="$ml.get('auth-last-name')"
                  v-model="user.last_name"
                  :rules="inputRules"
                >
                </v-text-field>
              </v-form>
            </v-card>
            <v-btn
              color="primary"
              @click="stepperCurrent = 3"
              :disabled="!validation"
            >{{$ml.get('auth-register-stepper')[3]}}
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card
              class="stepper-items__card"
              height="160px"
            >
              <p class="register__role-description">{{roleDescription}}</p>
              <div v-if="user.rights === 'basic'">
                <div @click="becomeArtist" class="register__become-artist-button"
                     v-text="$ml.get('auth-register-artist-button')"></div>
                <p class="register__role-description">{{descriptionList.artist}}</p>
              </div>
            </v-card>
            <v-btn
              color="primary"
              @click="addNewUser"
              v-text="$ml.get('auth-register-title')"
            >
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>

      </v-stepper>
    </div>

  </v-app>
</template>

<script>
  import {registerUser} from "../../api/auth";
  import eventBus from '../../eventBus';
  import AppHeader from '../the-header';
  import {serverErrorsMixin} from '../../mixins/serverErrorsMixin';

  export default {
    name: "register",
    components: {
      'app-header': AppHeader
    },
    mixins: [serverErrorsMixin],
    data() {
      return {
        stepperCurrent: 0,
        user: {
          rights: 'basic'
        },
        validation: false,
        descriptionList: {
          basic: this.$ml.get('auth-register-role-description')[0],
          artist: this.$ml.get('auth-register-role-description')[1]
        },
        inputRules: [
          v => !!v || this.$ml.get('required-field')
        ],
        // registerResponse: null,
        // registerError: null
      }
    },
    created() {},
    computed: {
      roleDescription() {
        return this.user.rights === 'artist' ? this.descriptionList.artist : this.descriptionList.basic;
      }
    },
    methods: {
      becomeArtist() {
        this.user.rights = 'artist';
      },

      addNewUser() {
        return new Promise((resolve, reject) => {
          registerUser(this.user, resolve, reject);
        })
          .then(response => {
          }, error => {
            this.statusCodeHumanify(error);
          });
      },

      backToStep(stepToBack) {
        if (this.stepperCurrent > stepToBack) {
          this.stepperCurrent = stepToBack;
          this.validation = true;
        }
      }
    }
  }
</script>

<style scoped>

  .form__title {
    margin: 30px 0 10px;
  }

  .form__subtitle {
    font-size: 14px;
    margin: 0;
  }

  .register__become-artist-button {
    width: fit-content;
    width: -moz-fit-content;
    margin: auto;
    font-family: "PT Sans Bold";
    color: #770d85;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transition: 0.1s;
  }

  .register__role-description {
    text-align: justify;
    font-size: 16px;
  }

  .register__become-artist-button:hover {
    border-bottom: 1px solid #7d42b9;
  }

  div + .register__role-description {
    text-align: center;
    margin: 5px 0 10px;
    font-size: 14px;
  }

</style>
