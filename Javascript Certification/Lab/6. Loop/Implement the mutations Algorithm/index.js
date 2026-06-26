function mutation(array) {
  let splitted1 = array[0].toLowerCase().split("");
  let splitted2 = array[1].toLowerCase().split("");

  let pass = 0;

  for (let i = 0; i < splitted2.length; i++) {
    for (let j = 0; j < splitted1.length; j++) {
      if (splitted2[i] === splitted1[j]) {
        pass += 1;
        break;
      } else {
        continue;
      }
    }
  }

  console.log(pass);
  console.log(splitted2.length);

  if (splitted2.length === pass) {
    return true;
  } else {
    return false;
  }
}

// console.log(mutation(["hello", "Hello"]))
console.log(mutation(["Mary", "Army"]));
