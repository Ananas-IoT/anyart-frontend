<template>
  <div class="about-section__item">
    <div class="about-section__item-pic"><img class="about-section__item-pic__img" :src="photo" alt=""></div>
    <div class="about-section__item-txt">
      <h3 class="about-section__item-name">{{this.name}}</h3>
      <p class="about-section__item-position">{{this.position}}</p>
      <about-item-contacts
        class="about-section__item-contacts"
        :name=name
      ></about-item-contacts>
    </div>
  </div>
</template>

<script>
  import AboutItemContacts from './landing-about-item-contacts'

  export default {
    name: "AboutItem",
    components: {
      'about-item-contacts': AboutItemContacts,
    },
    props: {
      name: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        photo: ''
      }
    },
    created() {
      switch (this.name) {
        case 'Анна Манько':
          this.photo = require('../../../assets/img/about_photo2.jpg');
          break;
        case 'Данііл Логвінов':
          this.photo = require('../../../assets/img/about_photo1.jpg');
          break;
        case 'Михайло Гурський':
          this.photo = require('../../../assets/img/about_photo3.jpg');
          break;
      }
      // this.computePhoto();
    },
    computed: {
      computePhoto() {
        // let photo = document.getElementsByClassName('about-section__item-pic__img')[0].src;
        switch (this.name) {
          case 'Анна Манько':
            this.photo = '../../../assets/img/about_photo2.jpg';
            break;
          case 'Даніїл Логвінов':
            this.photo = '../../../assets/img/about_photo1.jpg';
            break;
          case 'Михайло Гурський':
            this.photo = '../../../assets/img/about_photo3.jpg';
            break;
        }
      }
    }
  }
</script>

<style scoped>


  .about-section__item {
    text-align: center;
    height: 460px;
    padding: 20px;
    margin-top: 40px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    transition: 0.3s;
  }

  .about-section__item:hover {
    /*background: rgba(30, 163, 164, 0.4);*/
  }

  .about-section__item-pic {
    width: 80%;
    margin: auto;
    /*border: 2px solid #1ea3a4;*/
    border: 2px solid #572e81;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }

  .about-section__item-pic__img {
    transform: scale(1.1,1.1);
    /*width: 110%;*/
    /*height: 110%;*/

  }
  /*.about-section .row .col-lg-4:nth-child(3) .pic {*/
  /*border-color: #7d42b9;*/
  /*}*/

  /*.about-section .row .col-lg-4:nth-child(4) .pic {*/
  /*border-color: #80b317;*/
  /*}*/

  /*.about-section__item-pic:before {*/
    /*content: '';*/
    /*width: 300px;*/
    /*height: 300px;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*background: rgba(0, 0, 0, 0.5);*/
    /*border-radius: 50%;*/
  /*}*/

  .about-section__item-txt {
    margin-top: 20px;
  }

  .about-section__item-name {
    font: 24px "PT Sans Bold";
    margin: 0;
  }

  .about-section__item-position {
    font-size: 16px;
    margin: 5px auto 10px;
  }

  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width: 1200px) {

  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width: 992px) {
    .about-section__item {
      height: 350px;
    }

    .about-section__item-name {
      font-size: 20px;
    }

    .about-section__item-contacts {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .about-section__item {
      height: 260px;
      width: 60%;
      padding-top: 80px;
      margin: 140px auto 0;
    }

    .about-section__item-pic {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
    }

  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 567px) {
    .about-section__item {
      height: 185px;
      padding-top: 40px;
    }

    .about-section__item-pic {
      width: 160px;
    }

    .about-section__item-position {
      font-size: 12px;
    }

    .about-section__item-name {
      font-size: 18px;
    }
  }

</style>
