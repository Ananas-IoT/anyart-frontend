<template>
  <div class="body">
    <user-header></user-header>

    <request-template
      :requestAddress=this.currentPlace
      v-on:addMarker="addMarker"
      v-bind:class="{opened: openedRequest}"
      class="request-template">
    </request-template>

    <div @click="openedRequest = !openedRequest" class="request-shadow"></div>
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
      @click="openedRequest = !openedRequest"
      style="width:100%;  height: 85vh;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import RequestTemplate from './map/RequestTemplate'
  import Header from './Header'


  export default {
    name: "Map",
    components: {
      "user-header": Header,
      "request-template": RequestTemplate
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
      this.showMarkers();
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
      addMarker(event) {
        this.openedRequest = false;

        let marker;
        if (this.currentPlace) {
          marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          };
        } else {
          marker = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          };
        }
        this.markers.push({position: marker});
        // this.places.push(this.currentPlace);
        // this.center = marker;
        this.currentPlace = null;
      },
      showMarkers() {
        for (var i = 0; i < this.requests.length; i++) {
          let request = this.requests[i];
          var marker = {
            lat: request.address.geometry.location.lat(),
            lng: request.address.geometry.location.lng()
          };
          this.markers.push({position: marker});
        }
      },
      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    }
  }
</script>

<style>

  .body {
    padding-top: 45px;
  }

  .request-template {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50vh);
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
    position: absolute; top: 100px; left: 50%;
    transform: translateX(-50%);
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
    width: 58px; height: 38px;
    margin-left: -2px;
    border: 1px solid #000;
    border-radius: 3px;
  }

</style>
