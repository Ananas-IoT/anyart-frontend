<template>
  <div class="user-message">
    <div class="user-message__title">{{this.message.title}}</div>
    <div class="user-message__subtitle">{{this.message.subtitle}}</div>
    <div class="user-message__body">{{this.message.body}}</div>
  </div>
</template>

<script>
  export default {
    name: "UserMessage",
    props: {
      message: {
        default: function () {
          return {
            title: 'default_ootitle',
            subtitle: 'default_ooaddress',
            body: 'lorem ipsum dolor sit amet'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .user-message {
    height: 120px;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
  }

  .user-message__title {
    font-size: 20px;
    font-family: "PT Sans Bold";
  }
</style>
