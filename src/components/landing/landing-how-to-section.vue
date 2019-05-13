<template>
  <section id="how-to" class="how-to-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="how-to-section__title">Як це працює?</h2>
          <p class="how-to-section__description">Правила дуже прості. Просто виконайте декілька простих кроків: </p>
          <!--<ul class="how-to-section__list">-->
          <!--<li class="how-to-section__item">Виберіть місце на карті, завантажте фото та опишіть проблему</li>-->
          <!--<li class="how-to-section__item">Художник може обрати вашу стіну і запропонувати свій скетч</li>-->
          <!--<li class="how-to-section__item">Ви голосуєте за найкращі скетчі</li>-->
          <!--<li class="how-to-section__item">Міська рада затверджує їх, після чого художник приступає до роботи</li>-->
          <!--<li class="how-to-section__item">.. Насолоджуйтесь :)</li>-->
          <!--</ul>-->


          <howto-workflow></howto-workflow>

          <button-landing
            class="how-to-section__btn"
            @click.native="goToMap"
          >Перейти до карти!
          </button-landing>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Workflow from './how-to-items/landing-how-to-workflow'
  import LandingButton from './landing-button'

  export default {
    name: "HowtoSection",
    components: {
      'howto-workflow': Workflow,
      'button-landing': LandingButton
    },
    props: {
      window: Object
    },
    methods: {
      goToMap() {
        this.$router.push('map');
      }
    }
  }
</script>

<style scoped>

  .how-to-section {
    margin: auto;
    background: #fff5f5;
  }

  .how-to-section__description {
    text-align: center;
    width: 70%;
    margin: auto;
    font-size: 24px;
  }

  /*.how-to-section__list {*/
  /*margin: 30px 20px 30px 15%;*/
  /*}*/

  /*.how-to-section__item {*/
  /*padding-left: 40px;*/
  /*margin-top: 10px;*/
  /*font-size: 20px;*/
  /*position: relative;*/
  /*}*/

  /*.how-to-section__item:before {*/
  /*content: '';*/
  /*width: 24px;*/
  /*height: 24px;*/
  /*position: absolute;*/
  /*left: 0;*/
  /*top: 3px;*/
  /*background: url("../../assets/img/how-to-section/how-to-first.png");*/
  /*background-size: contain;*/
  /*}*/

  /*.how-to-section__item:nth-child(2):before {*/
  /*background: url("../../assets/img/how-to-section/how-to-second.png");*/
  /*background-size: contain;*/
  /*}*/

  /*.how-to-section__item:nth-child(3):before {*/
  /*background: url("../../assets/img/how-to-section/how-to-third.png");*/
  /*background-size: contain;*/
  /*}*/

  /*.how-to-section__item:nth-child(4):before {*/
  /*background: url("../../assets/img/how-to-section/how-to-forth.png");*/
  /*background-size: contain;*/
  /*}*/

  /*.how-to-section__item:nth-child(5):before {*/
  /*background: url("../../assets/img/how-to-section/how-to-done.png");*/
  /*background-size: contain;*/
  /*}*/

  .how-to-section .how-to-section__btn {
    margin-top: 40px;
  }

  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width: 1200px) {
    .how-to-section {
      /*width: 95%;*/
      padding: 0 40px;
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width: 992px) {
    .how-to-section {
      /*width: 100%;*/
      padding: 0;
    }

    .how-to-section__description {
      /*width: 100%;*/
    }

    /*.how-to-section__list {*/
    /*margin-left: 50px;*/
    /*}*/
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .how-to-section {
      padding-top: 60px;
    }

    .how-to-section__description {
      font-size: 20px;
    }

    /*.how-to-section__item {*/
    /*font-size: 18px;*/
    /*}*/
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {
    .how-to-section__description {
      font-size: 17px;
    }

    /*.how-to-section__item {*/
    /*font-size: 16px;*/
    /*}*/
    /*.how-to-section__list {*/
    /*width: 80%;*/
    /*margin: 20px auto;*/
    /*}*/
  }
</style>
