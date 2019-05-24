<template>
  <v-footer
    id="footer"
    class="footer"
    height="auto"
  >

    <v-card
      class="flex"
      flat
      teal
    >
      <v-card-text class="footer__wrap justify-center">

        <div class="footer__social-wrap">
          <div class="footer__social-follow"  v-text="$ml.get('landing-footer-follow')"></div>
          <div class="footer__social-item-wrap">
            <a
              class="footer__social-item"
              href="https://facebook.com"
              target="_blank">
              <div class="footer-social-item-img-wrap">
                <img class="footer__social-item-img" :src="contactImages.facebook" alt="">
              </div>
              <span class="footer__social-item-text d-none d-sm-inline-block">Facebook</span>
            </a>
          </div>
          <div class="footer__social-item-wrap">
            <a
              class="footer__social-item footer__social-item__instagram"
              href="https://instagram.com/anyart_lviv"
              target="_blank">
              <div class="footer-social-item-img-wrap">
                <img class="footer__social-item-img" :src="contactImages.instagram" alt="">
              </div>
              <span class="footer__social-item-text d-none d-sm-inline-block">Instagram</span>
            </a>
          </div>
        </div>

        <div class="footer__copyright">
          &copy;2019 — <strong>AnyArt</strong>
        </div>
        <div class="footer__language">
          <span @click="changeLanguage('ukrainian')"><img class="footer__language__img" src="../../assets/img/footer/flag-ua.png" alt=""></span>
          <span @click="changeLanguage('english')"><img class="footer__language__img" src="../../assets/img/footer/flag-uk.png" alt=""></span>
        </div>
      </v-card-text>
    </v-card>

  </v-footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        contactImages: {
          facebook: require('../../assets/img/footer/fb-color.png'),
          instagram: require('../../assets/img/footer/instagram-color.png')
        },
      }
    },
    methods: {
      changeLanguage(lang) {
        this.$ml.change(lang);

        //caching user prefered language
        localStorage.setItem('language', lang);
      }
    }
  }
</script>

<style scoped>

  .footer {
    position: relative;
  }

  .footer__logo {
    width: 120px;
    height: 52px;
  }

  .footer__wrap {
    height: auto;
    padding-bottom: 0;
    background: #d67d8e;
  }

  .footer__social-wrap {
    display: inline-block;
  }

  .footer__social-follow {
    vertical-align: top;
    display: inline-block;
    margin-top: 5px;
    margin-right: 20px;
    color: #fff;
    font: 18px "PT Sans Bold";
  }

  .footer__social-item-wrap {
    display: inline-block;
    margin: 0 7px;
  }

  .footer__social-item {
    margin: 0 7px;
  }

  .footer-social-item-img-wrap {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
  }

  .footer-social-item-img-wrap:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    background: url("../../assets/img/footer/bg.png");
    background-size: contain;
    transform: translate(-53%, -52%);
    z-index: 0;
  }

  .footer__social-item-img {
    position: relative;
    z-index: 1;
  }

  .footer__social-item__instagram .footer__social-item-img {
    transform: scale(0.8, 0.8);
  }

  .footer__social-item-text {
    vertical-align: top;
    position: relative;
    top: 5px;
    margin-left: 5px;
    color: #fff;
    /*font-family: "PT Sans Bold";*/
    transition: 0.3s;
  }

  .footer__copyright {
    float: right;
    display: inline-block;
    margin-top: 5px;
    color: #fff;
  }

  .footer__language {
    text-align: center;
  }

  .footer__language__img {
    width: 32px;
    height: 32px;
    margin: 0 2px;
    cursor: pointer;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {

  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 576px) {

    .footer__social-follow {
      font-size: 16px;
      margin-right: 0;
    }

    .footer__social-item-wrap {
      margin: 0 0 0 5px;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {
    .footer__wrap {
      text-align: center;
      height: auto;
    }

    .footer__social-follow {
      font-size: 16px;
      margin-bottom: 10px;
      display: block;
    }

    .footer__copyright {
      float: none;
      display: block;
    }
  }
</style>
