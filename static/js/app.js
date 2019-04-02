

var globalPlaceNames;
function recenterMap(lat, long) {

  console.log(lat, long);

}
function init() {
  // Create the tile layer that will be the background of our map
      var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        maxZoom: 10,
        id: "mapbox.light",
        accessToken: API_KEY
      });

      //Create a map centered on US 
        var map = L.map("map-id", {
        center: [39.8283, -98.5795],
        zoom: 4.4,
        
      });

      lightmap.addTo(map);
  
  
  
  // Grab a reference to the dropdown select element
 


  // Use the list of sample names to populate the select options
  d3.json("/places").then((placeNames) => {
    var i;
    for (i =0; i < placeNames.length; i++) {
      place = placeNames[i];
      console.log(placeNames[i]);
      d3.select("#selDataset")  
        .append("option")
        .text(place.Geography)
        .property("value", place.Geography);
    };
    globalPlaceNames = placeNames;
    
    const firstPlace = placeNames[0].Geography;
    const firstLat = placeNames[0].Latitude;
    const firstLong = placeNames[0].Longitude;
    recenterMap(firstLat, firstLong);
    // marker(firstPlace);
  });
}

function optionChanged(newPlace)
 {
  thisPlace = globalPlaceNames.find(d => d.Geography == newPlace);

  console.log(thisPlace);
  
  // recenterMap(newPlace.Latitude, newPlace.Longitude);
  //  marker(newPlace);
} 

init();