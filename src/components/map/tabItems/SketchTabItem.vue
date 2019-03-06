<template>
  <div class="sketch-tab-item">
    <div class="sketch-tab-item__text">
      <h4 class="sketch-tab-item__text-title">Sketch {{this.index}}</h4>
      <p class="sketch-tab-item__text-description">{{this.sketch.description}}</p>
      <span class="sketch-tab-item__text-date">{{this.sketch.date}}</span>

      <!--<span>{{test}}</span>-->
    </div>
    <img class="sketch-tab-item__photo-preview" src="" alt="">
    <div
      class="sketch-tab-item__rating"
      v-bind:class="{'sketch-tab-item__rating__voted': this.isVoted}"
      @click="upvoteSketch"
    >
        <span
          class="sketch-tab-item__rating-num"
        >
          {{this.sketch.rating}}
        </span>

    </div>

    <div class="sketch-tab-item__approval">
      <div class="sketch-tab-item__approval-status">Approval status: <span>{{sketch.approvalStatus}}</span></div>
      <div class="sketch-tab-item__approval__buttons" v-if="isGovern">
        <div
          class="sketch-tab-item__approval__button sketch-tab-item__approval__button-approve"
          v-bind:class="{'sketch-tab-item__approval__button-approve__approved':approveClassTriggers.approved}"
          @click="sketch.approvalStatus = 'Approved';computeApprovalClassTriggers"
        >Approve</div>
        <div
          class="sketch-tab-item__approval__button sketch-tab-item__approval__button-reject"
          v-bind:class="{'sketch-tab-item__approval__button-reject__rejected':approveClassTriggers.rejected}"
          @click="sketch.approvalStatus = 'Rejected'; computeApprovalClassTriggers"
        >Reject</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SketchTabItem",
    props: {
      sketch: {},
      index: {}
    },
    data() {
      return {
        isArtist: false,
        isGovern: false,
        isVoted: false,
        user: {},
        approveClassTriggers: {
          approved: false,
          rejected: false
        }
        // test: 'jhgjgghf'
      }
    },
    mounted() {
      console.log(this.user.role);
      if (this.user.role === 'artist') {
        this.isArtist = true
      } else if (this.user.role === 'government') {
        this.isGovern = true
      }
      const file = this.sketch.photo;
      this.showPhoto(file);
    },
    created() {
      if (!this.sketch.rating) {
        this.sketch.rating = 80;
        this.sketch.approvalStatus = 'Not approved';
      }
      this.user = this.$store.getters.getUser;
    },
    computed: {
      computeApprovalClassTriggers() {
        if (this.sketch.approvalStatus === 'Approved') {
          this.approveClassTriggers.approved = true;
          this.approveClassTriggers.rejected = false;
        } else if (this.sketch.approvalStatus === 'Rejected') {
          this.approveClassTriggers.rejected = true;
          this.approveClassTriggers.approved = false;
        }
      }
    },
    methods: {
      showPhoto(file) {
        let preview = document.getElementsByClassName('sketch-tab-item__photo-preview')[this.index];
        let reader = new FileReader();
        reader.onloadend = function () {
          preview.src = reader.result;
        };
        reader.readAsDataURL(file);
      },
      upvoteSketch() {
        if (!this.isVoted) {
          this.sketch.rating++;
          // this.test = 'ttt';
          this.isVoted = true;
        }
      }
    }
  }
</script>

<style scoped>
  .sketch-tab-item {
    padding-bottom: 30px;
    border-bottom: 1px solid #000;
  }

  .sketch-tab-item__text {
    display: inline-block;
    width: calc(100% - 150px);
  }

  .sketch-tab-item__text-title {
    margin: 10px 0;
    font-family: "PT Sans Bold";
  }

  .sketch-tab-item__text-date {
    font-size: 14px;
    border-bottom: 0.5px solid #000;
  }

  .sketch-tab-item__photo-preview {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-top: 5px;
    float: right;
    border: 1px solid #770d85;
    border-radius: 2px;
  }

  .sketch-tab-item__rating {
    display: inline-block;
    width: 90px;
    padding: 10px;
    margin-top: 20px;
    background: #fefefe;
    border: 1px solid #770d85;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;
    cursor: pointer;
  }

  .sketch-tab-item__rating:active {
    box-shadow: none;
  }

  .sketch-tab-item__rating-num {
    position: relative;
    padding-right: 30px;
    font-size: 18px;
    font-family: "PT Sans Bold";
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .sketch-tab-item__rating-num:before {
    content: '';
    position: absolute;
    /*top: -5px;*/
    right: 0;
    width: 24px;
    height: 24px;
    background: url("../../../assets/img/upvote.png") no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    transition: 0.3s;
  }

  .sketch-tab-item__rating__voted {
    color: #fff;
    background: #9e10b1;
  }

  .sketch-tab-item__rating__voted .sketch-tab-item__rating-num:before {
    background: url("../../../assets/img/upvote-white.png") no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
  }

  .sketch-tab-item__approval {
    display: inline-block;
    float: right;
    margin: 0 60px 0 0;
  }

  .sketch-tab-item__approval-status {
    font-size: 16px;
  }

  .sketch-tab-item__approval-status span {
    font-size: 18px;
    font-family: "PT Sans Bold";
    text-decoration: underline;
  }

  .sketch-tab-item__approval__button {
    text-align: center;
    display: inline-block;
    width: 120px;
    padding: 5px 10px;
    margin-top: 5px;
    font-family: "PT Sans Bold";
    border: 2px solid #eee;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.3s;
  }

  .sketch-tab-item__approval__button-approve {
    color: #00db00;
    /*border-color: #00db00;*/
  }

  .sketch-tab-item__approval__button-approve:hover,
  .sketch-tab-item__approval__button-approve__approved {
    /*color: #fff;*/
    border-bottom-color: #00db00;
  }

  .sketch-tab-item__approval__button-reject {
    color: #e20000;
    /*border-color: #e20000;*/
  }

  .sketch-tab-item__approval__button-reject:hover,
  .sketch-tab-item__approval__button-reject__rejected {
    /*color: #fff;*/
    border-bottom-color: #e20000;
  }

  /*.btn {*/
  /*width: 140px;*/
  /*padding: 5px;*/
  /*font-family: "PT Sans Regular";*/
  /*}*/
  /*.btn:hover {*/
  /*font-family: "PT Sans Regular";*/
  /*}*/
</style>
