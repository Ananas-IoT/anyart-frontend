<template>
  <section id="main" class="main-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="main-section__wrap">
            <h1 class="main-section__title"><b>Any</b>Art</h1>
            <p class="main-section__subtitle">Color your city!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "MainSection"
    }
</script>

<style scoped>

  .main-section {
    /*height: 700px;*/
    height: 100vh;
    background: url("../../assets/img/main_bg1.jpg") top center fixed no-repeat;
    /*background-size: 100%;*/
    background-size: cover;
    position: relative;
  }

  .main-section:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  .main-section__wrap {
    width: fit-content;
    padding: 20px 40px;
    margin: 100px auto 0;
    border-radius: 5px;
    user-select: none;
  }

  .main-section__title {
    width: fit-content;
    font: 160px "Helvetica ultralight";
    margin: auto;
    color: #fff;
  }

  .main-section__title b {
    font-family: "PT Sans Bold", sans-serif;
  }

  .main-section__subtitle {
    width: fit-content;
    margin: auto;
    font-size: 48px;
    color: #fff;
  }

</style>
