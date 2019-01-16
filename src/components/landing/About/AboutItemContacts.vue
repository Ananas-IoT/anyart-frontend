<template>
  <div class="about-section__item-contacts">
    <a href=""><img src="../../../assets/img/telegram_icon.png" alt="">Telegram</a>
    <a href="mailto:"><img src="../../../assets/img/gmail_icon.png" alt="">Mail</a>
  </div>
</template>

<script>
    export default {
        name: "AboutItemContacts"
    }
</script>

<style scoped>

  .about-section__item-contacts a {
    display: block;
    width: fit-content;
    margin: 5px auto 0;
    font-size: 14px;
  }

  .about-section__item-contacts img {
    vertical-align: -3px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
</style>
