<template>
  <v-app>
    <!--wrap is needed for left color line-->
    <div class="user-sketch-item__wrap">
      <v-card class="user-sketch-item">

        <div class="user-sketch-item__actions">
          <v-btn
            color="primary"
            @click=""
            class="user-sketch-item__actions__btn"
            v-text="$ml.get('user-profile-request-actions')[0]"
          ></v-btn>
          <v-btn
            color="default"
            @click=""
            class="user-sketch-item__actions__btn"
            v-text="$ml.get('user-profile-request-actions')[1]"
          ></v-btn>
        </div>

        <v-card-text class="user-sketch-item__text">

          <div class="img-open-hover__wrap user-sketch-item__photo-preview">
            <img class="img-open-hover__img" :src="this.sketch.sketch_images[0]" alt="">
            <span class="img-open-hover__span"></span>
          </div>

          <h4 class="user-sketch-item__text-title">{{this.sketch.owner.username}}</h4>
          <!--<p class="sketch-tab-item__text-description">{{this.sketch.sketch_description}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem culpa dicta eaque hic in, ipsam laborum molestiae nemo, omnis placeat provident quae quidem reprehenderit tempora tenetur totam ullam voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid asperiores culpa, cum cupiditate delectus dolorem eos expedita facilis iure laborum non, numquam officia possimus quae quam, saepe similique velit?</p>-->

          <p class="user-sketch-item__text-description">{{this.sketch.sketch_description | textLength(160)}}</p>
        </v-card-text>

        <div class="user-sketch-item__add-info">
          <div class="user-sketch-item__add-info__votes">{{this.sketch.sketch_votes}}{{this.computeVotesNum}}</div>
          <div class="user-sketch-item__add-info__date">01.01.1974</div>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>

  export default {
    name: "UserSketchItem",
    props: {
      sketch: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
    },
    data() {
      return {
        user: null,
        isVoted: true
      }
    },
    computed: {
      computeVotesNum() {
        if (this.sketch.sketch_votes === 1) return this.$ml.get('opened-request-sketch-votes')[0];
        return this.$ml.get('opened-request-sketch-votes')[1];
      }
    },
    methods: {
      deleteSketch() {
        this.$emit('deleteSketch', this.index, 'sketch');
      }
    }
  }
</script>

<style scoped>

  .user-sketch-item__wrap:before {
    content: '';
    position: absolute;
    left: -7px;
    top: 10px;
    bottom: 0;
    width: 20px;
    background: #952026;
    border-radius: 5px;
    z-index: 0;
  }

  .user-sketch-item {
    position: relative;
    min-height: 120px;
    max-height: 160px;
    margin: 10px 5px 0;
    transition: 0.3s;
  }


  .user-sketch-item:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    /*border-radius: 4px;*/
    z-index: 1;
    transition: 0.3s;
    pointer-events: none;
    opacity: 0;
  }

  .user-sketch-item:hover:before {
    pointer-events: auto;
    opacity: 1;
  }

  .user-sketch-item__actions {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
  }

  .user-sketch-item:hover .user-sketch-item__actions {
    pointer-events: auto;
    opacity: 1;
  }

  .user-sketch-item__text {
    vertical-align: top;
    display: inline-block;
  }

  .user-sketch-item__text-title {
    margin-bottom: 4px;
    font-size: 14px;
    font-family: "PT Sans Bold";
  }

  .user-sketch-item__text-description {
    max-height: 90px;
    text-align: justify;
    font-size: 13px;
    overflow-y: hidden;
  }

  .user-sketch-item__photo-preview {
    float: right;
    margin: 15px 0 0 15px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }

  .user-sketch-item__photo-preview .img-open-hover__img {
    display: block;
    max-width: 100px;
    max-height: 100px;
  }


  .user-sketch-item__add-info {
    text-align: right;
    position: absolute;
    bottom: 5px;
    left: 20px;
    /* ot baldy :/ */
    width: 300px;
    font-size: 14px;
  }

  .user-sketch-item__add-info__status {
    display: inline-block;
    float: left;
  }

  .user-sketch-item__add-info__votes {
    position: relative;
    display: inline-block;
    padding-left: 36px;
    font-family: "PT Sans BoldItalic";
  }

  .user-sketch-item__add-info__date {
    display: inline-block;
    margin-left: 70px;
    font-size: 12px;
    color: #696969;
  }
</style>
