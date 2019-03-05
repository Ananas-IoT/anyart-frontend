<template>
  <div class="about-section__item-contacts">
    <a id="test" @click="gotoTelegram"><img src="../../../assets/img/telegram_icon.png" alt="">Telegram</a>
    <a @click="gotoMail"><img src="../../../assets/img/gmail_icon.png" alt="">Mail</a>
  </div>
</template>

<script>
  export default {
    name: "AboutItemContacts",
    props: ['name'],
    data() {
      return {
        telegramLink: '',
        mailLink: ''
      }
    },
    methods: {
      gotoMail() {
        switch (this.name) {
          case 'Анна Манько':
            this.mailLink = '';
            break;
          case 'Даніїл Логвінов':
            this.mailLink = 'nsblnr@gmail.com';
            break;
          case 'Михайло Гурський':
            this.mailLink = '';
            break;
        }
        window.location.href = "mailto: " + this.mailLink;
      },
      gotoTelegram() {
        switch (this.name) {
          case 'Анна Манько':
            this.telegramLink = 'https://t.me/scrubele';
            break;
          case 'Данііл Логвінов':
            this.telegramLink = 'https://t.me/dlohvinov';
            console.log(this.telegramLink);
            break;
          case 'Михайло Гурський':
            this.telegramLink = 'https://t.me/gur_man';
            break;
        }
        window.open(this.telegramLink, '_blank');
      }
    }
  }
</script>

<style scoped>

  .about-section__item-contacts a {
    display: block;
    width: fit-content;
    margin: 5px auto 0;
    font-size: 14px;
    cursor: pointer;
  }

  .about-section__item-contacts img {
    vertical-align: -3px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {
    .about-section__item-contacts a {
      font-size: 14px;
      margin: 0 auto;
    }

    .about-section__item-contacts img {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }
</style>
