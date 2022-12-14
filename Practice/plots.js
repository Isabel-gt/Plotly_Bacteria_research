
/// INDEX2

Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);


Plotly.newPlot("otherPlot", [{x: [5, 10, 15], y: [10, 20, 30]}]);

// Bar Chart
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

 Plotly.newPlot("barChart", [trace], layout);



 // Bar Chart 2
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
 };

var layout = {
    title: "Beverages",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent of Drinks Ordered"}
};

 Plotly.newPlot("barChart2", [trace], layout);



 // Pie Chart
 var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("pieChart", data, layout);
