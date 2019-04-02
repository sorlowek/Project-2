
var globalPlaceNames;


function init() {
  d3.json("/places").then((placeNames) => {
    var i;
    for (i =0; i < placeNames.length; i++) {
      place = placeNames[i];
      
      d3.select("#selDataset")  
        .append("option")
        .text(place.Geography)
        .property("value", place.Geography);
    };
    globalPlaceNames = placeNames;

    const firstPlace = placeNames[213].Geography;
    const firstLat = placeNames[213].Latitude;
    const firstLong = placeNames[213].Longitude;
    getMap(firstPlace, firstLat, firstLong);
    income(firstPlace);
    race(firstPlace);
    age(firstPlace);
  });
}

async function income(city) {
  let cityIncomeYears = [];
  var i;
  for (i=5; i < 18; i++){
    await d3.json("/income/"+ i).then((incomeData) => {
    cityIncome = incomeData.find(d => d.Geography == city);
    cityIncomeYears.push(cityIncome);
    }); 
  };  
  console.log(cityIncomeYears[0]); 

}

function extra(data){

  data1 = data[0];
  console.log(data1);
};

async function age(city)  {
  var cityAgeYears = [];
  var i;
  for (i=5; i < 18; i++){
    await d3.json("/age/"+ i).then((ageData) => {
    cityAge = ageData.find(d => d.Geography == city);
    cityAgeYears.push(cityAge);
    }); 
  };  
  console.log(cityAgeYears[0]);
}

async function race(city)  {
  var cityRaceYears = [];
  var i;
  for (i=5; i < 18; i++){
    await d3.json("/race/"+ i).then((raceData) => {
    cityRace = raceData.find(d => d.Geography == city);
    cityRaceYears.push(cityRace);
    }); 
  };  
  console.log(cityRaceYears[0]);
}

function optionChanged(newPlace){
  thisPlace = globalPlaceNames.find(d => d.Geography == newPlace);

  deleteMap();
  getMap(thisPlace.Geography, thisPlace.Latitude, thisPlace.Longitude);
  income(thisPlace.Geography);
  age(thisPlace.Geography);
  race(thisPlace.Geography);
} 

function deleteMap() {
    d3.select("#map-id").remove();
    d3.select("body").append("div").attr("id", "map-id");
}

function getMap(place, lat, long) {
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 10,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  //Create a map centered on US 
  
  var map = L.map("map-id", {
    center: [lat, long],
    zoom: 6,   
    });

  
lightmap.addTo(map);


}


init();