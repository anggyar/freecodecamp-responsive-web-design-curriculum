function titleCase(string) {
  let splitted = string.split(" ");
  let data = [];
  for (let i = 0; i < splitted.length; i++) {
    let firstLetter = splitted[i].charAt(0).toUpperCase();
    let remainingLetter = splitted[i].substring(1).toLowerCase();
    let word = firstLetter + remainingLetter;
    data.push(word);
  }

  let result = data.join(" ");
  return result;
}

console.log(titleCase("I like to code"));
