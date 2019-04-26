<template>
  <v-app>
    <section id="contacts" class="contact-us-section">
      <div class="content bg-transparent">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="contact-us-section__title">Напишіть нам!</h2>
              <p class="contact-us-section__description">Якщо у вас є якісь пропозиції,
                ідеї чи думки щодо покращення сервісу, напишіть нам та допоможіть зробити наш проект кращим!</p>
            </div>
            <div class="col-md-8">
              <v-card class="contact-us-section__from-wrap bg-transparent">
                <v-form class="contact-us-section__form" v-model="validation">
                  <v-text-field
                    class="contact-us__message-author"
                    label="How can we contact you?"
                    v-model="message.contact"
                    solo
                  >

                  </v-text-field>
                  <v-textarea
                    class="contact-us-section__message-body"
                    label="Your text.."
                    v-model="message.body"
                    :rows="5"
                    :rules="inputRules"
                    solo
                  >

                  </v-textarea>
                  <v-btn
                    class="contact-us-section__message-button"
                    color="primary"
                    :disabled="!validation"
                    @click="processMessage"
                  >Send</v-btn>
                </v-form>
              </v-card>
              <v-card class="contact-us-section__email-wrap elevation-6">
                <v-card-text>Або напишіть нам напряму: <a class="contact-us-section__email-link" href="mailto: nsblnr@gmail.com">nsblnr@gmail.com</a></v-card-text>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-app>
</template>

<script>
  import {sendMessage} from '../../api/landing'
  import eventBus from '../../eventBus'

  export default {
    name: "landing-contact-us",
    data() {
      return {
        message: {
          contact: null,
          body: ''
        },
        validation: false,
        inputRules: [
          v => !!v || 'Field is required'
        ],
        errorMessage: ''
      }
    },
    methods: {
      processMessage() {
        return new Promise((resolve, reject) => {
          sendMessage(this.message);
        }).then(
          response => {
            self.message.contact = '';
            self.message.body = '';
            eventBus.$emit('contactMessage', 'success');
          },
          error => {
            self.errorMessage = error;
            eventBus.$emit('contactMessage', error);
          }
        );
      }
    }
  }
</script>

<style scoped>
  .contact-us-section {
    text-align: center;
    position: relative;
    background: #fff5f5;
  }

  .contact-us-section:before {
    content: '';
    position: absolute;
    top: 80px;
    right: 0;
    width: 750px;
    height: 100%;
    background: url("../.././assets/img/paint-bg/7.png") no-repeat;
    background-size: contain;
    opacity: 0.7;
    pointer-events: none;
  }

  .contact-us-section__title {

  }

  .contact-us-section__description {
    text-align: left;
    width: 50%;
    margin: 0 0 30px 30px;
    font-size: 18px;
  }

  .contact-us-section__from-wrap {
    position: relative;
    text-align: left;
    padding: 20px;
    background: transparent;
  }

  .contact-us-section__email-wrap {
    position: absolute;
    bottom: -20px;
    right: -30px;
    width: 240px;
    background: #d67d8e;
  }

  .contact-us-section__email-link {
    color: #000;
    border-bottom: 1px solid #000;
  }

  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width : 1200px) {}

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .contact-us-section:before {
      opacity: 0.4;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .contact-us-section__description {
      width: 80%;
      margin: auto;
    }

    .contact-us-section:before {
      top: 200px;
      right: 0;
      width: 750px;
      height: 100%;
      opacity: 0.4;
    }

    .contact-us-section__email-wrap {
      bottom: -40px;
      right: 30px;
      background: #d67d8e;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 576px) {
    .contact-us-section__description {
      width: 90%;
      margin: 0 auto 30px;
    }

    .contact-us-section:before {
      top: 250px;
      width: 450px;
      opacity: 0.5;
    }

    .contact-us-section__message-button {
      width: 100%;
      padding: 0;
      margin: 0 0 10px;
    }

    .contact-us-section__email-wrap {
      bottom: -55px;
      right: 50%;
      background: #d67d8e;
      transform: translateX(50%);
    }
  }
</style>
