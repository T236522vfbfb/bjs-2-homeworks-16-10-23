function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let element of arr) {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
    sum += element;
  }

  let avg = sum / arr.length;
  avg = parseInt(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length > 0) {
    let sum = 0;
    for (let element of arr) {
      sum = sum + element;
    }
    return sum;
  } else {
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length > 0) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let element of arr) {
      if (element % 2 === 0) {
        sumEvenElement += element;
      } else {
        sumOddElement += element;
      }
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length > 0) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let element of arr) {
      if (element % 2 === 0) {
        sumEvenElement += element;
        countEvenElement += 1;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

function makeWork (arrOfArr, func) {

}
