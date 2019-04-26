<template>
  <v-app>
    <section class="partners-section">
      <div class="content bg-transparent">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="partners-section__title">Наші партнери:</h2>
              <div class="carousel">
                <div class="partners-section__item elevation-5">
                  <img src="../../assets/img/partners/lcc.png" alt="">
                </div>
                <div class="partners-section__item elevation-5">
                  <img src="../../assets/img/partners/lcc.png" alt="">
                </div>
                <div class="partners-section__item elevation-5">
                  <img src="../../assets/img/partners/lcc.png" alt="">
                </div>
                <div class="partners-section__item elevation-5">
                  <img src="../../assets/img/partners/lcc.png" alt="">
                </div>
                <div class="partners-section__item elevation-5">
                  <img src="../../assets/img/partners/lcc.png" alt="">
                </div>
                <div class="partners-section__item elevation-5">
                  <img src="../../assets/img/partners/lcc.png" alt="">
                </div>
                <div class="partners-section__item elevation-5">
                  <img src="../../assets/img/partners/lcc.png" alt="">
                </div>
                <div class="partners-section__item elevation-5">
                  <img src="../../assets/img/partners/lcc.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-app>
</template>

<script>
  import slick from '../../assets/libs/slick/slick.min'

  export default {
    name: "PartnersSection",
  }
</script>

<style scoped>
  @import '../../assets/libs/slick/slick.css';
  @import '../../assets/libs/slick/slick-theme.css';

  .partners-section {
    position: relative;
  }

  .partners-section:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 400px;
    background: url("../.././assets/img/paint-bg/8.png") no-repeat;
    background-size: contain;
    transform: translate(-50%, -55%) scale(-1, -1);
    pointer-events: none;
  }

  .partners-section__title {
    margin-bottom: 50px;
  }

  .partners-section__item {
    position: relative;
    width: 300px;
    padding: 20px;
    margin: 70px 20px;
    background: #eee;
    border-radius: 3px;
    opacity: 0.9;
    transition: 0.3s;
  }

  .partners-section__item:hover {
    background: #fff;
  }


  /*==========  Desktop First Method  ==========*/
  /* Large Devices, Wide Screens */
  @media only screen and (max-width : 1200px) {}

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .partners-section:before {
      width: 600px;
      height: 300px;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .partners-section:before {
      width: 500px;
      height: 250px;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 576px) {
    .partners-section:before {
      width: 600px;
      height: 300px;
    }
  }

</style>
