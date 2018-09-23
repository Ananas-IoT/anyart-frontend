var delay_popup = 1000;

function showDiv() {
  var x = document.getElementById("nav");

  x.style.display = "none";
  x.style.display = "block";


}
function closeDiv() {
  var x = document.getElementById("nav");
  x.style.display = "none";
}
function initMap(expression) {

  console.log(expression);
  var center = {
    lat: 49.841245,
    lng: 24.031785
  };



  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


  //setMarkers(map);
  map.addListener('click', function(event) {
    addMarker(event.latLng, map);
  });


}
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
  inprocess: {
    icon: "http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
  },
  ready: {
    icon: "http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png"
  },
  start: {
    icon: "https://cdn.icon-icons.com/icons2/1283/PNG/512/1497620001-jd22_85165.png"
  }

};

function setMarkers(map) {

  var preObject = document.getElementById('places');
  /* var ulList = document.getElementById('none');*/

  // Create reference
  var dbRefObject = db.ref().child('places');
  var dbRefList = dbRefObject.child('places');

  var ref = db.ref("places");
  ref.orderByKey().on("child_added", function(snap) {
    console.log(snap.val().icon);
  });
}



function addMarker(location, map) {

  var image = {
    url: "https://cdn.icon-icons.com/icons2/1283/PNG/512/1497620001-jd22_85165.png", // url
    scaledSize: new google.maps.Size(100, 100), // scaled size
  };

  var marker = new google.maps.Marker({
    position: location,
    icon: image,
    map: map
  });


  google.maps.event.addListener(marker, "click", function() {
    showDiv();
    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();
    localStorage.setItem("lat", lat)
    localStorage.setItem("lng", lng)

  });


}
function sendToBase() {
  var lat=localStorage.getItem("lat");
  var lng=localStorage.getItem("lng");
  var db = firebase.firestore();
  var ref = db.collection("places");

  var file = document.querySelector('input[type=file]').files[0]; //sames as here
  var fileName = file.name;
  var storageRef = firebase.storage().ref("/places/" + fileName);
  var uploadTask = storageRef.put(file);
  var downloadURL;
  uploadTask.on('state_changed', function(snapshot) {}, function(error) {
    console.log('error');
  }, function() {
    downloadURL = uploadTask.snapshot.downloadURL;
    ref.set({
      name: document.getElementById('fname').value,
      description: document.getElementById('description').value,
      lat: lat,
      lng: lng,
      icon: "start",
      photo: downloadURL,
      img: "",
      approval: ""
    });
  });
}


function previewFile() {
  var preview = document.querySelector('.photo'); //selects the query named img
  var file = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    preview.src = "assets/images/plus.png";

    reader.onloadend = function() {
      preview.src = reader.result;
    }

  }
}
