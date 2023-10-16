"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dicr = b**-4*a*c;
  if (dicr < 0) {
    arr = [];
  } else if (dicr == 0) {
    arr[0] = -b/(2*a);
  } else {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}