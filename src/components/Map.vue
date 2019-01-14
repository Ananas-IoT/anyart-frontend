<template>
  <div class="body">

    <request-template
      v-if="currentPlace"
      :requestAddress=this.currentPlace
      v-on:addMarker="addMarker"
      v-on:clearPosition = "clearPosition"
      v-bind:class="{opened: openedRequest}"
      class="request-template">
    </request-template>
    <div @click="openedRequest = !openedRequest" class="request-shadow"></div>

    <div class="container-fluid">
      <div class="row no-gutters">

        <user-header></user-header>
        <div class="col-12">
          <div class="row no-gutters">
            <div class="col-lg-8">
              <div class="search-form">
                <label>
                  <gmap-autocomplete
                    @place_changed="setPlace">
                  </gmap-autocomplete>
                  <button @click="openedRequest = !openedRequest">Add</button>
                </label>
                <br/>
              </div>
              <br>
              <gmap-map
                :center="center"
                :zoom="12"
                style="width: 100%; height: calc(100vh - 78px); display: inline-block;"
              >
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in requests"
                  :position="m.position"
                  @click="center=m.position"
                ></gmap-marker>
              </gmap-map>

            </div>
            <div class="col-lg-4">
              <request-list class="request-list"
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
  import RequestTemplate from './map/RequestTemplate'
  import RequestList from './map/RequestList'
  import Header from './AppHeader'


  export default {
    name: "Map",
    components: {
      "user-header": Header,
      "request-template": RequestTemplate,
      "request-list": RequestList
    },
    data() {
      return {
        center: {lat: 49.85, lng: 24.0166666667},
        requests: [],
        markers: [],
        // places: [],
        currentPlace: null,
        openedRequest: false
      };
    },

    mounted() {
      // this.geolocate();

    },
    created() {
      this.requests = this.$store.getters.getAllRequests;
    },

    methods: {
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
      }
    }
  }
</script>

<style scoped>

  .body {
    padding-top: 45px;
    /*font-size: 0;*/
  }

  .container-fluid {
    padding: 0;
  }

  .request-template {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -150vh);
    transition: 0.3s;
    opacity: 0;
    z-index: 100;
  }

  .request-shadow {
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

  .request-template.opened {
    transform: translate(-50%, 10vh);
    opacity: 1;
  }

  .request-template.opened + .request-shadow {
    pointer-events: auto;
    opacity: 1;
  }

  .search-form {
    position: absolute;
    top: 37px;
    left: 30%;
    /*transform: translateX(0);*/
    z-index: 50;
  }

  .search-form input {
    width: 400px;
    padding: 10px 25px;
    border: none;
    border: 1px solid #000;
    border-radius: 3px;
  }

  .search-form button {
    width: 58px;
    height: 38px;
    margin-left: -2px;
    font-family: "PT Sans Bold";
    text-transform: uppercase;
    background: #efefef;
    border: 1px solid #000;
    border-radius: 3px;
  }

  .request-list {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 92vh;
    overflow-y: scroll;
  }

</style>
