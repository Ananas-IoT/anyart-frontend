<template>
  <section class="partners-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="partners-section__title">Наші партнери:</h2>
          <div class="carousel">
            <div class="partners-section__item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="partners-section__item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="partners-section__item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="partners-section__item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="partners-section__item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="partners-section__item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="partners-section__item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
            <div class="partners-section__item"><img src="../../assets/img/partners/lcc.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import slick from '../../assets/libs/slick/slick.min'

  export default {
    name: "PartnersSection"
  }
</script>

<style scoped>
  @import '../../assets/libs/slick/slick.css';
  @import '../../assets/libs/slick/slick-theme.css';

  .partners-section {
    background: #eee;
  }

  .partners-section .partners-section__item {
    width: 300px;
    padding: 20px;
    margin: 0 20px;
    border: 1px solid #000;
    border-radius: 3px;
  }

  /*.partners .slick-next, .partners .slick-prev {*/
  /*width: 32px; height: 32px;*/
  /*opacity: 0;*/
  /*}*/

</style>
