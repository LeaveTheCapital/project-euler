const results = [];

const getFactors = num => {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      const divided = num / i;
      if (i === num) {
        // console.log(divided);
        console.log(i, "is prime");
        largestSoFar = i;
        return i;
      }
      const nextNum = getFactors(divided);
      console.log(nextNum, "is nextNum");
    }
  }
};

const callGetFactors = () => {
  const largestSoFar = 0;
  getFactors(21);
  console.log(largestSoFar);
};

console.log(callGetFactors(21));
