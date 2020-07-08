let sum = 0;
let sequence = [1, 2];
let i = 2;
while (sequence[sequence.length - 1] < 4000000) {
  const nextInSequence = sequence[i - 2] + sequence[i - 1];
  sequence.push(nextInSequence);
  if (nextInSequence % 2 === 0) {
    sum += nextInSequence;
  }
  i++;
}
console.log(sum + 2);
