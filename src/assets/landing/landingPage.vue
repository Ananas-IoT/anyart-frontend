<template>


  <body>
  <!--<button class="main_mnu_button hidden-md hidden-lg"><i class="fa fa-bars"></i></button>-->


  <header>
    <div class="header-bg"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <a data-scroll-to="#main" class="logo">
            <img src="./img/logo_small_white.png" alt="">
            <img src="./img/logo_small.png" alt="">
          </a>
        </div>
        <div class="col-lg-9">
          <nav>
            <ul>
              <li><a>Головна</a></li>
              <li><a data-scroll-to="#how-to">Як це працює?</a></li>
              <li><a data-scroll-to="#about">Про нас</a></li>
              <li><a data-scroll-to="#gallery">Галерея</a></li>
              <li><a data-scroll-to="#footer">Контакти</a></li>
              <li><a>Карта</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <section id="main" class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrap">
            <h1><b>Any</b>Art</h1>
            <p>Color your city!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="how-to" class="how-to">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Як це працює?</h2>
          <p>Правила дуже прості. Просто виконайте декілька простих кроків: </p>
          <ul>
            <li>Виберіть місце на карті, завантажте фото та опишіть проблему</li>
            <li>Голосуйте за найкращі скетчі</li>
            <li>.. Насолоджуйтесь :)</li>
          </ul>

          <button class="btn">Перейти до карти!</button>

          <div class="workflow">
            <div class="item">
              <div class="circle circle1">
                <div class="add-circle">
                  <p>choose the location</p>
                </div>
              </div>
              <div class="pic"></div>
            </div>
            <div class="item">
              <div class="circle circle2 circle-right">
                <div class="add-circle">
                  <p>take a photo or choose it <br>
                    from gallery and upload</p>
                </div>
              </div>
              <div class="pic"></div>
            </div>
            <div class="item">
              <div class="circle circle3">
                <div class="add-circle">
                  <p>write a comment</p>
                </div>
              </div>
              <div class="pic"></div>
            </div>
            <div class="item">
              <div class="circle circle4 circle-right">
                <div class="add-circle">
                  <p>submit and vote for best</p>
                </div>
              </div>
              <div class="pic"></div>
            </div>
            <div class="item">
              <div class="circle circle5">
                <div class="add-circle">
                  <p>engoy the result!</p>
                </div>
              </div>
              <div class="pic"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>А тепер трохи про нас:</h2>
          <p>Ми раді вітати вас на нашому веб-сайті! Цей проект — ініціатива невеликої команди
            ентузіастів. Наша мрія — зробити Львів краще для всіх нас: жителів міста та туристів!</p>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="pic"><img src="./img/about_photo1.jpg" alt=""></div>
            <div class="txt">
              <h3>Манько Анна</h3>
              <p>Product Owner, Back-End Developer</p>
              <a href=""><img src="./img/telegram_icon.png" alt="">Telegram</a>
              <a href="mailto:"><img src="./img/gmail_icon.png" alt="">Mail</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="pic"><img src="./img/about_photo1.jpg" alt=""></div>
            <div class="txt">
              <h3>Логвінов Данііл</h3>
              <p>UX-designer, Front-End developer</p>
              <a href=""><img src="./img/telegram_icon.png" alt="">Telegram</a>
              <a href="mailto:"><img src="./img/gmail_icon.png" alt="">Mail</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="pic"><img src="./img/about_photo1.jpg" alt=""></div>
            <div class="txt">
              <h3>Гурський Михайло</h3>
              <p>Architect</p>
              <a href=""><img src="./img/telegram_icon.png" alt="">Telegram</a>
              <a href="mailto:"><img src="./img/gmail_icon.png" alt="">Mail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="gallery" class="gallery">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Галерея:</h2>
          <p>Це лише деякі приклади робіт, з часом їх ставатиме ще більше!</p>
          <div class="row">
            <div class="col-lg-3">
              <div class="pic"><a href="">click for more!</a><img src="./img/g1.jpg" alt=""></div>
              <div class="pic"><a href="">click for more!</a><img src="./img/g5.jpg" alt=""></div>
            </div>
            <div class="col-lg-3">
              <div class="pic"><a href="">click for more!</a><img src="./img/g2.jpg" alt=""></div>
              <div class="pic"><a href="">click for more!</a><img src="./img/g6.jpg" alt=""></div>
            </div>
            <div class="col-lg-3">
              <div class="pic"><a href="">click for more!</a><img src="./img/g3.jpg" alt=""></div>
              <div class="pic"><a href="">click for more!</a><img src="./img/g7.jpg" alt=""></div>
            </div>
            <div class="col-lg-3">
              <div class="pic"><a href="">click for more!</a><img src="./img/g4.jpg" alt=""></div>
              <div class="pic"><a href="">click for more!</a><img src="./img/g8.jpg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--<section class="android"> <div class="bg-color"></div>-->
  <!--<div class="container">-->
  <!--<div class="row">-->
  <!--<div class="col-lg-6">-->
  <!--<div class="wrap">-->
  <!--<h2>Тепер і на Android!</h2>-->
  <!--<p>Тут ви зможете набагато зручніше завантажувати фото та комментувати їх!</p>-->
  <!--<a href=""><img src="img/google_play.png" alt=""></a>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="col-lg-6">-->
  <!--<div class="phone">-->
  <!--<div class="phone-pic"></div>-->
  <!--&lt;!&ndash;<img src="img/pixel.png" alt="">&ndash;&gt;-->
  <!--<div class="logo"><img src="img/logo_large.png" alt=""></div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</section>-->

  <section class="partners">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Наші партнери:</h2>
          <div class="carousel">
            <div class="item"><img src="./img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="./img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="./img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="./img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="./img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="./img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="./img/partners/lcc.png" alt=""></div>
            <div class="item"><img src="./img/partners/lcc.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="logo"><img src="./img/logo_large_white.png" alt=""></div>
          <div class="copyright">Copyright(c) Ананас</div>
        </div>
        <div class="col-lg-6">
          <h3>Слідкуйте за нашими новинами:</h3>
          <ul class="wrap">
            <li><a href=""><span><font-awesome-icon icon="user-secret"/></span></a></li>
            <li><a href=""><span><font-awesome-icon icon="coffee"/></span></a></li>
            <li><a href=""><span><font-awesome-icon icon="coffee"/></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>


  <!--&lt;!&ndash;[if lt IE 9]>-->
  <!--<script src="libs/html5shiv/es5-shim.min.js"></script>-->
  <!--<script src="libs/html5shiv/html5shiv.min.js"></script>-->
  <!--<script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>-->
  <!--<script src="libs/respond/respond.min.js"></script>-->
  <!--<![endif]&ndash;&gt;-->

  <!--<script src="libs/jquery/jquery-1.11.2.min.js"></script>-->
  <!--<script src="libs/waypoints/waypoints.min.js"></script>-->
  <!--<script src="libs/animate/animate-css.js"></script>-->
  <!--<script src="libs/plugins-scroll/plugins-scroll.js"></script>-->
  <!--<script src="libs/magnific/jquery.magnific-popup.min.js"></script>-->
  <!--<script src="libs/owl.carousel/owl.carousel.min.js"></script>-->
  <!--<script src="libs/jVForms/jVForms.min.js"></script>-->
  <!--<script src="libs/inputmask/jquery.inputmask.bundle.js"></script>-->
  <!--<script src="libs/nice-select/jquery.nice-select.min.js"></script>-->
  <!--<script src="libs/slick/slick.min.js"></script>-->


  <!--<script src="js/common.js"></script>-->

  </body>


</template>

<script>
  import jQuery from 'jquery'
  import slick from './libs/slick/slick.min'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import {  } from '@fortawesome/free-solid-svg-icons'
  library.add(faUserSecret);

    export default {
        name: "landingPage",
        mounted() {

          //nav changes color while scrolling
          let header = document.getElementsByTagName('header')[0];
          function navColorChanger () {
            if (window.pageYOffset != 0 ) {
              header.classList.add("scrolled");
            } else {
              header.classList.remove("scrolled");
            }
          }
          window.addEventListener('scroll', navColorChanger);
          navColorChanger();


          //scroll menu
          jQuery('header a').click(function () {
            jQuery('html, body').animate({scrollTop:jQuery(jQuery(this).attr('data-scroll-to')).offset().top}, 1000)
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
   @import './libs/slick/slick.css';
   @import './libs/slick/slick-theme.css';
   @import "css/main.css";
   @import "css/fonts.css";
   @import "css/media.css";
</style>
