var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// 7. Using vanilla JavaScript, update the HTML of the element with the id of vanilla_output with the following text: "This content generated with vanilla JavaScript".

document.getElementById("vanilla_output").innerHTML = "This content generated with vanilla JavaScript";

// 8. Using jQuery, update the HTML of the element with the id of jquery_output with the following text: "This content generated with jQuery".

$("#jquery_output").html("This content generated with jQuery");

// FUNCTIONS AND OPERATIORS
  // 1. Write a function named modulus that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments. e.g. modulus(10, 3) // Should return 1.

  function modulus(a, b){
    var result = a % b;
    console.log("result", result);
    return result;
  };

  // 2. Write a function named doMath. This function takes three arguments. The first two will contain integer values. The third argument will be a function reference. Write two more functions named add and subtract. Execute the doMath function to add two numbers together. Then execute the doMath function to subtract the two numbers.

  function doMath(a, b, wildCard){
    wildCard(a, b);
  };

  function add(a, b){
    var sum = a + b;
    console.log("sum", sum);
    return sum;
  };

  function subtract(a, b){
    var difference = a - b;
    console.log("difference", difference);
    return difference;
  };

  doMath(3, 5, add);
  doMath(188, 23, subtract);

// ARRAYS
  // 1. Write a function named sortedPlanets that returns an array of the planet names sorted alphabetically.

  var sortedPlanets = Planets.sort();
  console.log("sortedPlanets", sortedPlanets);

  // 2. Write a function named reversedPlanets that returns an array of planet names that are reversed (i.e. "htraE").

  var reversedPlanets = Planets.map(function(planet){
    return planet.split("").reverse().join("");
  });
  console.log("reversedPlanets", reversedPlanets);

  // 3. Write a function named longPlanets that returns an array containing only the planet names that are 7 characters long, or longer.

  var longPlanets = Planets.filter(function(planet){
    return planet.length >= 7;
  });
  console.log("longPlanets", longPlanets);



















