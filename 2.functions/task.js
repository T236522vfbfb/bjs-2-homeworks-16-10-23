function getArrayParams(...arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    avg: Number((arr.reduce((acc, number) => acc + number, 0) / arr.length).toFixed(2))
  }
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, number) => acc + number, 0);
}

function differenceMaxMinWorker(...arr) {
    return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
  }


function differenceEvenOddWorker(...arr) {
  const reduceResult = arr.reduce((acc, number) => {
    return number % 2 === 0 ? {even: acc.even + number, odd: acc.odd} : {even: acc.even, odd: acc.odd + number};
  }, {even: 0, odd: 0});
  
  return reduceResult.even - reduceResult.odd;
  }

function averageEvenElementsWorker(...arr) {
  const reduceResult = arr.reduce((acc, number) => {
    return number % 2 === 0 ? {even: acc.even + number, count: acc.count + 1} : acc;
  }, {even: 0, count: 0});
  return arr.length === 0 ? 0 : reduceResult.even / reduceResult.count;  
  }

function makeWork (arrOfArr, func) {
  return func(arrOfArr).max - func(arrOfArr).min;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
makeWork(arr, getArrayParams)