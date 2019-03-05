<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="about-section__title">А тепер трохи про нас:</h2>
          <p class="about-section__description">Ми раді вітати вас на нашому веб-сайті! Цей проект — ініціатива невеликої команди
            ентузіастів. Наша мрія — зробити Львів краще для всіх нас: жителів міста та туристів!</p>
        </div>

        <div class="col-md-4">
          <about-item
          :name = "'Анна Манько'"
          :position = "'Product Owner, Back-End Developer'"
          ></about-item>
        </div>

        <div class="col-md-4">
          <about-item
            :name = "'Данііл Логвінов'"
            :position = "'UX-designer, Front-End developer'"
          ></about-item>
        </div>

        <div class="col-md-4">
          <about-item
            :name = "'Михайло Гурський'"
            :position = "'Architect'"
          ></about-item>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import AboutItem from './About/AboutItem'
    export default {
        name: "AboutSection",
      components: {
          'about-item': AboutItem
      }
    }
</script>

<style scoped>

  .about-section {
    background: #eee;
  }

  .about-section__title {
    margin: 10px 0 40px;
  }

  .about-section__description {
    text-align: center;
    width: 75%;
    margin: 10px auto;
  }


  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .about-section__description {
     width: auto;
      font-size: 20px;
    }

  }

</style>
