function findLongestWordLength(string) {
  const splittedWord = string.split(" ");
  console.log(splittedWord);
  console.log(splittedWord.length);

  let maxLength = 0;
  for (let i = 0; i < splittedWord.length; i++) {
    if (splittedWord[i].length >= maxLength) {
      maxLength = splittedWord[i].length;
    }
  }
  return maxLength;
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology",
  ),
);
