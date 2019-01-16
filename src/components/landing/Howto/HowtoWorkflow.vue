<template>
  <div class="how-to-section__workflow">

    <howto-workflow-item
    :text = "'choose the location'"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to-section__workflow-item__right"
      :text = "'take a photo or choose it from gallery and upload'"
    ></howto-workflow-item>

    <howto-workflow-item
    :text = "'write a comment'"
    ></howto-workflow-item>

    <howto-workflow-item
      class="how-to-section__workflow-item__right"
      :text = "'submit and vote for best'"
    ></howto-workflow-item>

    <howto-workflow-item
    :text = "'engoy the result!'"
    ></howto-workflow-item>

  </div>
</template>

<script>
  import HowtoWorkflowItem from './HowtoWorkflowItem'
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
