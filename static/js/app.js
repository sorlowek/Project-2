
var globalPlaceNames;




async function income(city) {
  let cityIncomeYears = [];
  var i;
  for (i=5; i < 18; i++){
    await d3.json("/income/"+ i).then((incomeData) => {
    cityIncome = incomeData.find(d => d.Geography == city);
    cityIncomeYears.push(cityIncome);
    }); 
  };  
  //console.log(cityIncomeYears.length); 
  var lessThan10k = [];
  var Between10_15 = [];
  var Between15_20= [];
  var Between20_35= [];
  var Between35_49= [];
  var Between50_75= [];
  var Between75_100= [];
  var Between100_150= [];
  var Between150_200= [];
  var Over200 =[];
  for (i =0; i < cityIncomeYears.length; i++) {
    if (i < 5) {
    lessThan10k.push(cityIncomeYears[i]["Households; Estimate; Total - Less than $10,000"]);
    Between10_15.push(cityIncomeYears[i]["Households; Estimate; Total - $10,000 to $14,999"]);
    Between15_20.push(cityIncomeYears[i]["Households; Estimate; Total - $15,000 to $24,999"]);
    Between20_35.push(cityIncomeYears[i]["Households; Estimate; Total - $25,000 to $34,999"]);
    Between35_49.push(cityIncomeYears[i]["Households; Estimate; Total - $35,000 to $49,999"]);
    Between50_75.push(cityIncomeYears[i]["Households; Estimate; Total - $50,000 to $74,999"]);
    Between75_100.push(cityIncomeYears[i]["Households; Estimate; Total - $75,000 to $99,999"]);
    Between100_150.push(cityIncomeYears[i]["Households; Estimate; Total - $100,000 to $149,999"]);
    Between150_200.push(cityIncomeYears[i]["Households; Estimate; Total - $150,000 to $199,999"]);
    Over200.push(cityIncomeYears[i]["Households; Estimate; Total - $200,000 or more"]);
    } else {
    lessThan10k.push(cityIncomeYears[i]["Households; Estimate; Less than $10,000"]); 
    Between10_15.push(cityIncomeYears[i]["Households; Estimate; $10,000 to $14,999"]);
    Between15_20.push(cityIncomeYears[i]["Households; Estimate; $15,000 to $24,999"]);
    Between20_35.push(cityIncomeYears[i]["Households; Estimate; $25,000 to $34,999"]);
    Between35_49.push(cityIncomeYears[i]["Households; Estimate; $35,000 to $49,999"]);
    Between50_75.push(cityIncomeYears[i]["Households; Estimate; $50,000 to $74,999"]);
    Between75_100.push(cityIncomeYears[i]["Households; Estimate; $75,000 to $99,999"]);
    Between100_150.push(cityIncomeYears[i]["Households; Estimate; $100,000 to $149,999"]);
    Between150_200.push(cityIncomeYears[i]["Households; Estimate; $150,000 to $199,999"]);
    Over200.push(cityIncomeYears[i]["Households; Estimate; $200,000 or more"]);
    }
  } 
  
  var variables = ["<$10,000", "$10,000 to $14,999", "$15,000 to $24,999","$25,000 to $34,999","$35,000 to $49,999",
  "$50,000 to $74,999","$75,000 to $99,999","$100,000 to $149,999", "$150,000 to $199,999","$200,000 or more"];
  var data = [lessThan10k, Between10_15, Between15_20, Between20_35, Between35_49, Between50_75, Between75_100, Between100_150,
  Between150_200, Over200];

  buildCharts(data, variables);
  console.log(Between10_15); 
  
}

