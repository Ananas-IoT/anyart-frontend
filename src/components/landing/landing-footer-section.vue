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
      <v-card-title class="footer__social-wrap justify-center">
        <!--<div class="footer__logo"><img src="../../assets/img/logo_large_white.png" alt=""></div>-->
        <div class="footer__copyright">
          &copy;2019 — <strong>AnyArt</strong>
        </div>

        <v-spacer></v-spacer>

        <div class="footer__social-follow">Follow us!</div>

        <div class="footer__social-item-wrap">
          <a
            class="footer__social-item"
            href="https://facebook.com"
            target="_blank">
            <div class="footer-social-item-img-wrap">
              <img class="footer__social-item-img" :src="contactImages.facebook" alt="">
            </div>
            <span class="footer__social-item-text">on Facebook</span>
          </a>
        </div>

        <div class="footer__social-item-wrap">
          <a
            class="footer__social-item footer__social-item__instagram"
            href="https://instagram.com"
            target="_blank">
            <div class="footer-social-item-img-wrap">
            <img class="footer__social-item-img" :src="contactImages.instagram" alt="">
            </div>
            <span class="footer__social-item-text">on Instagram</span>
          </a>
        </div>
      </v-card-title>
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

  .footer__social-wrap {
    padding: 10px 20px 5px;
    background: #d67d8e;
  }

  .footer__social-follow {
    margin-right: 20px;
    color: #fff;
    font: 18px "PT Sans BoldItalic";
  }

  .footer__social-item-wrap {
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
    color: #fff;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .footer__social-wrap {
      margin-bottom: 40px;
    }

    .footer__social-title {
      margin-top: 0;
      font-family: "PT Sans Regular";
    }

  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 567px) {

  }
</style>
