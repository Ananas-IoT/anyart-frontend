<template>
  <div class="how-to-section__workflow">

    <howto-workflow-item
      :text="'Виберіть місце та завантажте фото'"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to__workflow-item__right"
      :text="'Місце затверджує влада'"
    ></howto-workflow-item>

    <howto-workflow-item
      :text="'Художник запропонує свій скетч'"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to__workflow-item__right"
      :text="'Він отримає дозвіл від влади'"
    ></howto-workflow-item>

    <howto-workflow-item
      :text="'Голосуйте за найкращі зі скетчів'"
    ></howto-workflow-item>

    <!--<howto-workflow-item-->
      <!--class="how-to__workflow-item__right"-->
      <!--:text="'Після затвердження художник приступить до роботи'"-->
    <!--&gt;</howto-workflow-item>-->

    <howto-workflow-item
      class="how-to__workflow-item__right"
      :text="'Насолоджуйтесь!'"
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

  .how-to__workflow-item__right {
    text-align: right;
  }
</style>
