function truthCheck(collection, pre) {
  let isTrue = true;
  console.log("Pre: ", pre);
  for (const element of collection) {
    console.log(element);
    if (!element[pre]) {
      isTrue = false;
      break;
    }
  }

  return isTrue;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name",
  ),
);
