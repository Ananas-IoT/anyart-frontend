<template>
  <section id="how-to" class="how-to-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="how-to-section__title">Як це працює?</h2>
          <p class="how-to-section__description">Правила дуже прості. Просто виконайте декілька простих кроків: </p>
          <ul class="how-to-section__list">
            <li class="how-to-section__item">Виберіть місце на карті, завантажте фото та опишіть проблему</li>
            <li class="how-to-section__item">Голосуйте за найкращі скетчі</li>
            <li class="how-to-section__item">.. Насолоджуйтесь :)</li>
          </ul>

          <button-landing
            :text="'Перейти до карти!'"
          >
          </button-landing>

          <howto-workflow></howto-workflow>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Workflow from './Howto/HowtoWorkflow'
  import LandingButton from './LandingButton'

  export default {
    name: "HowtoSection",
    components: {
      'howto-workflow': Workflow,
      'button-landing': LandingButton
    }
  }
</script>

<style scoped>

  .how-to-section {

  }

  .how-to-section__description {
    text-align: center;
    width: 70%;
    margin: auto;
    font-size: 24px;
  }

  .how-to-section__list {
    margin: 30px 20px 30px 15%;
  }

  .how-to-section__item {
    padding-left: 40px;
    margin-top: 10px;
    font-size: 20px;
    position: relative;
  }

  .how-to-section__item:before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    top: 3px;
    background: url("../../assets/img/how-to-first.png");
    background-size: contain;
  }

  .how-to-section__item:nth-child(2):before {
    background: url("../../assets/img/how-to-second.png");
    background-size: contain;
  }

  .how-to-section__item:nth-child(3):before {
    background: url("../../assets/img/how-to-done.png");
    background-size: contain;
  }
</style>
