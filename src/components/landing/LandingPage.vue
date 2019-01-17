<template>

  <body>
  <!--<button class="main_mnu_button hidden-md hidden-lg"><i class="fa fa-bars"></i></button>-->
  <app-header></app-header>

  <main-landing></main-landing>

  <howto-landing></howto-landing>

  <about-landing></about-landing>

  <gallery-landing></gallery-landing>

  <partners-landing></partners-landing>

  <footer-landing></footer-landing>

  </body>


</template>

<script>
  import {getUserByToken} from '../../api/auth'
  import jQuery from 'jquery'
  import Header from '../AppHeader'
  import MainSection from './MainSection'
  import HowtoSection from './HowtoSection'
  import AboutSection from './AboutSection'
  import GallerySection from './GallerySection'
  import PartnersSection from './PartnersSection'
  import FooterSection from './Footer'

  export default {
    name: "landingPage",
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
      return {}
    },
    created() {

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
        slidesToScroll: 1
      });
    }
  }
</script>

<style>
  @import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
  @import "../../assets/css/media.css";
</style>
