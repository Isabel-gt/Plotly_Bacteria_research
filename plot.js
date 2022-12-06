console.log(cityGrowths);

// Sort the Cities by population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// Select only the top five cities by population growth
var topFiveCities = sortedCities.slice(0,5);

// Create two arrays: an array of city names
//and an array of corresponding population growths
//var topFiveCityNames = cityGrowths.map(city => city.City);
//var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
// CORRECTED VERSION
var topFiveCityNames2 = topFiveCities.map(city => city.City);
var topFiveCityGrowths2 = topFiveCities.map(city => parseInt(city.Increase_from_2016));


// Create the bar chart with CityNames2=x and CityGrowths2=y
var trace = {
    x: topFiveCityNames2,
    y: topFiveCityGrowths2,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


// Create a bar chart of the seven largest cities by population.
var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames3 = topSevenCities.map(city => city.City);
var topSevenCityGrowths3 = topSevenCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topSevenCityNames3,
    y: topSevenCityGrowths3,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot2", data, layout);










// /// INDEX3
//For the d3.js SpaceX excercise

// // API call to SpaceX
// const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));


// // For getting the full name
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
// //VM22:1 Vandenberg Air Force Base Space Launch Complex 3W

// // For getting the latitude
// d3.json(url).then(spaceXResults =>
// console.log(spaceXResults[0].location.latitude));
// //VM26:2 34.6440904


// // Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
// d3.json(url).then(spaceXResults =>
// console.log(spaceXResults[0].location,longitude));



// /// Printing Samples.js (INDEX)
// d3.json("samples.json").then(function(data){
//   console.log("hello");
// });


/// INDEX
//Print the data from samples.js
d3.json("samples.json").then(function(data){
  console.log(data);
});

// To print the wfrec
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person => person.wfreq);
  console.log(wfreq);
});

// Sort the wfrec in a descending order
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
  console.log(wfreq);
});

// Delete null values from the sorted wfreq array
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
  filteredWfreq = wfreq.filter(element => element !=
null);
  console.log(filteredWfreq);
});

// EXAMPLE
// Use Object.entries() to print each key-value pair inside an array
researcher1 = {
  name: 'Roza',
  age: 34,
  hobby: 'Hiking'
};
// solution
console.log(Object.entries(researcher1));

// EXAMPLE
// Print to the console each trait and corresponding property
researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];
// solution
researcher1.forEach(([first, second]) => console.log(first
  + ": " + second));



// Use Object.entries() and forEach() 
//to print all the metadata of the first person in the samples.json() dataset (ID 940).
// Object.entries
d3.json("samples.json").then(function(data){
  firstp = data.metadata.map(person => person);
  console.log(firstp[0]);
});
console.log(Object.entries(firstp[0]));

// forEach
Object.entries(firstp[0]).forEach(([first, second]) => console.log(first
  + ": " + second));


// Display the metadata of any individual from the dataset
// Just hcnage the number between []
d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});





/// INDEX4 Open sript.js

// open script.js
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};


// // Create a DropDown menu
// function init() {
//   var selector = d3.select("#selDataset");

//   d3.json("samples.json").then((data) => {
//     console.log(data);
//     var sampleNames = data.names;
//     sampleNames.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });
// })}

// init();

// function optionChanged(newSample) {
//   buildMetadata(newSample);
//   buildCharts(newSample);
// }

// function buildMetadata(sample) {
//   d3.json("samples.json").then((data) => {
//     var metadata = data.metadata;
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     var PANEL = d3.select("#sample-metadata");

//     PANEL.html("");
//     PANEL.append("h6").text(result.location);
//   });
// }
