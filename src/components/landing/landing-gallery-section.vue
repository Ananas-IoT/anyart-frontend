<template>
  <v-app>
    <section id="gallery" class="gallery-section">
      <div class="content bg-transparent">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="gallery-section__title">Галерея:</h2>
              <p class="gallery-section__description">Це лише деякі приклади робіт, зроблених до нас.
                З нашою допомогою їх ставатиме ще більше!</p>
              <div class="row">

                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="gallery-section__xs-pic-bg d-sm-none"></div>
                  <v-card class="gallery-section__pic-wrap">
                    <a class="gallery-section__pic-link" href="https://instagram.com" target="_blank">
                      Instagram</a>
                    <img class="gallery-section__pic" src="../../assets/img/gallery-section/g1.jpg" alt="">
                  </v-card>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                  <v-card class="gallery-section__pic-wrap">
                    <a class="gallery-section__pic-link" href="https://instagram.com" target="_blank">
                      Instagram</a>
                    <img class="gallery-section__pic" src="../../assets/img/gallery-section/g5.jpg" alt=""></v-card>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="gallery-section__xs-pic-bg gallery-section__xs-pic-bg__left d-sm-none"></div>
                  <v-card class="gallery-section__pic-wrap">
                    <a class="gallery-section__pic-link" href="https://instagram.com" target="_blank">
                      Instagram</a>
                    <img class="gallery-section__pic" src="../../assets/img/gallery-section/g2.jpg" alt=""></v-card>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                  <v-card class="gallery-section__pic-wrap">
                    <a class="gallery-section__pic-link" href="https://instagram.com" target="_blank">
                      Instagram</a>
                    <img class="gallery-section__pic" src="../../assets/img/gallery-section/g6.jpg" alt=""></v-card>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="gallery-section__xs-pic-bg d-sm-none"></div>
                  <v-card class="gallery-section__pic-wrap">
                    <a class="gallery-section__pic-link" href="https://instagram.com" target="_blank">
                      Instagram</a>
                    <img class="gallery-section__pic" src="../../assets/img/gallery-section/g3.jpg" alt=""></v-card>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                  <v-card class="gallery-section__pic-wrap">
                    <a class="gallery-section__pic-link" href="https://instagram.com" target="_blank">
                      Instagram</a>
                    <img class="gallery-section__pic" src="../../assets/img/gallery-section/g7.jpg" alt=""></v-card>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="gallery-section__xs-pic-bg gallery-section__xs-pic-bg__left d-sm-none"></div>
                  <v-card class="gallery-section__pic-wrap">
                    <a class="gallery-section__pic-link" href="https://instagram.com" target="_blank">
                      Instagram</a>
                    <img class="gallery-section__pic" src="../../assets/img/gallery-section/g4.jpg" alt=""></v-card>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                  <v-card class="gallery-section__pic-wrap">
                    <a class="gallery-section__pic-link" href="https://instagram.com" target="_blank">
                      Instagram</a>
                    <img class="gallery-section__pic" src="../../assets/img/gallery-section/g8.jpg" alt=""></v-card>
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
  export default {
    name: "GallerySection"
  }
</script>

<style scoped>

  .gallery-section {
    position: relative;
  }

  .gallery-section:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 800px;
    background: url("../.././assets/img/paint-bg/3.png") no-repeat;
    background-size: contain;
    transform: translateY(-200px) scale(-1, -1);
    pointer-events: none;
  }

  .gallery-section__description {
    text-align: center;
    font-size: 20px;
    color: #000;
    /*color: #757575;*/
  }

  .gallery-section__pic-wrap {
    width: 100%;
    height: 170px;
    margin-top: 30px;
    /*border: 1px solid #7d42b9;*/
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 10;
  }

  .gallery-section__pic {
    vertical-align: top;
    width: 100%;
    height: 100%;
    transition: 0.3s;
  }

  .gallery-section__pic-wrap:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    /*background: rgba(119, 13, 133, 0.6);*/
    pointer-events: none;
    transition: 0.3s;
    opacity: 0;
    z-index: 10;
  }

  .gallery-section__pic-link {
    display: block;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    padding: 5px 10px;
    font-size: 16px;
    color: #fff;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 3px;
    pointer-events: none;
    transition: 0.3s;
    opacity: 0;
    z-index: 11;
    overflow: hidden;
  }

  .gallery-section__pic-wrap:hover:before,
  .gallery-section__pic-wrap:hover .gallery-section__pic-link {
    opacity: 1;
    pointer-events: auto;
  }

  .gallery-section__pic-link:hover {
    color: #000;
    /*background: #fff;*/
  }

  .gallery-section__pic-link:before {
    content: '';
    /*width: 100%;*/
    /*height: 100%;*/
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    background: #fff;
    transform: translateY(-100%);
    transition: 0.3s;
    z-index: -1;
  }

  .gallery-section__pic-link:hover:before {
    transform: translateY(0);
  }

  .gallery-section__pic-wrap:hover
  .gallery-section__pic {
    transform: scale(1.2, 1.2);
  }


  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width : 1200px) {}

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .gallery-section:before {
      transform: translateY(-70px) scale(-1, -1);
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .gallery-section:before {
      transform: translateY(-100px) scale(-1, -1);
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 576px) {
    .gallery-section {
      padding-bottom: 30px;
    }

    .gallery-section:before {
      display: none;
    }

    .gallery-section__pic-wrap {
      position: relative;
      width: 80%;
      height: auto;
      margin: 20px auto;
    }

    .gallery-section__xs-pic-bg {
      position: absolute;
      top: 0;
      right: 0;
      width: 100vw;
      height: 400px;
      background: url("../.././assets/img/paint-bg/3.png") no-repeat;
      background-size: contain;
      opacity: 0.7;
      pointer-events: none;
    }

    .gallery-section__xs-pic-bg__left {
      transform: translateY(-100px) scale(-1, -1);
      z-index: 0;
    }

    .gallery-section__pic-link {
      padding: 10px 15px;
      font-size: 18px;
    }
  }
</style>
