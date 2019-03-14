<template>
  <div class="user-profile">

    <app-header></app-header>

    <message-opened
      class="user-profile__message-opened"
      v-if="this.openedMessageIfTrigger"
      :message=this.openedMessage
      v-bind:class="{'user-profile__opened-message__opened': this.openedMessageClassTrigger}"
    ></message-opened>

    <div
      class="user-profile__message-opened__shadow"
      @click="closeMessage()"
      v-bind:class="{'user-profile__opened-message__opened': this.openedMessageClassTrigger}"
    ></div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="user-profile__info-wrap">
            <div class="user-profile__info user-profile__info__username">{{this.user.username}}</div>
            <div class="user-profile__info user-profile__info__full-name">{{this.user.first_name + " " +
              this.user.last_name}}
            </div>
            <div class="user-profile__info user-profile__info__rights">{{this.user.rights}}</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="user-profile__user-pic">
            <img class="u ser-profile__user-pic__img" src="../../assets/img/about_photo1.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-8">
          <div class="user-profile__message-box">
            <message
              class="user-profile__message-item"
              v-for="(message, index) in messageList"
              :message=message
              @click.native="openMessage(index)"
            >
            </message>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../AppHeader'
  import Message from './UserMessage'
  import MessageOpened from './UserMessageOpened'
  import eventBus from '../../eventBus'

  export default {
    name: "UserProfile",
    components: {
      "app-header": Header,
      "message": Message,
      "message-opened": MessageOpened
    },
    data() {
      return {
        user: null,
        messageList: [],
        openedMessageIfTrigger: false,
        openedMessage: {},
        openedMessageClassTrigger: false
      }
    },
    created() {
      this.user = this.$store.getters.getUser;
      eventBus.$on('checkUser', () => {
        // this.checkUser();
        this.user = this.$store.getters.getUser;
      });

      // this.messageList = this.$store.getters.getAllMessages;
      this.messageList.push({
        title: 'default_title',
        subtitle: 'default_address',
        body: 'lorem ipsum dolor sit amet'
      });
      this.messageList.push({
        title: 'default_title',
        subtitle: 'default_address',
        body: 'lorem ipsum dolor sit amet'
      });
    },
    methods: {
      openMessage(mesIndex) {
        this.openedMessageIfTrigger = true;
        this.openedMessage = this.messageList[mesIndex];
        this.openedMessageClassTrigger = true;
      },
      closeMessage() {
        this.openedMessageIfTrigger = false;
        this.openedMessageClassTrigger = false;
      }
    }
  }
</script>

<style scoped>
  .user-profile {
    margin-top: 80px;
  }

  .user-profile__message-opened {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  .user-profile__message-opened__shadow {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 90;
    opacity: 0;
    pointer-events: none;
  }

  .user-profile__opened-message__opened.user-profile__message-opened__shadow {
    opacity: 1;
    pointer-events: auto;
  }

  .user-profile__info-wrap {
    margin: 30px 0 0 20px;
  }

  .user-profile__info {
    font-size: 24px;
  }

  .user-profile__info__rights, .user-profile__info__username {
    font-size: 20px;
  }

  .user-profile__user-pic {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  .user-profile__user-pic__img {
    display: block;
  }

  .user-profile__message-box {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    border: 1px solid #eee;
    overflow-y: scroll;
  }
</style>
