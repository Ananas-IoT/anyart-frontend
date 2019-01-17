<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="footer__logo"><img src="../../assets/img/logo_large_white.png" alt=""></div>
          <div class="footer__copyright">Copyright(c) Ананас</div>
        </div>
        <div class="col-lg-6">
          <h3 class="footer__social-title">Слідкуйте за нашими новинами:</h3>
          <ul class="footer__social-list">
            <li class="footer__social-item">
              <a class="footer__social-item-link" href=""><span><font-awesome-icon icon="user-secret"/></span></a>
            </li>
            <li class="footer__social-item">
              <a class="footer__social-item-link" href=""><span><font-awesome-icon icon="coffee"/></span></a>
            </li>
            <li class="footer__social-item">
              <a class="footer__social-item-link" href=""><span><font-awesome-icon icon="coffee"/></span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  // import {  } from '@fortawesome/free-solid-svg-icons'
  // library.add(faUserSecret);
  export default {
    name: "Footer"
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
  }

  .footer__social-list font-awesome-icon {
    color: #fff !important;
  }

  .footer__social-item span {
    position: relative;

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

</style>
