// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//A function can reach outside of itself to grab a a varible but you can't reach into it.

/* Task 2: Counter */

function summation(num){
  let score = 0;
  return function add(){
    score ++; 
    return score = score + score;
  }
}
console.log(summation(4))
console.log(add())
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
