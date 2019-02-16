<template>
  <div class="map-body">

    <common-form
      class="map__common-form"
      v-if="!this.destroyFormComponent"
      :type='this.currentFormType'
      :requestAddress=this.currentPlace
      v-on:addMarker="addMarker"
      v-on:clearPosition="clearPosition"
      v-bind:class="{opened: openedFormClassTrigger}">
    </common-form>

    <div
      class="map__form__shadow"
      @click="openedFormClassTrigger = !openedFormClassTrigger"></div>

    <div class="container-fluid">
      <div class="row no-gutters">

        <user-header></user-header>

        <div class="col-12">
          <div class="row no-gutters">
            <div class="col-lg-8">
              <div class="map__search-form">
                <label>
                  <!-- it's map search form-->
                  <gmap-autocomplete
                    class="map__search-form-input"
                    @place_changed="setPlace">
                  </gmap-autocomplete>
                  <button class="map__search-form-button" @click="createForm">Add</button>
                </label>
                <br/>
              </div>
              <br>


              <request-tab
                class="map__request-open"
                v-if="this.openRequestTab"
                :index="indexToOpenedReq"
                v-on:closeRequest="openRequestTab = false"
                @click.native="openedFormClassTrigger = false"
              >
              </request-tab>

              <!--it's map-->
              <gmap-map
                class="map__map"
                :center="mapCenter"
                :zoom="12"
              >
                <!--it's markerList-->
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in requestList"
                  :position="m.position"
                  @click="mapCenter=m.position"
                ></gmap-marker>
              </gmap-map>
            </div>

            <div class="col-lg-4">
              <request-list class="map__request-list"
                            :requestList=this.requestList
              ></request-list>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './AppHeader'
  import eventBus from '../eventBus'
  import RequestTemplate from './map/CommonForm'
  import RequestList from './map/RequestList'
  import RequestOpened from './map/RequestTab'


  export default {
    name: "Map",
    components: {
      "user-header": AppHeader,
      "common-form": RequestTemplate,
      "request-list": RequestList,
      "request-tab": RequestOpened
    },
    data() {
      return {
        mapCenter: {lat: 49.85, lng: 24.0166666667},
        requestList: [],
        markerList: [],
        // places: [],

        //place on map search form
        currentPlace: null,

        openedFormClassTrigger: false,
        currentFormType: 'request',
        destroyFormComponent: true,
        openRequestTab: false,

        //sends item index in request list
        indexToOpenedReq: null
      };
    },

    created() {
      this.requestList = this.$store.getters.getAllRequests;

      //from RequestListItem
      eventBus.$on('uploadSketch', () => {
        console.log('test');
        this.destroyFormComponent = false;
        this.currentFormType = 'sketch';
        this.openedFormClassTrigger = true;
      });

      //from RequestList
      eventBus.$on('openRequestTab', (index) => {
        this.indexToOpenedReq = index;
        this.openRequestTab = !this.openRequestTab;
      });
    },

    methods: {
      //creates common-form component
      createForm() {
        this.destroyFormComponent = false;
        //"opened" animation doesnt works :c
        this.openedFormClassTrigger = !this.openedFormClassTrigger;
      },

      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },

      //gets location from RequestTemplate, draws marker there
      addMarker(reqToAdd) {
        this.openedFormClassTrigger = true;
        // this.requests.push(reqToAdd);
      },

      //get user location
      geolocate() {
        navigator.geolocation.getCurrentPosition(position => {
          this.mapCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      },

      //clears current place field, when request is completed (to destroy ReqTemplate component)
      clearPosition() {
        this.currentPlace = false;
        this.destroyFormComponent = true;
      },
    }
  }
</script>

<style scoped>

  .map-body {
    padding-top: 45px;
  }

  .container-fluid {
    padding: 0;
  }

  .map__map {
    width: 100%;
    height: calc(100vh - 78px);
    display: inline-block;
  }

  .map__common-form {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -150vh);
    transition: 0.3s;
    opacity: 0;
    z-index: 100;
  }

  .map__form__shadow {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    pointer-events: none;
    z-index: 90;
  }

  .map__common-form.opened {
    transform: translate(-50%, 10vh);
    opacity: 1;
  }

  .map__common-form.opened + .map__form__shadow {
    pointer-events: auto;
    opacity: 1;
  }

  .map__search-form {
    position: absolute;
    top: 37px;
    left: 30%;
    /*transform: translateX(0);*/
    z-index: 50;
  }

  .map__search-form-input {
    width: 400px;
    padding: 10px 25px;
    border: none;
    border: 1px solid #000;
    border-radius: 3px;
  }

  .map__search-form-button {
    width: 58px;
    height: 38px;
    margin-left: -2px;
    font-family: "PT Sans Bold";
    text-transform: uppercase;
    background: #efefef;
    border: 1px solid #000;
    border-radius: 3px;
    cursor: pointer;
  }

  .map__request-list {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 92vh;
    overflow-y: scroll;
  }

  .map__request-open {
    position: absolute;
    top: 35px;
    left: 10px;
    right: 10px;
    bottom: 15px;
    /*background: #000;*/
    z-index: 80;
  }

</style>
