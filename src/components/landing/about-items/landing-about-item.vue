<template>
  <v-app style="background: transparent">
    <v-card
      class="about-section__item"
      :class="{'elevation-8': this.itemHoverTriggerClass}"
      @mouseover="itemHoverTriggerClass = true"
      @mouseleave="itemHoverTriggerClass = false"
    >
      <div>
        <div class="about-section__item-pic">
          <img class="about-section__item-pic__img" :src="photo" alt="">
        </div>
      </div>
      <div class="about-section__item-txt">
        <h3 class="about-section__item-name">{{this.name}}</h3>
        <p class="about-section__item-position">{{this.position}}</p>
        <about-item-contacts
          class="about-section__item-contacts"
          :name=name
        ></about-item-contacts>
      </div>
    </v-card>
  </v-app>
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
        photo: '',
        itemHoverTriggerClass: false
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
    /*width: 320px;*/
    height: 300px;
    padding: 20px;
    background: transparent;
    /*background: rgba(255, 255, 255, 0.7);*/
    box-shadow: none;
    transition: 0.3s;
  }

  /*.about-section__item:hover {*/
    /*background: rgba(255, 255, 255, 0.7);*/
  /*}*/

  .about-section__item-pic {
    width: 80%;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }

  .about-section__item-pic__img {
    transform: scale(1.1,1.1);
  }

  .about-section__item-txt {
    margin-top: 5px;
  }

  .about-section__item-name {
    font: 20px "PT Sans Bold";
    margin: 0;
  }

  .about-section__item-position {
    font-size: 14px;
    margin: 5px auto;
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
