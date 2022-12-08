// The numbers of an array are doubled
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// Second way to double numbers with =>
var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

// add 5 to each number in the following array
var numbers = [0,2,4,6,8];
var sum = numbers.map(function(num){
    return num + 5;
});
console.log(sum);

// Extract a property from each object
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);


//to get population
var populations = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var populationNum = populations.map(function(Population){
    return Population.population;
});
console.log(populationNum);


// Filter method on number that are bigger than 1
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);


//Filter the results to include only animals whose species name starts with the letter "s."
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var letterS = words.filter(function(word){
    return word.startsWith("s");
});

console.log(letterS);

// Sort method to sort elements in order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

//Option 2 to sort
var familyAge = [3,2,39,37,9];
var sortedAge2 = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge2);

// Sort the same numbers in descending order
var familyAge = [3,2,39,37,9];
var sortedAge3 = familyAge.sort((a,b) => b - a);
console.log(sortedAge3);

// The slice method
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1)

// Other slice example
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = words.slice(0,3);
console.log(slice2)

//To slice to the end of an array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );