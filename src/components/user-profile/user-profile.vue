<template>
  <v-app>
    <div class="user-profile">

      <app-header></app-header>

      <v-dialog
        class="user-profile__delete-dialog"
        v-model="deleteDialog.triggerModel"
        width="300">
        <v-card>
          <v-card-title class="user-profile__delete-dialog__title">Attention!</v-card-title>
          <v-card-text class="user-profile__delete-dialog__text">
            Are you sure you want to delete the <span class="user-profile__delete-dialog__type">{{this.deleteDialog.type}}</span>,
            index: {{this.deleteDialog.deleteIndex}}?
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="user-profile__delete-dialog__btn" color="error" @click="">Yes, delete it!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        class="custom-scrollbar"
        v-model="messageOpenedTriggerModel"
        max-width="500">
        <message-opened
          class="user-profile__message-opened"
          :message=this.openedMessage
        ></message-opened>
      </v-dialog>

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

                <!--ARTIST TABS: REQUEST-->
                <v-tab-item>
                  <div class="user-profile__tab-item-wrap">
                    <request-item
                      class="user-profile__tab-item"
                      v-for="(loopedRequest, index) in requestList"
                      :request=loopedRequest
                      :key=index
                      :index=index
                      v-on:deleteRequest="openDeleteDialog"
                    ></request-item>
                  </div>
                </v-tab-item>

                <!--ARTIST TABS: SKETCH-->
                <v-tab-item>
                  <div class="user-profile__tab-item-wrap">
                    <sketch-item
                      class="user-profile__tab-item"
                      v-for="(loopedSketch, index) in sketchList"
                      :sketch=loopedSketch
                      :key=index
                      :index=index
                      v-on:deleteSketch="openDeleteDialog"
                    ></sketch-item>
                  </div>
                </v-tab-item>
              </v-tabs>

              <!--BASIC USER: REQUESTS-->
              <div class="user-profile__tab-item-wrap" v-if="user.rights === !'artist'">
                <h4 class="user-profile__header">My Requests:</h4>
                <request-item
                  class="user-profile__tab-item"
                  v-for="(loopedRequest, index) in requestList"
                  :request=loopedRequest
                  :key=index
                  :index=index
                  v-on:deleteRequest="openDeleteDialog"
                ></request-item>
              </div>

              <v-divider class="user-profile__divider"></v-divider>
              <div class="user-profile__message-wrap">
                <h4 class="user-profile__header">My Messages:</h4>
                <div class="inner-shadow">
                  <div class="user-profile__message-box custom-scrollbar">
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
      </div>
    </div>
  </v-app>
</template>

<script>
  import Header from '../the-header'
  import Message from './user-profile-message-item'
  import MessageOpened from './user-profile-message-item-opened'
  import eventBus from '../../eventBus'
  // import RequestItem from '../map/list-items/RequestListItem'
  import RequestItem from './user-profile-request'
  import SketchItem from './user-profile-sketch'
  import {getAllRequests} from '../../api/mapRequests'
  import {getSketchesById} from "../../api/mapSketches"

  export default {
    name: "UserProfile",
    components: {
      "app-header": Header,
      "message": Message,
      "message-opened": MessageOpened,
      "request-item": RequestItem,
      "sketch-item": SketchItem
    },
    data() {
      return {
        user: null,
        requestList: [],
        sketchList: [],
        messageList: [],
        messageOpenedTriggerModel: false,
        openedMessage: {},
        tabList: ['My Requests', 'My Sketches'],
        deleteDialog: {
          triggerModel: false
        }
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

      // gets all sketches
      getSketchesById(0, callback);
      var self = this;

      function callback(sketchList) {
        self.sketchList = sketchList;
      }

      // this.messageList = this.$store.getters.getAllMessages;
      this.messageList.push({
        title: 'default_title',
        subtitle: 'default_address',
        body: 'lorem ipsum dolor sit amet',
        type: 'success'
      });
      this.messageList.push({
        title: 'default_title',
        subtitle: 'default_address',
        body: 'lorem ipsum dolor sit amet',
        type: 'error'
      });
    },
    methods: {
      openMessage(mesIndex) {
        this.openedMessage = this.messageList[mesIndex];
        this.messageOpenedTriggerModel = true;
      },
      closeMessage() {
        this.openedMessageTriggerIf = false;
        this.openedMessageClassTrigger = false;
      },
      openDeleteDialog(index, type) {
        this.deleteDialog.triggerModel = true;
        this.deleteDialog.type = type;
        this.deleteDialog.deleteIndex = index;
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

  .user-profile__delete-dialog__type {
    text-transform: uppercase;
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

  .user-profile__tab-item-wrap {
    position: relative;
    width: 70%;
    margin: 20px auto 0;
  }

  .user-profile__message-box {
    position: relative;
    width: 100%;
    height: 300px;
    margin: 20px 0 40px;
    border: 1px solid #eee;
    overflow-y: scroll;
  }
</style>
