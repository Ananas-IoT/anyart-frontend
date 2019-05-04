<template>
  <v-app>
    <div class="map-body">

      <opened-image ref="openImage"></opened-image>

      <upload-form
        class="map__upload-form"
        ref="openUploadForm"
        :type=this.currentFormType
        :requestAddress=this.currentPlace
        :workloadId=this.propWorkloadId
        v-on:addMarker="addMarker"
        v-on:clearPosition="clearPosition"
        v-bind:class="{opened: openedFormTriggerClass}">
      </upload-form>

      <div class="container-fluid">
        <div class="row no-gutters">

          <user-header></user-header>

          <div class="col-12">
            <div class="map__search-form">
              <label>
                <!-- it's map search form-->
                <v-form v-show="mapSearchFormTriggerShow && isAuthenticated && !requestDrawerTriggerIf">
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

            <!--it's map-->
            <gmap-map
              class="map__map"
              :center="mapCenter"
              :zoom="12"
              :options="mapOptions"
              @click="infoWindow.open = false"
            >
              <!--it's markerList-->
              <gmap-marker
                :key="index"
                v-for="(req, index) in requestList"
                :position="req.location"
                :icon="computeStatusMarkerIcon(req)"
                @mouseover="openInfoWindow(req, index)"
                @mouseleave="closeInfoWindow()"
                @click="openRequest"
              ></gmap-marker>

              <gmap-info-window
                :options="infoWindow.options"
                :position="infoWindow.position"
                :opened="infoWindow.open"
                @closeclick="infoWindow.open=false"
              >
                <div class="map__info-window" v-html="infoWindow.template"></div>
              </gmap-info-window>
            </gmap-map>
          </div>


          <v-navigation-drawer
            class="requestDrawer"
            v-model="requestDrawerTriggerIf"
            :width="computeDrawerWidth"
            v-touch="{
              left: () => toggleRequestDrawer(),
              right: () => toggleRequestDrawer()
            }"
            absolute
            clipped
            app
          >
            <request-list class="map__request-list custom-scrollbar"
                          :requestList=this.requestList
            ></request-list>


            <div class="requestDrawerToggler" @click="toggleRequestDrawer"
                 v-bind:class="{'requestDrawerToggler__closed': !requestDrawerTriggerIf}"></div>
          </v-navigation-drawer>
        </div>
      </div>
    </div>

  </v-app>
</template>

<script>
  import AppHeader from './the-header'
  import eventBus from '../eventBus'
  import UploadForm from './map/upload-from'
  import RequestList from './map/list-items/request-list'
  import OpenedImage from './map/opened-image'

  export default {
    name: "Map",
    components: {
      "user-header": AppHeader,
      "upload-form": UploadForm,
      "request-list": RequestList,
      "opened-image": OpenedImage
    },
    data() {
      return {
        mapCenter: {lat: 49.85, lng: 24.0166666667},
        requestList: [],

        //place on map search form
        currentPlace: {},

        openedFormTriggerClass: false,
        currentFormType: 'request',
        uploadFormTriggerIf: true,

        mapSearchFormTriggerShow: false,

        //prop goes to Upload Form, for POST sketch request
        propWorkloadId: null,

        //sends item index in request list to request tab
        // delete after rework
        openRequestTab: false,
        indexToOpenedReq: null,
        requestDrawerTriggerIf: true,

        addressValidation: false,
        markerHoverRequest: null,

        infoWindow: {
          position: {lat: 0, lng: 0},
          open: false,
          template: '',
          options: {
            maxWidth: 300,
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
        },
        isAuthenticated: false,
        mapOptions: {
          disableDefaultUI: true
        },
        window: {
          width: 0,
          height: 0
        }
      };
    },
    mounted() {

    },
    created() {
      //get resolution on start
      window.addEventListener('resize', this.handleResize);
      this.handleResize();

      //hide search form if user isn't authenticated
      this.isAuthenticated = this.$store.getters.isAuthenticated;

      this.requestList = this.$store.getters.getAllRequests;

      this.$gmapApiPromiseLazy().then(() => {
        this.autocomplete = new google.maps.places.Autocomplete(
          (this.$refs.autocomplete.$refs.input),
          {types: ['geocode']}
        );
        this.autocomplete.addListener('place_changed', () => {
          this.currentPlace = this.autocomplete.getPlace();
          if (this.currentPlace.formatted_address !== null) {
            this.addressValidation = true;
          }
        });
      });

      eventBus.$on('checkUser', () => {
        this.isAuthenticated = this.$store.getters.isAuthenticated;
      });

      //from RequestListItem
      eventBus.$on('uploadSketch', (workloadId) => {
        // this.uploadFormTriggerIf = true;
        this.createForm();
        this.currentFormType = 'sketch';
        this.propWorkloadId = workloadId;
        this.openedFormTriggerClass = true;
      });

      //triggers OpenedImage component, open images in large
      eventBus.$on('openImage', (src) => {
        this.$refs.openImage.openImage(src);
      });
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    computed: {
      computeDrawerWidth() {
        if (this.window.width >= 768) {
          return 550;
        } else {
          return this.window.width;
        }
      }
    },
    methods: {
      //creates upload-form component
      createForm() {
        this.$refs.openUploadForm.openUploadForm();
      },

      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },

      //gets location from RequestTemplate, draws marker there
      addMarker(reqToAdd) {
        this.openedFormTriggerClass = true;
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
        this.uploadFormTriggerIf = true;
      },
      toggleRequestDrawer() {
        this.mapSearchFormTriggerShow = this.requestDrawerTriggerIf;
        this.requestDrawerTriggerIf = !this.requestDrawerTriggerIf;
        this.infoWindow.open = false;
      },
      computeStatusMarkerIcon(req) {
        req.status = 1;
        switch (req.status) {
          case 1: {
            return {url: require('../assets/img/pin.png')};
          }
        }
      },
      openInfoWindow(marker, index) {
        this.infoWindow.template =
          '<div class="map__info-window__txt-wrap">' +
          '<div class="map__info-window__address">default 42 Street in default City</div>' +
          '<span class="map__info-window__status">Status: status</span>' +
          '</div>' +
          '<img  class="map__info-window__img" src=' + marker.wall_photos[0] + ' alt="">';
        this.infoWindow.position = marker.location;

        this.infoWindow.openedRequest = marker;
        this.infoWindow.openedRequestIndex = index;

        this.infoWindow.open = true;

      },

      closeInfoWindow() {
        alert('mouse leave');
        this.infoWindow.open = false;
      },

      //to RequestList
      openRequest() {
        eventBus.$emit('openRequest', this.infoWindow.openedRequest, this.infoWindow.openedRequestIndex);
        if (!this.requestDrawerTriggerIf) {
          this.toggleRequestDrawer();
        }
      },

      //window width
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      }
    }
  }
