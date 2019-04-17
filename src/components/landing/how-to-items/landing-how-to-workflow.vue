<template>
  <div class="how-to-section__workflow">

    <howto-workflow-item
      :text="'Виберіть місце та завантажте фото'"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to-section__workflow-item__right"
      :text="'Художник запропонує свій скетч'"
    ></howto-workflow-item>

    <howto-workflow-item
      :text="'Голосуйте за найкращі з них'"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to-section__workflow-item__right"
      :text="'Після затвердження художник приступить до роботи'"
    ></howto-workflow-item>

    <howto-workflow-item
      :text="'Насолоджуйтесь!'"
    ></howto-workflow-item>

  </div>
</template>

<script>
  import HowtoWorkflowItem from './landing-how-to-workflow-item'

  export default {
    name: "HowtoWorkflow",
    components: {
      'howto-workflow-item': HowtoWorkflowItem
    }
  }
</script>

<style scoped>

  .how-to-section__workflow {
    margin-top: 100px;
    position: relative;
  }


</style>
