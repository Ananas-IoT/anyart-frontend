<template>
  <v-app>
    <v-card class="user-message__opened">
      <v-card-title>
        <div class="user-message__opened__title-wrap">
          <div class="user-message__opened__title">{{this.message.title}}</div>
          <div class="user-message__opened__subtitle">{{this.message.subtitle}}</div>
        </div>
      </v-card-title>
      <v-card-text class="user-message__opened__body">{{this.message.body}}</v-card-text>
      <div class="user-message__opened__date">01.01.1974</div>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    name: "UserMessageOpened",
    props: {
      message: {
        default: function () {
          return {
            title: 'default_title',
            subtitle: 'default_address',
            body: 'lorem ipsum dolor sit amet'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .user-message__opened {
    width: 100%;
    min-height: 250px;
    max-height: 600px;
    padding: 20px 20px 30px;
    background: #eee;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  .user-message__opened__title-wrap {
    width: 100%;
  }

  .user-message__opened__title {
    text-align: center;
    /*width: 100%;*/
    padding-top: 0;
    margin-bottom: 5px;
    font-size: 20px;
    font-family: "PT Sans Bold";
    text-transform: uppercase;
  }

  .user-message__opened__subtitle {
    font-size: 16px;
  }

  .user-message__opened__body {
    text-align: justify;
  }

  .user-message__opened__date {
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-size: 14px;
    color: #696969;
  }

</style>
