<template>
  <v-app>
    <v-card class="user-message elevation-3">
      <v-card-title  class="user-message__title-wrap"
                     v-bind:class=computeTitleTypeClass>
        <!--v-card-title draws elements inline, no matter how much are they-->
        <!--div without class needs for v-card-title-->
        <div class="width-100">
          <div class="user-message__title">{{this.message.title}}</div>
          <div class="user-message__subtitle">{{this.message.subtitle}} <span class="user-message__date">01.01.1974</span></div>
        </div>
      </v-card-title>
      <v-card-text class="user-message__body">{{this.message.body | textLength(340)}}</v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    name: "UserMessage",
    props: {
      message: {
        type: Object,
        default: function () {
          return {
            title: 'default_ootitle',
            subtitle: 'default_ooaddress',
            body: 'lorem ipsum dolor sit amet'
          }
        }
      }
    },
    created() {},
    computed: {
      computeTitleTypeClass() {
        if(this.message.type === 'success') {
          return 'user-message__success-title'
        } else if(this.message.type === 'error') {
          return 'user-message__error-title'
        }
      }
    }
  }
</script>

<style scoped>
  .user-message {
    max-height: 200px;
    margin: 5px;
    cursor: pointer;
    /*border-bottom: 1px solid #e0e0e0;*/
  }

  .user-message__title-wrap {
    width: 100%;
    margin: 0;
    background: #eee;
  }

  .user-message__success-title {
    background: rgba(76, 175, 80, 0.5);
  }

  .user-message__error-title {
    background: rgba(255, 82, 82, 0.50);
  }

  .width-100 {
    width: 100%;
  }

  .user-message__title {
    display: block;
    font-size: 20px;
    font-family: "PT Sans Bold";
  }

  .user-message__subtitle {
    display: block;
  }

  .user-message__date {
    float: right;
    margin-top: 2px;
    font-size: 12px;
  }
</style>