</script>

<style>

  .requestDrawer {
    padding-top: 40px;
    overflow: visible;
    z-index: 10;
  }

  .requestDrawerToggler {
    position: absolute;
    top: 30%;
    right: -20px;
    width: 40px;
    height: 40px;
    background: #fff;
    /*border: 0.1px solid #424242;*/
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
    z-index: -1;
  }

  .requestDrawerToggler:hover:before {
    transform: translate(-10%, -50%) rotate(0);
  }

  .requestDrawerToggler.requestDrawerToggler__closed:hover:before {
    transform: translate(-10%, -50%) rotate(180deg);
  }

  .requestDrawerToggler:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    background: url("../assets/img/arrow_left.png") no-repeat center center;
    background-size: contain;
    transform: translate(-10%, -50%) rotate(180deg);
    transition: 0.3s;
  }

  .requestDrawerToggler.requestDrawerToggler__closed:before {
    transform: translate(-10%, -50%) rotate(0);
  }

  .map-body {
    padding-top: 45px;
  }

  .container-fluid {
    padding: 0;
  }

  .map__map {
    width: 100%;
    height: calc(100vh - 68px);
    display: inline-block;
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
    height: 48px;
    margin-top: 2px;
    margin-left: 0;
  }

  .map__info-window__txt-wrap {
    vertical-align: top;
    width: 70%;
    display: inline-block;
  }

  .map__info-window__address {
    font-size: 14px;
    font-family: "PT Sans Bold";
  }

  .map__info-window__status {
    position: absolute;
    bottom: 10px;
    font-size: 12px;
  }

  .map__info-window__img {
    float: right;
    width: 70px;
    height: 70px;
  }

  .map__request-list {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
    background: #fcfcfc;
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

  .marker__hovered {
    position: relative;
  }

  /*==========  Desktop First Method  ==========*/
  /* Small Devices, Tablets */
  @media only screen and (max-width: 768px) {
    .map__search-form {
      position: absolute;
      top: 32px;
      left: 10%;
      right: 10%;
      /*transform: translateX(-50%);*/
      z-index: 50;
    }

    .map__search-form-input {
      width: calc(100% - 100px);
    }

    .map__search-form-button {
      width: 48px;
      height: 48px;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {
    .map__search-form {
      position: absolute;
      top: 32px;
      left: 10%;
      right: 10%;
      /*transform: translateX(-50%);*/
      z-index: 50;
    }

    .map__search-form-input {
      
    }

    .map__search-form-button {

    }
  }
</style>
