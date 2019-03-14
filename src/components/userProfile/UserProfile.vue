<template>
  <div class="user-profile">
    <app-header></app-header>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="user-profile__info-wrap">
            <div class="user-profile__info user-profile__info__username">{{this.user.username}}</div>
            <div class="user-profile__info user-profile__info__full-name">{{this.user.first_name + " " + this.user.last_name}}</div>
            <div class="user-profile__info user-profile__info__rights">{{this.user.rights}}</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="user-profile__user-pic">
            <img class="user-profile__user-pic__img" src="../../assets/img/about_photo1.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-8">
          <div class="user-profile__message-box">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../AppHeader'

  export default {
    name: "UserProfile",
    components: {
      "app-header": Header
    },
    data() {
      return {
        user: null
      }
    },
    created() {
      this.user = this.$store.getters.getUser;
    }
  }
</script>

<style scoped>
  .user-profile {
    margin-top: 80px;
  }

  .user-profile__info-wrap {
    margin-top: 30px;
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
    overflow: hidden;
  }
</style>
