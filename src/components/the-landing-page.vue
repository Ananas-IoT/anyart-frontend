<template>

  <body>
  <!--<button class="main_mnu_button hidden-md hidden-lg"><i class="fa fa-bars"></i></button>-->
  <app-header v-bind:window = window></app-header>

  <main-landing/>

  <howto-landing v-bind:window = window></howto-landing>

  <about-landing/>

  <gallery-landing/>

  <partners-landing/>

  <footer-landing/>

  </body>


</template>

<script>
  import jQuery from 'jquery'
  import Header from './the-header'
  import MainSection from './landing/landing-main-section'
  import HowtoSection from './landing/landing-how-to-section'
  import AboutSection from './landing/landing-about-section'
  import GallerySection from './landing/landing-gallery-section'
  import PartnersSection from './landing/landing-partners-section'
  import FooterSection from './landing/landing-footer-section'

  export default {
    name: "landing Page",
    components: {
      "app-header": Header,
      "main-landing": MainSection,
      "howto-landing": HowtoSection,
      "about-landing": AboutSection,
      "gallery-landing": GallerySection,
      "partners-landing": PartnersSection,
      "footer-landing": FooterSection
    },
    data() {
      return {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 568,
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
      }
    }
  }
</script>

<style>
  @import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
  @import "../assets/css/media.css";
</style>
