console.log ("works");

let firstInput = document.getElementById("first-value");
let secondInput = document.getElementById("second-value");
let output = document.getElementById("output");

let subtractButton = document.getElementById("subtract-button");
let multiplyButton = document.getElementById("multiply-button");
let divideButton = document.getElementById("divide-button");
let additionButton = document.getElementById("addition-button");


  /*
    Create a function that multiplies two numbers
    passed in as arguments. Return the product.
   */
  function multiplyInput(first, second) {
    product = first * second;
    output.innerHTML = `<h2>${product}</h2>`;
  }


  /*
    Create a function that adds two numbers
    passed in as arguments. Return the sum.
   */
  function addInput(first, second) {
    sum = parseInt(first) + parseInt(second);
    output.innerHTML = `<h2>${sum}</h2>`;
  }

  
    // Create a function that subtracts two numbers
    // passed in as arguments. Return the difference.
   
  function subtractInput(first, second) {
    difference = first - second;
    output.innerHTML = `<h2>${difference}</h2>`;
  }

  /*
    Create a function that divides two numbers
    passed in as arguments. Return the quotient.
   */
  function divideInput(first, second) {
    quotient = first / second;
    output.innerHTML = `<h2>${quotient}</h2>`;
  }


  // Create a function that accepts three arguments.
  //   1. First number
  //   2. Second number
  //   3. A function that performs an operation on them

function assignOperator(first, second, operation) {
  operation(first, second);
};


subtractButton.addEventListener("click", function() {
  assignOperator(firstInput.value, secondInput.value, subtractInput);
});
multiplyButton.addEventListener("click", function() {
  assignOperator(firstInput.value, secondInput.value, multiplyInput);
});
divideButton.addEventListener("click", function() {
  assignOperator(firstInput.value, secondInput.value, divideInput);
});
additionButton.addEventListener("click", function() {
  assignOperator(firstInput.value, secondInput.value, addInput);
});


  // Return the value of the operation.
  // This is built into each operators' function... printing straight to the page in an H2.
 