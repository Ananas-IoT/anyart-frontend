<template>
  <div class="map-body">

    <!--<request-form-->
    <!--class="map__request-form"-->
    <!--v-if="currentPlace"-->
    <!--:type = this.currentType-->
    <!--:requestAddress=this.currentPlace-->
    <!--v-on:addMarker="addMarker"-->
    <!--v-on:clearPosition="clearPosition"-->
    <!--v-bind:class="{opened: openedRequest}">-->
    <!--</request-form>-->


    <component
      class="map__request-form"
      v-bind:is="this.isRequestForm"
      :type='this.currentType'
      :requestAddress=this.currentPlace
      v-on:addMarker="addMarker"
      v-on:clearPosition="clearPosition"
      v-bind:class="{opened: openedRequest}">
    </component>

    <div @click="openedRequest = !openedRequest" class="map__request-form__shadow"></div>

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

              <!--it's map-->
              <gmap-map
                class="map__map"
                :center="center"
                :zoom="12"
              >
                <!--it's markers-->
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in requests"
                  :position="m.position"
                  @click="center=m.position"
                ></gmap-marker>
              </gmap-map>
            </div>

            <div class="col-lg-4">
              <request-list class="map__request-list"
                            :requestList=this.requests
              ></request-list>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../eventBus'
  import RequestTemplate from './map/RequestForm'
  import RequestList from './map/RequestList'
  import AppHeader from './AppHeader'


  export default {
    name: "Map",
    components: {
      "user-header": AppHeader,
      "request-form": RequestTemplate,
      "request-list": RequestList
    },
    data() {
      return {
        center: {lat: 49.85, lng: 24.0166666667},
        requests: [],
        markers: [],
        // places: [],
        currentPlace: null,
        openedRequest: false,
        currentType: 'request',
        isRequestForm: null
      };
    },

    mounted() {
      // this.geolocate();

    },
    created() {
      this.requests = this.$store.getters.getAllRequests;

      eventBus.$on('uploadSketch', () => {
        this.isRequestForm = 'request-form';
        this.currentType = 'sketch';
        this.openedRequest = !this.openedRequest;
      });

      eventBus.$on('openRequest', (index) => {
        alert('request nomer: ' + index);
      });
    },

    methods: {
      createForm() {
        this.isRequestForm = 'request-form';
        //"opened" animation doesnt works :c
        this.openedRequest = !this.openedRequest;
      },

      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },

      //gets location from RequestTemplate, draws marker there
      addMarker(reqToAdd) {
        this.openedRequest = false;
        // this.requests.push(reqToAdd);
      },

      //get user location
      geolocate() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      },

      //clears current place field, when request is completed (to destroy ReqTemplate component)
      clearPosition() {
        this.currentPlace = false;
        this.isRequestForm = null;
      }
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

  .map__request-form {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -150vh);
    transition: 0.3s;
    opacity: 0;
    z-index: 100;
  }

  .map__request-form__shadow {
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

  .map__request-form.opened {
    transform: translate(-50%, 10vh);
    opacity: 1;
  }

  .map__request-form.opened + .map__request-form__shadow {
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

</style>