async function age(city)  {
  var cityAgeYears = [];
  var i;
  for (i=5; i < 18; i++){
    await d3.json("/age/"+ i).then((ageData) => {
    cityAge = ageData.find(d => d.Geography == city);
    cityAgeYears.push(cityAge);
    }); 
  };  
  var Age5to9 =[];
  var Age10to14 =[];
  var Age15to19 =[];
  var Age20to24 =[];
  var Age25to29 =[];
  var Age30to34 =[];
  var Age35to39 =[];
  var Age40to44 =[];
  var Age45to49 =[];
  var Age50to54 =[];
  var Age55to59 =[];
  var Age60to64 =[];
  var Age65to69 =[];
  var Age70to74 =[];
  var Age80to84 =[];
  var Age85andover =[];

  for (i =0; i < cityAgeYears.length; i++) {
    if (i == 12) {
    Age5to9.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 5 to 9 years"])/100000);
    Age10to14.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 10 to 14 years"])/100000);
    Age15to19.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 15 to 19 years"])/100000);
    Age20to24.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 20 to 24 years"])/100000);
    Age25to29.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 25 to 29 years"])/100000);
    Age30to34.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 30 to 34 years"])/100000);
    Age35to39.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 35 to 39 years"])/100000);
    Age40to44.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 40 to 44 years"])/100000);
    Age45to49.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 45 to 49 years"])/100000);
    Age50to54.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 50 to 54 years"])/100000);
    Age55to59.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 55 to 59 years"])/100000);
    Age60to64.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 60 to 64 years"])/100000);
    Age65to69.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 65 to 69 years"])/100000);
    Age70to74.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 65 to 69 years"])/100000);
    Age80to84.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 65 to 69 years"])/100000);
    Age85andover.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 65 to 69 years"])/100000);
    } else {
    Age5to9.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 5 to 9 years"]));
    Age10to14.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 10 to 14 years"]));
    Age15to19.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 15 to 19 years"]));
    Age20to24.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 20 to 24 years"]));
    Age25to29.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 25 to 29 years"]));
    Age30to34.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 30 to 34 years"]));
    Age35to39.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 35 to 39 years"]));
    Age40to44.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 40 to 44 years"]));
    Age45to49.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 45 to 49 years"]));
    Age50to54.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 50 to 54 years"]));
    Age55to59.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 55 to 59 years"]));
    Age60to64.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 60 to 64 years"]));
    Age65to69.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 65 to 69 years"]));
    Age70to74.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 65 to 69 years"]));
    Age80to84.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 65 to 69 years"]));
    Age85andover.push(parseInt(cityAgeYears[i]["Total; Estimate; AGE - 65 to 69 years"]));  

    }
  }
  var data = [Age5to9, Age10to14, Age15to19, Age20to24, Age25to29, Age30to34, Age35to39,
    Age40to44, Age45to49, Age50to54,Age55to59, Age60to64, Age65to69, Age70to74,
    Age80to84, Age85andover];

var variables = ["Ages 5-9", "Ages 10-14", "Ages 15 -19", "Ages 20-24", "Ages 25-29", "Ages 30-34",
        "Ages 35-39", "Ages 40-44", "Ages 45-49", "Ages 50-54", "Ages 55-59",
        "Ages 60-64", "Ages 65-69", "Ages 70-74", "Ages 80-84", "Ages 85 and over"];
  
  buildCharts(data,variables);
    
  console.log(Age20to24);
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
  console.log(cityRaceYears.length);
  var whiteAlone = [];
  var AfricanAmericanAlone = [];
  var AmericanIndian =[];
  var Asian = [];
  var HawaiianPacific = [];
  var Other = [];
  var TwoRaces = [];
  for (i = 0; i < cityRaceYears.length; i++) {
    if (i <5){
      whiteAlone.push(parseInt(cityRaceYears[i]['Estimate; White alone']));
      AfricanAmericanAlone.push(parseInt(cityRaceYears[i]['Estimate; Black or African American alone']));
      AmericanIndian.push(parseInt(cityRaceYears[i]['Estimate; American Indian and Alaska Native alone']));
      Asian.push(parseInt(cityRaceYears[i]['Estimate; Asian alone']));
      HawaiianPacific.push(parseInt(cityRaceYears[i]['Estimate; Native Hawaiian and Other Pacific Islander alone']));
      Other.push(parseInt(cityRaceYears[i]['Estimate; Some other race alone']));
      TwoRaces.push(parseInt(cityRaceYears[i]['Estimate; Two or more races:']));
    } else {
      whiteAlone.push(parseInt(cityRaceYears[i]['Estimate; Total: - White alone']));
      AfricanAmericanAlone.push(parseInt(cityRaceYears[i]['Estimate; Total: - Black or African American alone']));
      AmericanIndian.push(parseInt(cityRaceYears[i]['Estimate; Total: - American Indian and Alaska Native alone']));
      Asian.push(parseInt(cityRaceYears[i]['Estimate; Total: - Asian alone']));
      HawaiianPacific.push(parseInt(cityRaceYears[i]['Estimate; Total: - Native Hawaiian and Other Pacific Islander alone']));
      Other.push(parseInt(cityRaceYears[i]['Estimate; Total: - Some other race alone']));
      TwoRaces.push(parseInt(cityRaceYears[i]['Estimate; Total: - Two or more races:']));

    }  
    }
    var data = [whiteAlone,AfricanAmericanAlone, AmericanIndian, Asian, HawaiianPacific,
      Other, TwoRaces];
      
    var variables = ["White", "Black", "Indian", "Asian", "Hawaiin", "Other", "Two"];
    buildCharts(data,variables);
    console.log(whiteAlone);
    
}

function optionChanged(newPlace){
  thisPlace = globalPlaceNames.find(d => d.Geography == newPlace);

  deleteMap();
  deleteGraph();
  getMap(thisPlace.Geography, thisPlace.Latitude, thisPlace.Longitude);
  income(thisPlace.Geography);
  age(thisPlace.Geography);
  race(thisPlace.Geography);
} 

function deleteGraph() {
  d3.selectAll("svg").remove();
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
  var marker = L.marker([lat, long])
  .bindPopup("<h3>" + place + "<h3>");

  var map = L.map("map-id", {
    center: [lat, long],
    zoom: 6,  
    layers: marker 
    });

  

  // Add the marker to the bikeMarkers array
  

  
lightmap.addTo(map);


}
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



  function buildCharts(data,variables){
    console.log(data[1]);
    console.log(variables);
    // svg container
    var height = 600;
    var width = 1000;
    
    // margins
    var margin = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    };
    
    // chart area minus margins
    var chartHeight = height - margin.top - margin.bottom;
    var chartWidth = width - margin.left - margin.right;
    
    // create svg container
    var svg = d3.select("body").append("svg")
        .attr("height", height)
        .attr("width", width);
    
    // shift everything over by the margins
    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    //scale y to chart height
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data.map(x=> x[0]))])
        .range([chartHeight, 0]);
    
    // scale x to chart width
    var xScale = d3.scaleBand()
        .domain(variables)
        .range([0, chartWidth])
        .padding(0.1);
    
    // create axes
    var yAxis = d3.axisLeft(yScale);
    var xAxis = d3.axisBottom(xScale);
    
    // set x to the bottom of the chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(xAxis);
    
    // set y to the y axis
    chartGroup.append("g")
        .call(yAxis);
    
    // Create the rectangles using data binding
    var barsGroup = chartGroup.selectAll("rect")
        .data(data.map(x=> x[0]))
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(variables[i]))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d))
        .attr("fill", "green");
    
    // Create the event listeners with transitions
    barsGroup.on("mouseover", function() {
      d3.select(this)
                .transition()
                .duration(500)
                .attr("fill", "red");
    })
        .on("mouseout", function() {
          d3.select(this)
                .transition()
                .duration(500)
                .attr("fill", "green");
        });
       
      }

init();



