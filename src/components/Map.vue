<template>
  <v-app>
    <div class="map-body">

      <common-form
        class="map__common-form"
        v-if="!this.destroyFormComponent"
        :type='this.currentFormType'
        :requestAddress=this.currentPlace
        :workloadId=this.propWorkloadId
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
            <!--<div class="row no-gutters">-->
            <!--<div class="col-lg-8">-->
            <div class="map__search-form">
              <label>
                <!-- it's map search form-->
                <v-form>
                  <v-text-field
                    class="map__search-form-input"
                    v-model="currentPlace.formatted_address"
                    ref="autocomplete"
                    solo
                  >
                  </v-text-field>
                  <v-btn
                    class="map__search-form-button"
                    @click="createForm"
                    color="primary"
                    :disabled="!addressValidation"
                  >
                    Add
                  </v-btn>
                </v-form>
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
                :position="m.location"
                @click="mapCenter=m.position"
              ></gmap-marker>
            </gmap-map>
          </div>

          <v-navigation-drawer
            class="requestDrawer"
            v-model="requestDrawerTriggerIf"
            :width="550"
            absolute
            clipped
            app
          >
            <request-list class="map__request-list"
                          :requestList=this.requestList
            ></request-list>


            <div class="requestDrawerToggler" @click="requestDrawerTriggerIf = !requestDrawerTriggerIf"></div>
          </v-navigation-drawer>
        </div>
      </div>
    </div>

  </v-app>
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
        currentPlace: {

        },

        openedFormClassTrigger: false,
        currentFormType: 'request',
        destroyFormComponent: true,
        openRequestTab: false,
        propWorkloadId: null,

        //sends item index in request list
        indexToOpenedReq: null,
        requestDrawerTriggerIf: true,
        addressValidation: false
      };
    },
    mounted() {

    },
    created() {
      this.requestList = this.$store.getters.getAllRequests;

      this.$gmapApiPromiseLazy().then(() => {
        this.autocomplete = new google.maps.places.Autocomplete(
          (this.$refs.autocomplete.$refs.input),
          {types: ['geocode']}
        );
        this.autocomplete.addListener('place_changed', () => {
          this.currentPlace = this.autocomplete.getPlace();
          if(this.currentPlace.formatted_address !== null) {
            this.addressValidation = true;
          }
        });
      });

      //from RequestListItem
      eventBus.$on('uploadSketch', (workloadId) => {
        this.destroyFormComponent = false;
        this.currentFormType = 'sketch';
        this.propWorkloadId = workloadId;
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
      }
      ,

      //clears current place field, when request is completed (to destroy ReqTemplate component)
      clearPosition() {
        this.currentPlace = false;
        this.destroyFormComponent = true;
      }
      ,
    }
  }
</script>

<style scoped>

  .requestDrawer {
    /*width: 50% !important;*/
    padding-top: 40px;
    /*transform: translateX(-50%) !important;*/
    overflow: visible;
    z-index: 90;
  }

  .requestDrawerToggler {
    position: absolute;
    top: 30%;
    right: -20px;
    width: 40px;
    height: 40px;
    background: #000;
    border-radius: 50%;
    cursor: pointer;
    z-index: -1;
  }

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
    top: 32px;
    right: 50px;
    /*transform: translateX(0);*/
    z-index: 50;
  }

  .map__search-form-input {
    display: inline-block;
    width: 400px;
    margin-right: 5px;
  }

  .map__search-form-button {
    width: 58px;
    height: 42px;
  }

  .map__request-list {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 92vh;
    background: #fcfcfc;
    overflow-y: scroll;
  }

  .map__request-list::-webkit-scrollbar {
    width: 4px;
    background: #fefefe;
  }

  .map__request-list::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
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
