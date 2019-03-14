<template>
  <div class="user-message__opened">
    <div class="user-message__opened__title">{{this.message.title}}</div>
    <div class="user-message__opened__subtitle">{{this.message.subtitle}}</div>
    <div class="user-message__opened__body">{{this.message.body}}</div>
  </div>
</template>

<script>
  export default {
    name: "UserMessageOpened",
    props: {
      message: {
        default: function () {
          return {
            title: 'default_title',
            subtitle: 'default_address',
            body: 'lorem ipsum dolor sit amet'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .user-message__opened {
    width: 500px;
    min-height: 350px;
    padding: 30px;
    background: #eee;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  .user-message__opened__title {
    font-size: 20px;
    font-family: "PT Sans Bold";
  }
</style>
