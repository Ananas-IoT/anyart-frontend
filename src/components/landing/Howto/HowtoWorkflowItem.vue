<template>
  <div class="how-to-section__workflow-item">
    <div class="how-to-section__workflow-circle">
      <div class="how-to-section__workflow-add-circle">
        <p class="how-to-section__workflow-item-description">{{this.text}}</p>
      </div>
    </div>
    <div class="how-to-section__workflow-item-pic"></div>
  </div>
</template>

<script>
    export default {
        name: "HowtoWorkflowItem",
      props: ["text"]
    }
</script>

<style scoped>
  .how-to-section__workflow-item {
    width: 80%;
    height: 300px;
    margin: auto;
    border-bottom: 2px dashed #e0e0e0;
    position: relative;
  }
  /*(перехід)*/
  .how-to-section__workflow-item:before {
    content: '';
    width: 130px;
    height: 300px;
    position: absolute;
    top: 50%;
    right: -160px;
    background: url("../../../assets/img/workflow-next.png") no-repeat;
    background-size: contain;
    transform: rotate(180deg);
  }

  /*dashed border before first item*/
  .how-to-section__workflow-item:first-child {
    border-top: 2px dashed #e0e0e0;
  }

  /*disables last item (перехід) */
  .how-to-section__workflow-item:last-child:before {
    display: none;
  }

  .how-to-section__workflow-circle {
    display: inline-block;
    width: 240px;
    height: 240px;
    margin-top: 30px;
    /*background: #61afe4;*/
    background: #770d85;
    border-radius: 50%;
    position: relative;
  }

  .how-to-section__workflow-add-circle {
    content: '';
    width: 220px;
    height: 220px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #eee;
    border-radius: 50%;
  }

  .how-to-section__workflow-item-description {
    text-align: center;
    width: 160px;
    margin: 20% auto 0;
    font: 42px "Gamja Flower";
  }

  .how-to-section__workflow-item-pic {
    display: inline-block;
    width: 60%;
    height: 80%;
    background: url("../../../assets/img/workflow_1.jpg") center center no-repeat;
    background-size: cover;
    margin-left: 40px;
    border: 1px solid #770d85;
  }



  /*MOVES RIGHT CIRCLE ELEMENTS*/
  .how-to-section__workflow-item__right:before {
    right: auto;
    left: -160px;
    transform: rotate(0);
  }

  .how-to-section__workflow-item__right
  .how-to-section__workflow-circle {
    float: right;
  }

  .how-to-section__workflow-item__right
  .how-to-section__workflow-item-pic {
    margin: 30px 40px 0 0;
  }
  /**/

  /*DIFFERENT COLORS*/
  .how-to-section__workflow-item:nth-child(2)
  .how-to-section__workflow-circle {
    background: #7d42b9;
  }

  .how-to-section__workflow-item:nth-child(3)
  .how-to-section__workflow-circle {
    background: #27b46b;
  }

  .how-to-section__workflow-item:nth-child(4)
  .how-to-section__workflow-circle {
    background: #80b317;
  }

  .how-to-section__workflow-item:nth-child(5)
  .how-to-section__workflow-circle {
    background: #1ea3a4;
  }


  .how-to-section__workflow-item:nth-child(2)
  .how-to-section__workflow-item-pic {
    background-image: url("../../../assets/img/workflow_2.jpg");
    border-color: #7d42b9;
  }

  .how-to-section__workflow-item:nth-child(3)
  .how-to-section__workflow-item-pic {
    width: 400px;
    height: 80%;
    background-image: url("../../../assets/img/workflow_3.jpg");
    background-size: contain;
    border-color: #27b46b;
  }

  .how-to-section__workflow-item:nth-child(4)
  .how-to-section__workflow-item-pic {
    background-image: url("../../../assets/img/workflow_2.jpg");
    border-color: #80b317;
  }

  .how-to-section__workflow-item:nth-child(5)
  .how-to-section__workflow-item-pic {
    background-image: url("../../../assets/img/main_1.jpg");
    border-color: #1ea3a4;
  }
  /**/


  /*SIZE CORRECTIONS*/
  .how-to-section__workflow .how-to-section__workflow-item:nth-child(1) p,
  .how-to-section__workflow .how-to-section__workflow-item:nth-child(4) p {
    margin-top: 20px;
  }

  .how-to-section__workflow .how-to-section__workflow-item:nth-child(2) p {
    font-size: 28px;
  }
  /**/
</style>
