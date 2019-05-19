<template>
  <section id="about" class="about-section">
    <div class="content bg-transparent">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12">
            <h2 class="about-section__title" v-text="$ml.get('landing-about-us-title')"></h2>
            <p class="about-section__description" v-text="$ml.get('landing-about-us-subtitle')"></p>
          </div>

          <div class="col-md-4 col-lg-3 about-item">
            <about-item
              :name="$ml.get('landing-about-us-name')[0]"
              :position="$ml.get('landing-about-us-position')[0]"
            ></about-item>
          </div>

          <div class="col-md-4 col-lg-3 about-item">
            <about-item
              :name="$ml.get('landing-about-us-name')[1]"
              :position="$ml.get('landing-about-us-position')[1]"
            ></about-item>
          </div>

          <div class="col-md-4 col-lg-3 about-item">
            <about-item
              :name="$ml.get('landing-about-us-name')[2]"
              :position="$ml.get('landing-about-us-position')[2]"
            ></about-item>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-md-4 col-lg-3 about-item">
            <about-item
              :name="$ml.get('landing-about-us-name')[3]"
              :position="$ml.get('landing-about-us-position')[3]"
            ></about-item>
          </div>

          <div class="col-md-4 col-lg-3 about-item">
            <about-item
              :name="$ml.get('landing-about-us-name')[4]"
              :position="$ml.get('landing-about-us-position')[4]"
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
    width: 300px;
    height: 100%;
    background: url("../../assets/img/paint-bg/6.png") no-repeat;
    background-size: contain;
    opacity: 0.7;
    transform: translate(-50%, -55%);
    pointer-events: none;
  }

  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width : 1200px) {}

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .about-item:before {
      width: 250px;
      transform: translate(-50%, -53%);
    }
  }
  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .about-section__description {
      width: auto;
      font-size: 20px;
    }

    .about-item:before {
      width: 420px;
      transform: translate(-50%, -49%);
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 480px) {
    .about-item:before {
      width: 310px;
      transform: translate(-50%, -55%);
    }
  }

</style>
