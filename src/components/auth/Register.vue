<template>
  <v-app>
    <div class="register">
      <app-header></app-header>
      <v-stepper
        class="register__stepper"
        v-model="stepperCurrent"
        :alt-labels="true">


        <v-alert
          class="register__alert"
          v-if="registerResponse"
          :value="true"
          type="success"
        >
          {{registerResponse.text}}
        </v-alert>

        <v-alert
          class="register__alert"
          v-if="registerError"
          :value="true"
          type="error"
        >
          {{registerError.text}}
        </v-alert>

        <v-stepper-header
          class="register__stepper-header">
          <v-stepper-step class="register__stepper-step" :complete="stepperCurrent > 1" step="1" @click="backToStep(1)">
            Account setup
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step class="register__stepper-step" :complete="stepperCurrent > 2" step="2" @click="backToStep(2)">
            Personal details
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step class="register__stepper-step" :complete="stepperCurrent > 3" step="3" @click="backToStep(3)">
            Social profile
          </v-stepper-step>
        </v-stepper-header>

        <h2 class="form__title">Create an account</h2>
        <p class="form__subtitle">to upload requests and vote for them</p>

        <v-stepper-items class="register__stepper-items">
          <v-stepper-content step="1">
            <v-card
              class="register__stepper-items__card"
              height="190px"
            >
              <v-form v-model="validation">
                <v-text-field
                  label="Email"
                  v-model="user.email"
                  :rules="inputRules"
                  autofocus
                >
                </v-text-field>
                <v-text-field
                  label="Password"
                  v-model="user.password"
                  :rules="inputRules"
                  type="password"
                >
                </v-text-field>
                <v-text-field
                  label="Confirm password"
                  type="password"
                >
                </v-text-field>
              </v-form>
            </v-card>
            <v-btn
              color="primary"
              @click="stepperCurrent = 2; validation = false"
              :disabled="!validation"
            >Continue
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card
              class="register__stepper-items__card"
              height="190px"
            >
              <v-form v-model="validation">
                <v-text-field
                  label="Username"
                  v-model="user.username"
                  :rules="inputRules"
                  autofocus
                >
                </v-text-field>
                <v-text-field
                  label="First name"
                  v-model="user.first_name"
                  :rules="inputRules"
                >
                </v-text-field>
                <v-text-field
                  label="Last name"
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
            >Continue
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card
              class="register__stepper-items__card"
              height="160px"
            >
              <p class="register__role-description">{{roleDescription}}</p>
              <div v-if="user.rights === 'basic'">
                <div @click="becomeArtist" class="register__become-artist-button">I want to be an Artist!</div>
                <p class="register__role-description">{{descriptionList.artist}}</p>
              </div>
            </v-card>
            <v-btn
              color="primary"
              @click="addNewUser"
            >Create account
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>

      </v-stepper>
    </div>

  </v-app>
</template>

<script>
  import FormButton from '../formComponents/FormButton';
  import {registerUser} from "../../api/auth";
  import eventBus from '../../eventBus';
  import AppHeader from '../AppHeader';

  export default {
    name: "register",
    components: {
      'form-button': FormButton,
      'app-header': AppHeader
    },
    data() {
      return {
        stepperCurrent: 0,
        user: {
          rights: 'basic'
        },
        validation: false,
        descriptionList: {
          basic: 'As a basic user, you will be able to upload photo with request and vote for artist sketches!',
          artist: 'You will have all basic user functions plus ability to upload your sketch'
        },
        inputRules: [
          v => !!v || 'Field is required'
        ],
        registerResponse: null,
        registerError: null
      }
    },
    created() {
      eventBus.$on('registerResponse', (response) => {
        // alert(response);
        this.registerResponse = {
          boolean: true,
          text: "success!",
        };
        setTimeout(() => {
          this.registerResponse = null
        }, 3000);
      });

      eventBus.$on('registerError', (error) => {
        // alert(error);
        this.registerError = {
          boolean: true,
          text: "an error occured!",
        };
        setTimeout(() => {
          this.registerError = null
        }, 3000);
      });
    },
    computed: {
      roleDescription() {
        if (this.user.rights === 'basic') {
          return this.descriptionList.basic;
        } else if (this.user.rights === 'artist') {
          return this.descriptionList.artist;
        }
      }
    },
    methods: {
      becomeArtist: function () {
        this.user.rights = 'artist';
      },

      addNewUser: function () {
        registerUser(this.user);
      },

      backToStep(stepToBack) {
        if (this.stepperCurrent > stepToBack) {
          this.stepperCurrent = stepToBack
        }
      }
    }
  }
</script>

<style scoped>
  .register {
    position: relative;
  }

  .register__alert {
    position: absolute;
    width: 100%;
    z-index: 100;
  }

  .register__stepper {
    width: 400px;
    margin: auto;
    border-radius: 3px;
  }

  .register__stepper-step {
    font-size: 14px;
    cursor: pointer;
  }

  .register__stepper-items__card {
    box-shadow: none;
  }

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
