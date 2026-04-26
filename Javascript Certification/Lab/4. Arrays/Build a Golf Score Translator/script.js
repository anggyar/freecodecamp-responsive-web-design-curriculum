function golfScore(par, strokesAmount) {
  if (strokesAmount === 1) {
    return "Hole-in-one!";
  } else if (strokesAmount <= par - 2) {
    return "Eagle";
  } else if (strokesAmount <= par - 1) {
    return "Birdie";
  } else if (strokesAmount === par) {
    return "Par";
  } else if (strokesAmount === par + 1) {
    return "Bogey";
  } else if (strokesAmount === par + 2) {
    return "Double Bogey";
  } else if (strokesAmount >= par + 3) {
    return "Go Home!";
  }
}

console.log(golfScore(3, 7));
