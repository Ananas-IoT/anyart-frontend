<template>
  <v-app>
    <!--wrap is needed for left color line-->
    <div class="sketch-tab-item__wrap">
      <v-card class="sketch-tab-item">

        <v-card-text class="sketch-tab-item__text">

          <div class="img-open-hover__wrap sketch-tab-item__photo-preview" @click.stop="openImage">
            <img class="img-open-hover__img" :src=this.sketch.sketch_images[0] alt="">
            <span class="img-open-hover__span"></span>
          </div>

          <h4 class="sketch-tab-item__text-title">Artist: {{this.sketch.owner.username}}</h4>
          <!--<p class="sketch-tab-item__text-description">{{this.sketch.sketch_description}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem culpa dicta eaque hic in, ipsam laborum molestiae nemo, omnis placeat provident quae quidem reprehenderit tempora tenetur totam ullam voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid asperiores culpa, cum cupiditate delectus dolorem eos expedita facilis iure laborum non, numquam officia possimus quae quam, saepe similique velit?</p>-->

          <p class="sketch-tab-item__text-description">{{this.sketch.sketch_description}}</p>
            <span class="sketch-tab-item__text-date">{{this.sketch.date}}</span>
        </v-card-text>

        <v-card-actions class="sketch-tab-item__vote-wrap">
          <v-btn
            class="sketch-tab-item__vote-btn"
            v-bind:class="{voted:isVoted}"
            :loading = voteLoadingTriggerAnimation
            :disabled="!this.user.username"
            @click="vote()"
          >{{this.sketch.sketch_votes}} votes
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-app>
</template>

<script>
  import eventBus from '../../../eventBus';
  import {voteForSketch} from "../../../api/mapSketches";

  export default {
    name: "SketchTabItem",
    props: {
      sketch: Object
    },
    data() {
      return {
        user: null,
        isVoted: false,
        voteLoadingTriggerAnimation: false
      }
    },
    created() {
      this.user = this.$store.getters.getUser;
      this.sketch.date = new Date(this.sketch.created_at).toLocaleDateString();
      this.isVoted = this.sketch.vote_id;
    },
    mounted() {

    },
    methods: {
      //to Map component
      openImage() {
        eventBus.$emit('openImage', this.sketch.sketch_images[0]);
      },

      vote() {
        return new Promise((resolve, reject) => {
          voteForSketch(this.sketch.id, this.sketch.vote_id, resolve, reject);
          this.voteLoadingTriggerAnimation = true;
        }).then(
          response => {
            this.sketch.vote_id = response;
            this.isVoted = !this.isVoted;
            this.isVoted ? this.sketch.sketch_votes++ : this.sketch.sketch_votes--;
            this.voteLoadingTriggerAnimation = false;
          },
          error => {
            this.voteLoadingTriggerAnimation = false;
          }
        );
      }
    }
  }
</script>

<style scoped>

  .sketch-tab-item__wrap:before {
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

  .sketch-tab-item {
    min-height: 200px;
    padding-bottom: 50px;
    margin: 10px 5px 0;
    transition: 0.3s;
  }

  .sketch-tab-item__text {
    vertical-align: top;
    display: inline-block;
    /*width: calc(100% - 200px);*/
  }

  .sketch-tab-item__text-title {
    margin-bottom: 10px;
    font-size: 17px;
    font-family: "PT Sans Bold";
  }

  .sketch-tab-item__text-description {
    text-align: justify;
    font-size: 16px;
  }

  .sketch-tab-item__text-date {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: inline-block;
    margin-left: 70px;
    font-size: 12px;
    color: #696969;
  }

  .sketch-tab-item__photo-preview {
    float: right;
    margin: 15px 0 0 15px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }

  .sketch-tab-item__photo-preview .img-open-hover__img {
    vertical-align: top;
    max-width: 200px;
    max-height: 200px;
  }

  .sketch-tab-item__vote-wrap {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

  .sketch-tab-item__vote-btn {
    /*font-size: 36px;*/
  }

  .sketch-tab-item__vote-btn.voted {
    color: #fff;
    background: #770d85 !important;
  }
</style>
