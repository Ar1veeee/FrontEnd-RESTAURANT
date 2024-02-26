// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const incrementCount2 = document.getElementById("increment-count2");
const incrementCount3 = document.getElementById("increment-count3");
const incrementCount4 = document.getElementById("increment-count4");
const incrementCount5 = document.getElementById("increment-count5");
const incrementCount6 = document.getElementById("increment-count6");
const incrementCount7 = document.getElementById("increment-count7");
const incrementCount8 = document.getElementById("increment-count8");
const incrementCount9 = document.getElementById("increment-count9");
const incrementCount10 = document.getElementById("increment-count10");

const decrementCount = document.getElementById("decrement-count");
const decrementCount2 = document.getElementById("decrement-count2");
const decrementCount3 = document.getElementById("decrement-count3");
const decrementCount4 = document.getElementById("decrement-count4");
const decrementCount5 = document.getElementById("decrement-count5");
const decrementCount6 = document.getElementById("decrement-count6");
const decrementCount7 = document.getElementById("decrement-count7");
const decrementCount8 = document.getElementById("decrement-count8");
const decrementCount9 = document.getElementById("decrement-count9");
const decrementCount10 = document.getElementById("decrement-count10");


// Select total count
const totalCount = document.getElementById("total-count");
const totalCount2 = document.getElementById("total-count2");
const totalCount3 = document.getElementById("total-count3");
const totalCount4 = document.getElementById("total-count4");
const totalCount5 = document.getElementById("total-count5");
const totalCount6 = document.getElementById("total-count6");
const totalCount7 = document.getElementById("total-count7");
const totalCount8 = document.getElementById("total-count8");
const totalCount9 = document.getElementById("total-count9");
const totalCount10 = document.getElementById("total-count10");


// Variable to track count
var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
var count9 = 0;
var count10 = 0;


// Display initial count value
totalCount.innerHTML = count;
totalCount2.innerHTML = count2;
totalCount3.innerHTML = count3;
totalCount4.innerHTML = count4;
totalCount5.innerHTML = count5;
totalCount6.innerHTML = count6;
totalCount7.innerHTML = count7;
totalCount8.innerHTML = count8;
totalCount9.innerHTML = count9;
totalCount10.innerHTML = count10;


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

// Function to increment count
const handleIncrement4 = () => {
  count4++;
  totalCount4.innerHTML = Math.max(0, count4);
};
// Function to decrement count
const handleDecrement4 = () => {
  count4--;
  totalCount4.innerHTML = Math.max(0, count4);
};

// Function to increment count
const handleIncrement5 = () => {
  count5++;
  totalCount5.innerHTML = Math.max(0, count5);
};
// Function to decrement count
const handleDecrement5 = () => {
  count5--;
  totalCount5.innerHTML = Math.max(0, count5);
};

// Function to increment count
const handleIncrement6 = () => {
    count6++;
    totalCount6.innerHTML = Math.max(0, count6);
  };
  // Function to decrement count
  const handleDecrement6 = () => {
    count6--;
    totalCount6.innerHTML = Math.max(0, count6);
  };

// Function to increment count
const handleIncrement7 = () => {
  count7++;
  totalCount7.innerHTML = Math.max(0, count7);
};
// Function to decrement count
const handleDecrement7 = () => {
  count7--;
  totalCount7.innerHTML = Math.max(0, count7);
};

// Function to increment count
const handleIncrement8 = () => {
  count8++;
  totalCount8.innerHTML = Math.max(0, count8);
};
// Function to decrement count
const handleDecrement8 = () => {
  count8--;
  totalCount8.innerHTML = Math.max(0, count8);
};

// Function to increment count
const handleIncrement9 = () => {
  count9++;
  totalCount9.innerHTML = Math.max(0, count9);
};
// Function to decrement count
const handleDecrement9 = () => {
  count9--;
  totalCount9.innerHTML = Math.max(0, count9);
};

// Function to increment count
const handleIncrement10 = () => {
  count10++;
  totalCount10.innerHTML = Math.max(0, count10);
};

// Function to decrement count
const handleDecrement10 = () => {
  count10--;
  totalCount10.innerHTML = Math.max(0, count10);
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
incrementCount2.addEventListener("click", handleIncrement2);
incrementCount3.addEventListener("click", handleIncrement3);
incrementCount4.addEventListener("click", handleIncrement4);
incrementCount5.addEventListener("click", handleIncrement5);
incrementCount6.addEventListener("click", handleIncrement6);
incrementCount7.addEventListener("click", handleIncrement7);
incrementCount8.addEventListener("click", handleIncrement8);
incrementCount9.addEventListener("click", handleIncrement9);
incrementCount10.addEventListener("click", handleIncrement10);
decrementCount.addEventListener("click", handleDecrement);
decrementCount2.addEventListener("click", handleDecrement2); 
decrementCount3.addEventListener("click", handleDecrement3); 
decrementCount4.addEventListener("click", handleDecrement4); 
decrementCount5.addEventListener("click", handleDecrement5); 
decrementCount6.addEventListener("click", handleDecrement6); 
decrementCount7.addEventListener("click", handleDecrement7); 
decrementCount8.addEventListener("click", handleDecrement8); 
decrementCount9.addEventListener("click", handleDecrement9); 
decrementCount10.addEventListener("click", handleDecrement10); 