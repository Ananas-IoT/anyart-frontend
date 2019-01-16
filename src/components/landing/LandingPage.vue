<template>

  <body>
  <!--<button class="main_mnu_button hidden-md hidden-lg"><i class="fa fa-bars"></i></button>-->
  <app-header></app-header>

  <main-landing></main-landing>

  <howto-landing></howto-landing>

  <about-landing></about-landing>

  <section id="gallery" class="gallery">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Галерея:</h2>
          <p>Це лише деякі приклади робіт, з часом їх ставатиме ще більше!</p>
          <div class="row">
            <div class="col-lg-3">
              <div class="pic"><a href="">click for more!</a><img src="../../assets/img/g1.jpg" alt=""></div>
              <div class="pic"><a href="">click for more!</a><img src="../../assets/img/g5.jpg" alt=""></div>
            </div>
            <div class="col-lg-3">
              <div class="pic"><a href="">click for more!</a><img src="../../assets/img/g2.jpg" alt=""></div>
              <div class="pic"><a href="">click for more!</a><img src="../../assets/img/g6.jpg" alt=""></div>
            </div>
            <div class="col-lg-3">
              <div class="pic"><a href="">click for more!</a><img src="../../assets/img/g3.jpg" alt=""></div>
              <div class="pic"><a href="">click for more!</a><img src="../../assets/img/g7.jpg" alt=""></div>
            </div>
            <div class="col-lg-3">
              <div class="pic"><a href="">click for more!</a><img src="../../assets/img/g4.jpg" alt=""></div>
              <div class="pic"><a href="">click for more!</a><img src="../../assets/img/g8.jpg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="partners">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Наші партнери:</h2>
          <div class="carousel">
            <div class="item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header__logo"><img src="../../assets/img/logo_large_white.png" alt=""></div>
          <div class="copyright">Copyright(c) Ананас</div>
        </div>
        <div class="col-lg-6">
          <h3>Слідкуйте за нашими новинами:</h3>
          <ul class="wrap">
            <!--<li><a href=""><span><font-awesome-icon icon="user-secret"/></span></a></li>-->
            <!--<li><a href=""><span><font-awesome-icon icon="coffee"/></span></a></li>-->
            <!--<li><a href=""><span><font-awesome-icon icon="coffee"/></span></a></li>-->
          </ul>
        </div>
      </div>
    </div>
  </footer>

  </body>


</template>

<script>
  import {getUserByToken} from '../../api/auth'
  import jQuery from 'jquery'
  import Header from '../AppHeader'
  import MainSection from './MainSection'
  import HowtoSection from './HowtoSection'
  import AboutSection from './AboutSection'
  import slick from '../../assets/landing/libs/slick/slick.min'
  import {library} from '@fortawesome/fontawesome-svg-core'
  // import {  } from '@fortawesome/free-solid-svg-icons'
  // library.add(faUserSecret);

  export default {
    name: "landingPage",
    components: {
      "app-header": Header,
      "main-landing": MainSection,
      "howto-landing": HowtoSection,
      "about-landing": AboutSection
    },
    data() {
      return {

      }
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
      jQuery('.partners .carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      });
    }
  }
</script>

<style scoped>
  @import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
  @import '../../assets/landing/libs/slick/slick.css';
  @import '../../assets/landing/libs/slick/slick-theme.css';
  @import "../../assets/css/media.css";
</style>
