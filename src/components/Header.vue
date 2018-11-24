<template>
  <header class="scrolled">
    <div class="header-bg"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <a data-scroll-to="#main" class="logo">
            <img src="../assets/landing/img/logo_small_white.png" alt="">
            <img src="../assets/landing/img/logo_small.png" alt="">
          </a>
        </div>
        <div class="col-lg-7">
          <nav>
            <ul>
              <li>
                <router-link to="/">Головна</router-link>
              </li>
              <li><a data-scroll-to="#how-to">Як це працює?</a></li>
              <li><a data-scroll-to="#about">Про нас</a></li>
              <li><a data-scroll-to="#gallery">Галерея</a></li>
              <li><a data-scroll-to="#footer">Контакти</a></li>
              <li>
                <router-link to="/map">Карта</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-2">
          <div class="user-block">
            <div v-if="this.isAuth" class="user-info">
              <router-link to="/auth/signup">{{user.surname}}</router-link>
              <div>{{user.role}}</div>
            </div>
            <div v-else class="registration">
              <router-link to="/auth/signup">Register</router-link>
              <router-link to="/auth/signin">or Sign In</router-link>
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
        user: {}
      }
    },
    created() {
      this.isAuth = this.$store.getters.isAuthenticated;
      if (this.isAuth) {
        this.user = this.$store.getters.getUser;
      }
    },
  }
</script>

<style scoped>
  @import "../assets/landing/css/header.css";
</style>
