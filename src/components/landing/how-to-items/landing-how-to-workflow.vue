<template>
  <div class="how-to-section__workflow">

    <howto-workflow-item
      :text="{
        title: 'Виберіть місце та завантажте фото',
        body: 'У пошуковій стрічці на карті знайдіть місце, завантажте до нього фото та напишіть коментар'
      }"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to__workflow-item__right"
      :text="{
        title: 'Місце затверджує влада',
        body: 'Після цього представники влади мають перевірити, чи можна малювати на стіні, яку ви запропонували'
      }"
    ></howto-workflow-item>

    <howto-workflow-item
      :text="{
        title: 'Художник запропонує свій скетч',
        body: 'Художник може обрати вашу стіну і завантажити до неї свій скетч'
      }"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to__workflow-item__right"
      :text="{
        title: 'Він отримає дозвіл від влади',
        body: 'Після цього представники влади перевірять скетч та дадуть дозвіл на малювання'
      }"
    ></howto-workflow-item>

    <howto-workflow-item
      :text="{
        title: 'Голосуйте за найкращі зі скетчів',
        body: 'Лише ви обираєте, який скетч є найкращим для цього місця!'
      }"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to__workflow-item__right"
      :text="{
        title: 'Насолоджуйтесь!',
        body: 'Без коментарів :)'
      }"
    ></howto-workflow-item>

  </div>
</template>

<script>
  import HowtoWorkflowItem from './landing-how-to-workflow-item1'

  export default {
    name: "HowtoWorkflow",
    components: {
      'howto-workflow-item': HowtoWorkflowItem
    }
  }
</script>

<style scoped>
  .how-to-section__workflow {
    position: relative;
    width: 80%;
    margin: 100px auto 0;
  }

  .how-to-section__workflow:before {
    content: '';
    position: absolute;
    top: -35px;
    left: 50%;
    width: 240px;
    height: 1100px;
    background: url("../../../assets/img/how-to-section/howto-link.png") no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    transform: translate(-60%, 0) scale(-1, 1);
    pointer-events: none;
    z-index: 1;
  }

  .how-to__workflow-item__right {
    /*text-align: right;*/
  }
</style>
