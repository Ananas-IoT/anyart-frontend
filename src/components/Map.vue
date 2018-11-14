<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      @click="addMarker"
      style="width:100%;  height: 480px;"
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

  export default {
    name: "Map",
    data() {
      return {
        center: {lat: 49.85, lng: 24.0166666667},
        markers: [],
        // places: [],
        currentPlace: null
      };
    },

    mounted() {
      // this.geolocate();

    },

    methods: {
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },
      addMarker(event) {
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
      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      },
    }
  }
</script>

<style scoped>

</style>
