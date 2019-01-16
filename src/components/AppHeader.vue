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
        </div>
        <div class="col-lg-7">
          <nav class="nav">
            <ul>
              <li class="nav__item">
                <router-link to="/">Головна</router-link>
              </li>
              <li class="nav__item"><a data-scroll-to="#how-to">Як це працює?</a></li>
              <li class="nav__item"><a data-scroll-to="#about">Про нас</a></li>
              <li class="nav__item"><a data-scroll-to="#gallery">Галерея</a></li>
              <li class="nav__item"><a data-scroll-to="#footer">Контакти</a></li>
              <li class="nav__item">
                <router-link to="/map">Карта</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-2">
          <div class="user-block">
            <div v-if="this.isAuth" class="user-block__info">
              <router-link to="/auth/register">{{userFullName}}</router-link>
              <div>{{user.role}}</div>
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
  export default {
    name: "Header",
    data() {
      return {
        user: {},
        userFullName: ''
      }
    },
    created() {
      this.isAuth = this.$store.getters.isAuthenticated;
      if (this.isAuth) {
        this.user = this.$store.getters.getUser;
      }
      this.userFullName = this.user.first_name + ' ' + this.user.last_name;
    },
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
    z-index: 1000;
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
    opacity: 0;
  }

  .header__scrolled .header__logo__black {
    opacity: 0;
  }

  .header__scrolled .header__logo__black {
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

  .user-block__registration a {
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

</style>
