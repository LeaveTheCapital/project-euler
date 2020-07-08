const isPalindrome = number => {
  const numberBackwards = number
    .toString()
    .split("")
    .reverse()
    .join("");
  return +numberBackwards === number;
};

const getLargestPalindromeProduct = () => {
  let largestSoFar = 0;
  const largePalindromes = [];
  let j = 999;
  for (let i = 999; i > 0; i--) {
    for (let j = 999; j >= i; j--) {
      //   console.log("i", i, "j", j);

      const product = i * j;
      //   console.log("product", product);
      //   console.log("sum", i + j);
      if (isPalindrome(product)) {
        console.log("i", i, "j", j);
        console.log(product);
        largestSoFar = product;
        largePalindromes.push(product);
        console.log(largePalindromes);
        if (largePalindromes.length > 5) {
          const inOrder = largePalindromes.sort((a, b) => b - a);
          console.log(inOrder, "the largest one is", inOrder[0]);
          return inOrder[0];
        }
      }
    }
  }
};

console.time("label");
getLargestPalindromeProduct();
console.timeEnd("label");
