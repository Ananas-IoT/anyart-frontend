<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="gallery-section__title">Галерея:</h2>
          <p class="gallery-section__description">Це лише деякі приклади робіт, з часом їх ставатиме ще більше!</p>
          <div class="row">

            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="gallery-section__pic-wrap">
                <a class="gallery-section__pic-link">
                  click for more!</a>
                <img class="gallery-section__pic" src="../../assets/img/gallery-section/g1.jpg" alt="">
              </div>
            </div>

              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="gallery-section__pic-wrap">
                  <a class="gallery-section__pic-link">
                    click for more!</a>
                  <img class="gallery-section__pic" src="../../assets/img/gallery-section/g5.jpg" alt=""></div>
              </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="gallery-section__pic-wrap">
                <a class="gallery-section__pic-link">
                  click for more!</a>
                <img class="gallery-section__pic" src="../../assets/img/gallery-section/g2.jpg" alt=""></div>
            </div>

              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="gallery-section__pic-wrap">
                  <a class="gallery-section__pic-link">
                    click for more!</a>
                  <img class="gallery-section__pic" src="../../assets/img/gallery-section/g6.jpg" alt=""></div>
              </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="gallery-section__pic-wrap">
                <a class="gallery-section__pic-link">
                  click for more!</a>
                <img class="gallery-section__pic" src="../../assets/img/gallery-section/g3.jpg" alt=""></div>
            </div>

              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="gallery-section__pic-wrap">
                  <a class="gallery-section__pic-link">
                    click for more!</a>
                  <img class="gallery-section__pic" src="../../assets/img/gallery-section/g7.jpg" alt=""></div>
              </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="gallery-section__pic-wrap">
                <a class="gallery-section__pic-link">
                  click for more!</a>
                <img class="gallery-section__pic" src="../../assets/img/gallery-section/g4.jpg" alt=""></div>
            </div>

              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="gallery-section__pic-wrap">
                  <a class="gallery-section__pic-link">
                    click for more!</a>
                  <img class="gallery-section__pic" src="../../assets/img/gallery-section/g8.jpg" alt=""></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "GallerySection"
  }
</script>

<style scoped>

  .gallery-section {

  }

  .gallery-section__description {
    text-align: center;
    font-size: 20px;
    color: #757575;
  }

  .gallery-section__pic-wrap {
    width: 100%;
    height: 170px;
    margin-top: 30px;
    border: 1px solid #7d42b9;
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .gallery-section__pic {
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
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
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
</style>
