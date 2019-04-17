<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-sm-1 order-1">
          <div class="footer__logo"><img src="../../assets/img/logo_large_white.png" alt=""></div>
          <div class="footer__copyright">Copyright(c) Ананас</div>
        </div>
        <div class="col-md-6 order-sm-0 order-0">
          <div class="footer__social-wrap">
            <h3 class="footer__social-title">Слідкуйте за нашими новинами:</h3>
            <ul class="footer__social-list">
              <li class="footer__social-item">
                <a class="footer__social-item-link" href="https://gmail.com" target="_blank"><span>
                <img class="footer__social-item-img" :src="contactImages.mail" alt="">
              </span></a>
              </li>
              <li class="footer__social-item">
                <a class="footer__social-item-link" href="https://facebook.com" target="_blank"><span>
                <img class="footer__social-item-img" :src="contactImages.facebook" alt="">
              </span></a>
              </li>
              <li class="footer__social-item">
                <a class="footer__social-item-link" href="https://instagram.com" target="_blank"><span>
                <img class="footer__social-item-img" :src="contactImages.instagram" alt="">
              </span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        contactImages: {
          mail: require('../../assets/img/footer/footer-mail.png'),
          facebook: require('../../assets/img/footer/footer-facebook.png'),
          instagram: require('../../assets/img/footer/footer-instagram.png')
        }
      }
    }
  }
</script>

<style scoped>

  .footer {
    text-align: center;
    padding: 60px 0 40px;
    background: #35073d;
    position: relative;
  }

  .footer__logo {
    width: 200px;
    margin: 0 auto;
  }

  .footer__social-title {
    margin: 10px 0 0;
    color: #fff;
    font: 20px "PT Sans Bold";
  }

  .footer__social-list {
    margin: auto;
  }

  .footer__social-item {
    display: inline-block;
    width: 40px;
    margin: 20px 5px;
    /*background: #fff;*/
    /*border-radius: 50%;*/
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    -webkit-tap-highlight-color: transparent;
  }

  .footer__social-list font-awesome-icon {
    color: #fff !important;
  }

  .footer__social-item span {
    position: relative;
  }

  .footer__social-item-img {
    margin-top: 2px;
    width: 24px;
    height: 24px;
  }

  .footer__social-item:before {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    top: -7px;
    left: 0;
    background: #fff;
    border-radius: 50%;
    transition: 0.3s;
    z-index: 0;
  }

  .footer__social-item:hover:before {
    transform: scale(1.2, 1.2);
  }

  .footer__social-item-link {
    color: #000;
  }

  .footer__social-list i {
    position: absolute;
    top: -1px;
    left: 0;
    font-size: 24px;
    margin: 10px;
  }

  .footer__copyright {
    text-align: center;
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
