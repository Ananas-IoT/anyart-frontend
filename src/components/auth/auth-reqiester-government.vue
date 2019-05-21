<template>
  <v-app>
    <div class="auth-wrap gov">
      <app-header></app-header>
      <v-stepper
        class="stepper"
        v-model="stepperCurrent"
        :alt-labels="true"
      >

        <v-alert
          class="alert"
          v-if="this.error"
          :value="true"
          type="error"
        >{{this.error}}
        </v-alert>

        <v-stepper-header class="stepper-header">
          <v-stepper-step
            class="stepper-step"
            :complete="stepperCurrent > 1"
            step="1"
            @click="backToStep(1)"
          >{{this.$ml.get('auth-register-stepper')[0]}}
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            class="stepper-step"
            :complete="stepperCurrent > 2"
            step="2"
            @click="backToStep(2)"
          >{{this.$ml.get('auth-register-stepper')[1]}}
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            class="stepper-step"
            :complete="stepperCurrent > 3"
            step="3"
          >{{this.$ml.get('auth-register-stepper')[2]}}
          </v-stepper-step>
        </v-stepper-header>

        <h2 class="form__title">Create government account</h2>
        <p class="form__subtitle">to approve sketches</p>

        <v-stepper-items>
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
                ></v-text-field>
                <v-text-field
                  :label="$ml.get('auth-password')"
                  v-model="user.password"
                  :rules="inputRules"
                  type="password"
                ></v-text-field>
                <v-text-field
                  :label="$ml.get('auth-confirm-password')"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card>
            <v-btn
              color="primary"
              @click="stepperCurrent = 2; validation = false"
              :disabled="!validation"
            >{{$ml.get('auth-register-stepper')[3]}}
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="stepper-items__card"
              height="160px"
            >
              <v-form v-model="validation">
                <v-select
                  v-model="user.position"
                  :items="rightsList"
                  label="Who you are?"
                  :rules="inputRules"
                  solo>
                </v-select>
              </v-form>
              <!--<p class="gov__select-rights__info">{{}}</p>-->
              <p class="gov__select-rights__warning">Choose wisely - we will check all the information</p>
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
              height="190px"
            >
              <v-form v-model="validation">
                <v-text-field
                  label="Position"
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
              @click="addNewUser"
              :disabled="!validation"
              v-text="$ml.get('auth-register-title')"
            ></v-btn>
          </v-stepper-content>

        </v-stepper-items>
      </v-stepper>
    </div>
  </v-app>
</template>

<script>
  import {registerUser} from "../../api/auth";
  import AppHeader from '../the-header';
  import eventBus from '../../eventBus';
  import {serverErrorsMixin} from '../../mixins/serverErrorsMixin';

  export default {
    name: "registerGovernment",
    components: {
      'app-header': AppHeader
    },
    mixins: [serverErrorsMixin],
    data() {
      return {
        stepperCurrent: 0,
        user: {
          rights: 'gov'
        },
        validation: false,
        posSelected: '',
        inputRules: [
          v => !!v || 'Field is required'
        ],
        rightsList: ['Art expert', 'Administration', 'OSBB'],
      }
    },
    created() {},
    computed: {},
    methods: {
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
          this.stepperCurrent = stepToBack
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

  .gov .form-wrap {
    width: 800px;
  }

  .gov__select-rights__info {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 49%;
    height: 220px;
    /*border: 1px solid red;*/
  }

  .gov__select-rights__warning {
    vertical-align: bottom;
    position: absolute;
    bottom: 20px;
    left: 50%;
    font-size: 14px;
    transform: translateX(-50%);
  }
</style>
