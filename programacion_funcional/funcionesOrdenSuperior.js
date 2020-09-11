// const original = [10,20,30,40];

// function appendSumOfValues(entryArray) {
//    const total = entryArray.reduce((accummulator, currentValue) => accummulator + currentValue);
//    entryArray.concat(total);
  
//    return entryArray;
// }

// console.log(appendSumOfValues(original));
// console.log(appendSumOfValues(original));
// console.log(appendSumOfValues(original));
// console.log(appendSumOfValues(original));
// console.log(appendSumOfValues(original));


const arr1 = [1, 2, 3].map(n => n+1); // => [2, 3, 4]

const arr2 = [1, 2, 3].filter(n => n>1); // => [2, 3]

const arr3 = [1, 2, 3].reduce((acc, n) => acc + n, 0);
// 0 + 1 => 1
// 1 + 2 => 3
// 3 + 3 => 6
// => 6

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

const result = ["1", "2", "3"].map((item) => parseInt(item));
// console.log(result);

const arr4 = ["1", "2", "3"].map(parseInt); // => [1, NaN, NaN]

// parseInt( number = currentValue, base = index)
// parseInt(1, 0) => 1
// parseInt(2, 1) => NaN
// parseInt(3, 2) => NaN

// console.log(arr4);

// Decorador unario 
const unary = fn => {
    return (...args) => fn(args[0]);
  }

  const arr5 = ["1", "2", "3"].map(unary(parseInt)); //=> [1, 2, 3]

  console.log(arr5);