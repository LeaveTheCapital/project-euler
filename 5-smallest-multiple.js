const isDivisibleByAll = num => {
  let count = 0;
  for (let j = 19; j > 2; j--) {
    if (num % j !== 0) {
      // console.log("j=", j, "i=", num, "i % j=", num % j);
      return false;
    } else {
      count++;
      if (count > 5) {
        console.log("count is", count);
      }
      if (count > 10) {
        console.log("num", num, "count", count);
      }
    }
  }
  return true;
};

const getSmallestMultiple = () => {
  for (let i = 20; i < 1000000000; i += 20) {
    if (i % 1000000 === 0) {
      console.log(i);
    }
    const isDivisible = isDivisibleByAll(i);
    if (isDivisible) {
      console.log("is divisible", i);
      return true;
    }
  }
  return false;
};

console.log(getSmallestMultiple());

// const getNumber = () => {
//   let num = 1;
//   for (let i = 2; i < 11; i++) {
//     num = num * i;
//   }
//   console.log(num);
// };

// getNumber();
