<template>
  <section id="about" class="about-section">
    <div class="content bg-transparent">
      <div class="container">
        <div class="row justify-center">
          <div class="col-lg-12">
            <h2 class="about-section__title">А тепер трохи про нас:</h2>
            <p class="about-section__description">Ми раді вітати вас на нашому веб-сайті! Цей проект — ініціатива
              невеликої команди
              ентузіастів. Наша мрія — зробити Львів краще для всіх нас: жителів міста та туристів!</p>
          </div>

          <div class="col-md-3 about-item">
            <about-item
              :name="'Анна Манько'"
              :position="'Product Owner, Back-End Developer'"
            ></about-item>
          </div>

          <div class="col-md-3 about-item">
            <about-item
              :name="'Данііл Логвінов'"
              :position="'UX-designer, Front-End developer'"
            ></about-item>
          </div>

          <div class="col-md-3 about-item">
            <about-item
              :name="'Михайло Гурський'"
              :position="'Architect'"
            ></about-item>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-md-3 about-item">
            <about-item
              :name="'Влад Бойчев'"
              :position="'Front-End developer'"
            ></about-item>
          </div>

          <div class="col-md-3 about-item">
            <about-item
              :name="'Олег Гаврилюк'"
              :position="'Mentor'"
            ></about-item>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AboutItem from './about-items/landing-about-item'

  export default {
    name: "AboutSection",
    components: {
      'about-item': AboutItem
    }
  }
</script>

<style scoped>

  .about-section {
    position: relative;
    padding-top: 60px;
    /*background: #fbfbfb;*/
    background: #fff5f5;
  }

  .about-section__title {
    margin: 10px 0 40px;
  }

  .about-section__description {
    text-align: center;
    width: 75%;
    font-size: 18px;
    margin: 10px auto 0;
  }

  .about-item {
    position: relative;
    margin-top: 40px;
  }

  .about-item:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    /*top: 60px;*/
    /*right: 0;*/
    width: 300px;
    height: 100%;
    background: url("../../assets/img/paint-bg/6.png") no-repeat;
    background-size: contain;
    opacity: 0.7;
    transform: translate(-50%, -55%);
    pointer-events: none;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .about-section__description {
      width: auto;
      font-size: 20px;
    }

  }

</style>
