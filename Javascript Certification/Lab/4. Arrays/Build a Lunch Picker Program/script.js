let lunches = [];

function addLunchToEnd(array, string) {
  const lunchItem = string;
  array.push(lunchItem);

  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, string) {
  const lunchItem = string;
  array.unshift(lunchItem);

  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return array;
}

// removeLastLunch(["Stew", "Soup", "Toast"]) should log the string "Toast removed from the end of the lunch menu." to the console. -> error di saya
function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const lunchItem = array.pop();
    console.log(`${lunchItem} removed from the end of the lunch menu.`);
  }
  return array;
}

function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const lunchItem = array.shift();
    console.log(`${lunchItem} removed from the start of the lunch menu.`);
  }
  return array;
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * array.length);
    const lunchItem = array[randomIndex];
    console.log(`Randomly selected lunch: ${lunchItem}`);
  }
}

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array.join(", ")}`);
  }

  // Saat input array empty, kasi respon -> masih error
}

addLunchToEnd(lunches, "Tacos");
console.log(`====================`);
addLunchToStart(["Pizza", "Tacos"], "Burger");
console.log(`====================`);
addLunchToStart(lunches, "Ayam Bakar");
console.log(`====================`);
addLunchToEnd(lunches, "Bakso");
console.log(`====================`);
addLunchToEnd(lunches, "Mie Ayam");
console.log(`====================`);
console.log(`====================`);

console.log(lunches);
console.log(`====================`);

removeFirstLunch(lunches);
console.log(`====================`);
console.log(lunches);

getRandomLunch(lunches);

removeLastLunch(["Stew", "Soup", "Toast"]);
showLunchMenu(lunches);
