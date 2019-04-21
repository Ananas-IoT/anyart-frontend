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

        <v-btn
          class="footer__social-item"
          href="https://facebook.com"
          target="_blank"
          icon
        >
          <img class="footer__social-item-img" :src="contactImages.facebook" alt="">
          <!--<span>on Facebook</span>-->
        </v-btn>

        <!--<v-btn-->
          <!--class="footer__social-item"-->
          <!--href="https://gmail.com"-->
          <!--target="_blank"-->
          <!--dark-->
          <!--icon-->
        <!--&gt;-->
          <!--<img class="footer__social-item-img" :src="contactImages.facebook" alt="">-->
        <!--</v-btn>-->

        <v-btn
          class="footer__social-item"
          href="https://instagram.com"
          target="_blank"
          icon
        >
          <img class="footer__social-item-img" :src="contactImages.instagram" alt="">
          <!--<span>on Facebook</span>-->
        </v-btn>
      </v-card-title>

      <!--<v-card-actions class="footer__copyright grey darken-3 justify-center no-gutters">-->
        <!--&copy;2019 — <strong>AnyArt</strong>-->
      <!--</v-card-actions>-->
    </v-card>

  </v-footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        contactImages: {
          // mail: require('../../assets/img/footer/mail.png'),
          facebook: require('../../assets/img/footer/facebook.png'),
          instagram: require('../../assets/img/footer/instagram.png')
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
    margin-right: 30px;
    color: #fff;
    font: 18px "PT Sans BoldItalic";
  }
  /*.footer__social-title {*/
    /*margin: 10px 0 0;*/
    /*color: #fff;*/
    /*font: 20px "PT Sans Bold";*/
  /*}*/

  /*.footer__social-list {*/
    /*margin: auto;*/
  /*}*/

  .footer__social-item {
    margin: 0 7px;
  }

  /*.footer__social-list font-awesome-icon {*/
    /*color: #fff !important;*/
  /*}*/

  /*.footer__social-item span {*/
    /*position: relative;*/
  /*}*/

  /*.footer__social-item-img {*/
    /*margin-top: 2px;*/
    /*width: 24px;*/
    /*height: 24px;*/
  /*}*/

  /*.footer__social-item:before {*/
    /*content: '';*/
    /*width: 40px;*/
    /*height: 40px;*/
    /*position: absolute;*/
    /*top: -7px;*/
    /*left: 0;*/
    /*background: #fff;*/
    /*border-radius: 50%;*/
    /*transition: 0.3s;*/
    /*z-index: 0;*/
  /*}*/

  /*.footer__social-item:hover:before {*/
    /*transform: scale(1.2, 1.2);*/
  /*}*/

  /*.footer__social-item-link {*/
    /*color: #000;*/
  /*}*/

  /*.footer__social-list i {*/
    /*position: absolute;*/
    /*top: -1px;*/
    /*left: 0;*/
    /*font-size: 24px;*/
    /*margin: 10px;*/
  /*}*/

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
