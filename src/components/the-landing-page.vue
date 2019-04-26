<template>
  <v-app>

    <body>

    <v-dialog v-model="dialogTriggerModel" width="400">
      <v-card class="landing__dialog__wrap">
        <v-card-title class="landing__dialog__title">Message</v-card-title>
        <v-card-text class="landing__dialog__text">{{this.dialogMessage}}</v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="closeMessageDialog"
          >
            Got it!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <app-header v-bind:window=window></app-header>

    <main-landing/>

    <howto-landing v-bind:window=window></howto-landing>

    <about-landing/>

    <gallery-landing/>

    <contact-us-landing/>

    <partners-landing/>

    <footer-landing/>

    </body>

  </v-app>
</template>

<script>
  import jQuery from 'jquery'
  import Header from './the-header'
  import MainSection from './landing/landing-main-section'
  import HowtoSection from './landing/landing-how-to-section'
  import AboutSection from './landing/landing-about-section'
  import GallerySection from './landing/landing-gallery-section'
  import PartnersSection from './landing/landing-partners-section'
  import ContactUsSection from './landing/landing-contact-us'
  import FooterSection from './landing/landing-footer-section'
  import eventBus from '../eventBus'

  export default {
    name: "landingPage",
    components: {
      "app-header": Header,
      "main-landing": MainSection,
      "howto-landing": HowtoSection,
      "about-landing": AboutSection,
      "gallery-landing": GallerySection,
      "partners-landing": PartnersSection,
      "contact-us-landing": ContactUsSection,
      "footer-landing": FooterSection
    },
    data() {
      return {
        dialogMessage: '',
        dialogTriggerModel: false,
        window: {
          width: 0,
          height: 0
        },
      }
    },
    created() {
      //get resolution on start
      window.addEventListener('resize', this.handleResize);
      this.handleResize();

      eventBus.$on('contactMessage', (status) => {
        if (status === 'success') {
          this.dialogMessage = 'Your message were sent! Thank you for your feedback!';
        } else {
          this.dialogMessage = 'Sorry, seems something went wrong with your message.' + '`<br>`' +
            ' Try to send it again or write us manually: nsblnr@gmail.com';
        }
        this.dialogTriggerModel = true;
      });
    },
    mounted() {
      //nav changes color while scrolling
      let header = document.getElementsByTagName('header')[0];

      function navColorChanger() {
        if (window.pageYOffset != 0) {
          header.classList.add("header__scrolled");
        } else {
          header.classList.remove("header__scrolled");
        }
      }

      window.addEventListener('scroll', navColorChanger);
      navColorChanger();

      //scroll menu
      jQuery('header a').click(function () {
        jQuery('html, body').animate({scrollTop: jQuery(jQuery(this).attr('data-scroll-to')).offset().top}, 1000)
      });

      //slick partners
      jQuery('.partners-section .carousel').slick({
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },

      closeMessageDialog() {
        this.dialogTriggerModel = false;
        this.dialogMessage = '';
      }
    }
  }
</script>

<style>
  @import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
  @import "../assets/css/media.css";


  .landing__dialog__wrap {
    padding: 10px;
  }

  .landing__dialog__title {
    font: 24px "PT Sans Bold";
  }

  .landing__dialog__text {
    font-size: 18px;
  }
</style>
