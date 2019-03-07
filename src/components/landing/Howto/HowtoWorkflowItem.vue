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
    height: 310px;
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
    background: url("../../../assets/img/how-to-section/how-to-workflow/workflow-next.png") no-repeat;
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
    font: 28px "PT Sans Italic";
  }

  .how-to-section__workflow-item-pic {
    display: inline-block;
    width: 60%;
    height: 206px;
    background: url("../../../assets/img/how-to-section/how-to-workflow/workflow_1.jpg") center center no-repeat;
    /*background-size: cover;*/
    -webkit-background-size: contain;
    background-size: contain;
    margin-left: 40px;
    margin-bottom: 10px;
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
    margin: 60px 40px 0 0;
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
    background-image: url("../../../assets/img/how-to-section/how-to-workflow/workflow_2.jpg");
    /*-webkit-background-size: contain;*/
    /*background-size: contain;*/
    border-color: #7d42b9;
  }

  .how-to-section__workflow-item:nth-child(3)
  .how-to-section__workflow-item-pic {
    width: 360px;
    height: 200px;
    background-image: url("../../../assets/img/how-to-section/how-to-workflow/workflow_3.jpg");
    background-size: contain;
    border-color: #27b46b;
  }

  .how-to-section__workflow-item:nth-child(4)
  .how-to-section__workflow-item-pic {
    float: right;
    width: 360px;
    height: 200px;
    background-image: url("../../../assets/img/how-to-section/how-to-workflow/workflow_4.jpg");
    border-color: #80b317;
  }

  .how-to-section__workflow-item:nth-child(5)
  .how-to-section__workflow-item-pic {
    background-image: url("../../../assets/img/main_1.jpg");
    background-size: cover;
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

  .how-to-section__workflow .how-to-section__workflow-item:nth-child(5) p {
    margin-top: 80px;
    margin-left: 20px;
    font-size: 24px;
  }
  /**/


  /*==========  Desktop First Method  ==========*/

  /* Large Devices, Wide Screens */
  @media only screen and (max-width : 1200px) {

  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .how-to-section__workflow-item {
      height: 240px;
    }

    .how-to-section__workflow-circle {
      width: 170px;
      height: 170px;
    }

    .how-to-section__workflow-add-circle {
      width: 160px;
      height: 160px;
    }

    .how-to-section__workflow-item-description {
      font-size: 20px !important;
    }

    .how-to-section__workflow
    .how-to-section__workflow-item:nth-child(1) p {
      margin-top: 40px;
    }

    .how-to-section__workflow-item-pic {
      width: 60%;
      height: 130px;
      background: url("../../../assets/img/how-to-section/how-to-workflow/workflow_1.jpg") center center no-repeat;
      /*background-size: cover;*/
      -webkit-background-size: contain;
      background-size: contain;
      margin-left: 40px;
      margin-bottom: 10px;
      border: 1px solid #770d85;
    }


    .how-to-section__workflow-item:nth-child(3)
    .how-to-section__workflow-item-pic {
      width: 240px;
      height: 140px;
      /*margin-left: 0;*/
    }

    .how-to-section__workflow-item:nth-child(4)
    .how-to-section__workflow-item-pic {
      width: 240px;
      height: 140px;
      margin-top: 50px;
      /*margin-right: 0;*/
    }

    .how-to-section__workflow
    .how-to-section__workflow-item:nth-child(5) p {
      margin: 70px 0 0;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .how-to-section__workflow-item {
      height: 240px;
    }

    .how-to-section__workflow-circle {
      display: block;
      width: 100%;
      height: auto;
      background: none;
      border-radius: 0;
    }

    .how-to-section__workflow-add-circle {
      width: 100%;
      height: auto;
      background: none;
      border-radius: 0;
    }

    .how-to-section__workflow-add-circle p {
      width: 100%;
      margin-top: 15px !important;
    }

    /*(перехід)*/
    .how-to-section__workflow-item:before {
      display: none;
    }

    .how-to-section__workflow-item-pic {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80% !important;
      display: block;
      margin: 0 auto !important;
      transform: translate(-50%, -30%);
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 567px) {

    .how-to-section__workflow-item-pic {
      position: absolute;
      width: 100% !important;
    }

    .how-to-section__workflow-item:nth-child(1)
    .how-to-section__workflow-item-pic{
      height: 90px;
    }
  }
</style>
