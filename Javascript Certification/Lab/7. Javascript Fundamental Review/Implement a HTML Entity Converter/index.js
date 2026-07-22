function convertHTML(string) {
  let specialChar = ["&", "<", ">", '"', "'"];
  let pairSpecialChar = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

  let splittedString = string.split("");
  let newString = [];
  for (let i = 0; i < splittedString.length; i++) {
    for (let j = 0; j < specialChar.length; j++) {
      if (splittedString[i] === specialChar[j]) {
        splittedString[i] = pairSpecialChar[j];
        console.log(splittedString[i]);
      }
    }
    newString.push(splittedString[i]);
  }
  return newString.join("");
}

console.log(convertHTML('Stuff in "quotation marks"'));
