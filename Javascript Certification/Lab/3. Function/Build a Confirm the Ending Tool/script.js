function confirmEnding(checkString, endString) {
  let targetLength = endString.length;

  let sliced = checkString.slice(-targetLength);

  if (sliced === endString) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "tian"));
