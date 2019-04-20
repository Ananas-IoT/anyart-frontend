<template>
  <v-app style="background: transparent">
    <v-card
      class="about-section__item"
    >
      <div>
        <div class="about-section__item-pic">
          <img class="about-section__item-pic__img" :src="photo" alt="">
        </div>
      </div>
      <div class="about-section__item-txt">
        <h3 class="about-section__item-name">{{this.name}}</h3>
        <p class="about-section__item-position">{{this.position}}</p>
        <div
          class="about-section__item-contacts"
        >
          <a class="about-section__item-contacts__contact" :href="this.links.telegram" target="_blank"></a>
          <a class="about-section__item-contacts__contact" :href="this.links.facebook" target="_blank"></a>
          <a class="about-section__item-contacts__contact" :href="this.links.gmail" target="_blank"></a>
        </div>
      </div>
    </v-card>
  </v-app>
</template>

<script>

  export default {
    name: "AboutItem",
    components: {

    },
    props: {
      name: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        photo: '',
        links: {}
      }
    },
    created() {
      switch (this.name) {
        case 'Анна Манько':
          this.photo = require('../../../assets/img/landing-about-section/about-photo/about_photo2.png');
          this.links.telegram = 'https://t.me/scrubele';
          this.links.facebook = 'https://facebook.com/dlohvinov';
          this.links.gmail = 'mailto: nsblnr@gmail.com';
          break;
        case 'Данііл Логвінов':
          this.photo = require('../../../assets/img/landing-about-section/about-photo/about_photo1.png');
          this.links.telegram = 'https://t.me/dlohvinov';
          this.links.facebook = 'https://facebook.com/dlohvinov';
          this.links.gmail = 'mailto: nsblnr@gmail.com';
          break;
        case 'Михайло Гурський':
          this.photo = require('../../../assets/img/landing-about-section/about-photo/about_photo3.png');
          this.links.telegram = 'https://t.me/gur_man';
          this.links.facebook = 'https://facebook.com/dlohvinov';
          this.links.gmail = 'mailto: nsblnr@gmail.com';
          break;
        case 'Влад Бойчев':
          this.photo = require('../../../assets/img/landing-about-section/about-photo/about_photo4.png');
          this.links.telegram = 'https://t.me/thunderosee';
          this.links.facebook = 'https://facebook.com/dlohvinov';
          this.links.gmail = 'mailto: vladyslav.boychev@gmail.com';
          break;
        case 'Олег Гаврилюк':
          this.photo = require('../../../assets/img/landing-about-section/about-photo/about_photo5.png');
          this.links.telegram = 'https://t.me/dlohvinov';
          this.links.facebook = 'https://facebook.com/dlohvinov';
          this.links.gmail = 'mailto: nsblnr@gmail.com';
          break;
      }
    },
    computed: {}
  }
</script>

<style scoped>
  .about-section__item {
    text-align: center;
    height: 300px;
    padding: 20px;
    background: transparent;
    box-shadow: none;
    transition: 0.3s;
  }

  .about-section__item-pic {
    transform: scale(0.9, 0.9);
  }

  .about-section__item-pic__img {
    display: block;
    margin: auto;
  }

  .about-section__item-txt {
    margin-top: 5px;
  }

  .about-section__item-name {
    font: 20px "PT Sans Bold";
    margin: 0;
  }

  .about-section__item-position {
    font-size: 14px;
    margin: 5px auto;
  }

  .about-section__item-contacts__contact {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px auto 0;
    background: url("../../../assets/img/landing-about-section/about-socials/telegram-black.png") no-repeat;
    background-size: contain;
    cursor: pointer;
    transition: 0.3s;
  }

  .about-section__item-contacts__contact:nth-child(2) {
    background: url("../../../assets/img/landing-about-section/about-socials/fb-black.png") no-repeat;
    background-size: contain;
  }

  .about-section__item-contacts__contact:nth-child(3) {
    background: url("../../../assets/img/landing-about-section/about-socials/gmail-black.png") no-repeat;
    background-size: contain;
  }

  .about-section__item:hover .about-section__item-contacts__contact:nth-child(1) {
    background: url("../../../assets/img/landing-about-section/about-socials/telegram-color.png") no-repeat;
    background-size: contain;
  }

  .about-section__item:hover .about-section__item-contacts__contact:nth-child(2) {
    background: url("../../../assets/img/landing-about-section/about-socials/fb-color.png") no-repeat;
    background-size: contain;
  }

  .about-section__item:hover .about-section__item-contacts__contact:nth-child(3) {
    background: url("../../../assets/img/landing-about-section/about-socials/gmail-color.png") no-repeat;
    background-size: contain;
  }

  /*==========  Desktop First Method  ==========*/
  /* Medium Devices, Desktops */
  @media only screen and (max-width: 992px) {
    .about-section__item {
      height: 350px;
    }

    .about-section__item-name {
      font-size: 20px;
    }

    .about-section__item-contacts {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .about-section__item {
      height: 260px;
      width: 60%;
      padding-top: 80px;
      margin: 140px auto 0;
    }

    .about-section__item-pic {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
    }

  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 567px) {
    .about-section__item {
      height: 185px;
      padding-top: 40px;
    }

    .about-section__item-pic {
      width: 160px;
    }

    .about-section__item-position {
      font-size: 12px;
    }

    .about-section__item-name {
      font-size: 18px;
    }


    .about-section__item-contacts__contact {
      font-size: 14px;
      margin: 0 auto;
    }

    .about-section__item-contacts__contact-img {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }

</style>
