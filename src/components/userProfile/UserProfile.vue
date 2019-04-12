<template>
  <v-app>
    <div class="user-profile">

      <app-header></app-header>

      <v-dialog
        class="user-profile__delete-dialog"
        v-model="deleteDialogTriggerModel"
        width="300">
        <v-card>
          <v-card-title class="user-profile__delete-dialog__title">Attention!</v-card-title>
          <v-card-text  class="user-profile__delete-dialog__text">
            Are you sure you want to delete the Request?
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="user-profile__delete-dialog__btn" color="error" @click="">Yes, delete it!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--<message-opened-->
      <!--class="user-profile__message-opened"-->
      <!--v-if="this.openedMessageTriggerIf"-->
      <!--:message=this.openedMessage-->
      <!--v-bind:class="{'user-profile__opened-message__opened': this.openedMessageClassTrigger}"-->
      <!--&gt;</message-opened>-->

      <!--<div-->
      <!--class="user-profile__message-opened__shadow"-->
      <!--@click="closeMessage()"-->
      <!--v-bind:class="{'user-profile__opened-message__opened': this.openedMessageClassTrigger}"-->
      <!--&gt;</div>-->

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="user-profile__content elevation-3 user-profile__bg-wrap custom-scrollbar">

              <div class="user-profile__info-wrap">
                <h4 class="user-profile__header">My Profile:</h4>
                <div class="user-profile__info__txt">
                  <div class="user-profile__info user-profile__info__username">{{this.user.username}}</div>
                  <div class="user-profile__info user-profile__info__full-name">{{this.user.first_name + " " +
                    this.user.last_name}}
                  </div>
                  <div class="user-profile__info user-profile__info__rights">{{this.user.rights}}</div>
                </div>

                <div class="user-profile__info__user-pic elevation-3">
                  <img class="u ser-profile__user-pic__img" src="../../assets/img/about_photo1.jpg" alt="">
                </div>
              </div>

              <v-divider class="user-profile__divider"></v-divider>

              <v-tabs
                class="user-profile__tabs"
                v-if="user.rights === 'artist'"
                slider-color="primary"
                color="#eee"
                fixed-tabs>
                <v-tab
                  v-for="n in tabList.length"
                  :key="n"
                >
                  {{tabList[n - 1]}}
                </v-tab>

                <v-tab-item>
                  <div class="user-profile__request-wrap">
                    <request-item
                      class="user-profile__request-item"
                      v-for="(loopedRequest, index) in requestList"
                      :request=loopedRequest
                      :key=index
                      :index=index
                      v-on:deleteRequest="openDeleteDialog"
                    ></request-item>
                  </div>
                </v-tab-item>


                <v-tab-item>
                  <div class="user-profile__request-wrap">
                    <request-item
                      class="user-profile__request-item"
                      v-for="(loopedRequest, index) in requestList"
                      :request=loopedRequest
                      :key=index
                      :index=index
                      v-on:deleteRequest="openDeleteDialog"
                    ></request-item>
                  </div>
                </v-tab-item>
              </v-tabs>

              <div class="user-profile__request-wrap"  v-if="user.rights === !'artist'">
                <h4 class="user-profile__header">My Requests:</h4>
                <request-item
                  class="user-profile__request-item"
                  v-for="(loopedRequest, index) in requestList"
                  :request=loopedRequest
                  :key=index
                  :index=index
                  v-on:deleteRequest="openDeleteDialog"
                ></request-item>
              </div>

              <v-divider class="user-profile__divider"></v-divider>

              <div class="user-profile__message-box">
                <message
                  class="user-profile__message-item"
                  v-for="(message, index) in messageList"
                  :key=index
                  :message=message
                  @click.native="openMessage(index)"
                >
                </message>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
  import Header from '../AppHeader'
  import Message from './UserMessage'
  import MessageOpened from './UserMessageOpened'
  import eventBus from '../../eventBus'
  // import RequestItem from '../map/listItems/RequestListItem'
  import RequestItem from './UserRequest'
  import {getAllRequests} from '../../api/mapRequests'

  export default {
    name: "UserProfile",
    components: {
      "app-header": Header,
      "message": Message,
      "message-opened": MessageOpened,
      "request-item": RequestItem
    },
    data() {
      return {
        user: null,
        requestList: [],
        messageList: [],
        openedMessageTriggerIf: false,
        openedMessage: {},
        openedMessageClassTrigger: false,
        tabList: ['My Requests', 'My Sketches'],
        deleteDialogTriggerModel: false
      }
    },
    created() {
      this.user = this.$store.getters.getUser;
      eventBus.$on('checkUser', () => {
        // this.checkUser();
        this.user = this.$store.getters.getUser;
      });

      this.requestList = this.$store.getters.getAllRequests;
      if (this.requestList.length === 0) {
        getAllRequests();
      }

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
        this.openedMessageTriggerIf = true;
        this.openedMessage = this.messageList[mesIndex];
        this.openedMessageClassTrigger = true;
      },
      closeMessage() {
        this.openedMessageTriggerIf = false;
        this.openedMessageClassTrigger = false;
      },
      openDeleteDialog(index) {
        this.deleteDialogTriggerModel = true;
      }
    }
  }
</script>

<style scoped>
  .user-profile {
    position: relative;
    height: 100vh;
    background: url("../../assets/img/main_bg1.jpg");
    overflow: hidden;
  }

  .user-profile:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5) no-repeat;
    z-index: 0;
  }

  .user-profile__delete-dialog__title {
    text-align: center;
    display: block;
    text-transform: uppercase;
    font: 20px "PT Sans Bold";
  }

  .user-profile__delete-dialog__text {
    font-size: 16px;
  }

  .user-profile__delete-dialog__btn {
    margin: 5px auto;
  }

  .user-profile__bg-wrap {
    height: calc(100vh - 20px);
    padding-top: 80px;
    background: #fafafa;
    overflow-y: scroll;
    overflow-x: hidden;
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
    text-align: center;
    margin: auto;
  }

  .user-profile__header {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-family: "PT Sans Bold";
  }

  .user-profile__info__txt {
    vertical-align: top;
    text-align: left;
    display: inline-block;
    width: 49%;
    margin: 30px 0 0 20px;
  }

  .user-profile__info {
    font-size: 24px;
  }

  .user-profile__info__rights, .user-profile__info__username {
    font-size: 20px;
  }

  .user-profile__info__user-pic {
    display: inline-block;
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  .user-profile__divider {
    width: 60%;
    margin: 40px auto 30px;
  }

  .user-profile__tabs {
    font-family: "PT Sans Bold";
  }

  .user-profile__request-wrap {
    position: relative;
    width: 70%;
    margin: 20px auto 0;
  }

  .user-profile__message-box {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    border: 1px solid #eee;
    overflow-y: scroll;
  }
</style>
