function whatIsInAName(objArr, sourceObj) {
  const newArray = [];

  for (const el of objArr) {
    let elementMatch = true;
    console.log(el);

    for (const prop in sourceObj) {
      console.log(prop);
      if (!el.hasOwnProperty(prop) || el[prop] !== sourceObj[prop]) {
        elementMatch = false;
        break;
      }
    }

    if (elementMatch === true) {
      newArray.push(el);
    }
  }

  return newArray;
}

console.log(
  whatIsInAName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 }),
);
