"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2-4*a*c;

  if (discr == 0) {
    arr[0] = -b/(2*a);
  } else if (discr > 0) {
    arr[0] = (-b + Math.sqrt(discr) )/(2*a);
    arr[1] = (-b - Math.sqrt(discr) )/(2*a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent/100/12;
  let S = amount-contribution;
  let month_pay = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let result = month_pay * countMonths;
  return result.toFixed(2);
}