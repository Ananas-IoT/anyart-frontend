<template>
  <header class="header header__scrolled">
    <div class="header-bg"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <a data-scroll-to="#main" class="header__logo">
            <img class="header__logo__white" src="../assets/img/logo_small_white.png" alt="">
            <img class="header__logo__black" src="../assets/img/logo_small.png" alt="">
          </a>
          <a @click="navOpened = !navOpened" class="d-lg-none header__burger">
            <img class="header__menu__white" src="../assets/img/burger-menu-white.png" alt="">
            <img class="header__menu__black" src="../assets/img/burger-menu-black.png" alt="">
          </a>
        </div>
        <div class="col-lg-7 no-gutters">
          <nav class="nav" v-bind:class="{nav__opened: navOpened}">
            <ul class="nav__item-list">
              <li class="nav__item">
                <router-link to="/" data-scroll-to="#main" @click="navOpened = false">Головна</router-link>
              </li>
              <li class="nav__item"><router-link to="/#how-to" data-scroll-to="#how-to" @click="navOpened = false">Як це працює?</router-link></li>
              <li class="nav__item"><router-link to="/#about" data-scroll-to="#about" @click="navOpened = false">Про нас</router-link></li>
              <li class="nav__item"><router-link to="/#gallery" data-scroll-to="#gallery" @click="navOpened = false">Галерея</router-link></li>
              <li class="nav__item"><router-link to="/#footer" data-scroll-to="#footer"@click="navOpened = false">Контакти</router-link></li>
              <li class="nav__item">
                <router-link to="/map" v-if="window.width >= 1280">Карта</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-2 d-none d-lg-block">
          <div class="user-block">
            <div v-if="this.isAuth" class="user-block__info">
              <router-link class="user-block__name" to="/user">{{userFullName}}</router-link>
              <div><router-link to="/auth/register">Log out</router-link></div>
            </div>
            <div v-else class="user-block__registration">
              <router-link to="/auth/register">Register</router-link>
              <router-link to="/auth/login">or Login</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import eventBus from '../eventBus'

  export default {
    name: "Header",
    props: {
      window: {
        type: Object,
        default: function () {
          return {
            width: 1920,
            height:1080
          }
        }
      }
    },
    data() {
      return {
        user: {},
        userFullName: '',
        isAuth: false,
        navOpened: false
      }
    },
    created() {
      this.checkUser();
      eventBus.$on('checkUser', () => {
        this.checkUser();
      });
    },
    methods: {
      checkUser() {
        this.isAuth = this.$store.getters.isAuthenticated;
        if (this.isAuth) {
          this.user = this.$store.getters.getUser;
        }
        this.userFullName = this.user.first_name + ' ' + this.user.last_name;
      },
    }
  }
</script>

<style scoped>
  .header {
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
    box-shadow: rgba(0, 0, 0, 0.3) 3px 0 15px;
    z-index: 100;
  }

  a, a:hover {
    color: #fff;
  }

  .header-bg {
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    background: #fff;
    transition: 0.3s;
  }

  .header__scrolled .header-bg {
    transform: translateY(0);
  }

  .header__logo {
    text-align: left;
    display: block;
    width: 200px;
    margin-top: 10px;
    margin-left: 10px;
    position: relative;
    cursor: pointer;
  }

  .header__logo img {
    transition: 0.3s;
  }

  .header__logo .header__logo__black {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .header__scrolled .header__logo__black {
    opacity: 0;
  }

  .header__scrolled .header__logo__black {
    opacity: 1;
  }


  .header__burger {
    position: absolute;
    top: 25px;
    right: 20px;
    width: 26px;
    height: 26px;
  }

  .header__burger .header__menu__black {
    position: absolute;
    top: 0;
    opacity: 0;
  }

  .header__scrolled .header__menu__black {
    opacity: 0;
  }

  .header__scrolled .header__menu__black {
    opacity: 1;
  }

  .nav {
    text-align: center;
  }

  .nav__item {
    display: inline-block;
  }

  .nav__item a {
    display: block;
    width: 110px;
    padding: 20px 0 23px;
    font-size: 17px;
    font-family: "PT Sans";
    transition: 0.3s;
    position: relative;
    cursor: pointer;
  }

  .nav__item a:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 3px;
    transform: scaleX(0);
    transition: 0.3s;
  }

  .nav__item a:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 3px;
    transform: scaleX(0);
    transition: 0.3s;
  }

  .nav__item a:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 3px;
    background: #770d85;
    transform: scaleX(0);
    transition: 0.3s;
  }

  .nav__item:nth-child(2) a:before {
    background: #7d42b9;
  }

  .nav__item:nth-child(3) a:before {
    background: #1ea3a4;
  }

  .nav__item:nth-child(4) a:before {
    background: #27b46b;
  }

  .nav__item:nth-child(5) a:before {
    background: #80b317;
  }

  .nav__item:nth-child(6) a:before {
    background: #ac3f3d;
  }

  .header__scrolled .nav__item a, .header__scrolled .nav__item a:hover {
    color: #000;
  }

  .nav__item a:hover {
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 15px;
  }

  .nav__item a:hover:before {
    transform: scaleX(1);
  }

  .user-block {
    text-align: right;
    margin: 10px 10px 0;
    color: #fff;
  }

  .user-block__name {
    font-size: 16px;
    /*font-family: "PT Sans Bold";*/
  }

  .user-block__registration a {
    font-size: 16px;
    display: block;
  }

  .user-block a:hover {
    text-decoration: underline;
  }

  .header__scrolled .user-block a {
    color: #000;
  }

  .header__scrolled .user-block div {
    color: #000;
  }

  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width: 1200px) {
    .nav__item a {
      width: 103px;
      font-size: 16px;
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width: 992px) {
    .header__logo {
      width: 120px;
      margin: 20px auto 0;
    }

    .nav {
      position: absolute;
      width: 100%;
      opacity: 0;
      pointer-events: none;
      transition: 0.2s;
      background: #fff;
    }

    .nav__opened {
      opacity: 1;
      pointer-events: auto;
    }

    .nav__item {
      user-select: none;
    }

    .nav__item a, .nav__item a:hover {
      color: #000;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .nav {
      box-shadow: rgba(0, 0, 0, 0.4) 0 4px 10px -2px;
    }

    .nav__item {
      display: block;
    }

    .nav__item a {
      text-align: left;
      width: 100%;
      padding: 8px 0 8px 15px;
      font-size: 18px;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {

  }
</style>
