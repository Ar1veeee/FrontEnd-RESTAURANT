// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const incrementCount2 = document.getElementById("increment-count2");
const incrementCount3 = document.getElementById("increment-count3");

const decrementCount = document.getElementById("decrement-count");
const decrementCount2 = document.getElementById("decrement-count2");
const decrementCount3 = document.getElementById("decrement-count3");


// Select total count
const totalCount = document.getElementById("total-count");
const totalCount2 = document.getElementById("total-count2");
const totalCount3 = document.getElementById("total-count3");


// Variable to track count
var count = 3;
var count2 = 2;
var count3 = 5;


// Display initial count value
totalCount.innerHTML = count;
totalCount2.innerHTML = count2;
totalCount3.innerHTML = count3;


// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = Math.max(0, count);
};
// Function to decrement count
const handleDecrement = () => {
  count--;
  totalCount.innerHTML = Math.max(0, count);
};

// Function to increment count
const handleIncrement2 = () => {
  count2++;
  totalCount2.innerHTML = Math.max(0, count2);
};
// Function to decrement count
const handleDecrement2 = () => {
  count2--;
  totalCount2.innerHTML = Math.max(0, count2);
};

// Function to increment count
const handleIncrement3 = () => {
  count3++;
  totalCount3.innerHTML = Math.max(0, count3);
};
// Function to decrement count
const handleDecrement3 = () => {
  count3--;
  totalCount3.innerHTML = Math.max(0, count3);
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
incrementCount2.addEventListener("click", handleIncrement2);
incrementCount3.addEventListener("click", handleIncrement3);
decrementCount.addEventListener("click", handleDecrement);
decrementCount2.addEventListener("click", handleDecrement2); 
decrementCount3.addEventListener("click", handleDecrement3); 

function deleteDiv() {
  var divToRemove = document.getElementById("box1");

  if (divToRemove) {
    // Remove the div from the DOM
    divToRemove.remove();
  } else {
    alert("Div not found.");
  }
}
function deleteDiv2() {
  var divToRemove2 = document.getElementById("box2");

  if (divToRemove2) {
    // Remove the div from the DOM
    divToRemove2.remove();
  } else {
    alert("Div not found.");
  }
}
function deleteDiv3() {
  var divToRemove3 = document.getElementById("box3");

  if (divToRemove3) {
    // Remove the div from the DOM
    divToRemove3.remove();
  } else {
    alert("Div not found.");
  }
}