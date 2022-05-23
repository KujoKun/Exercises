function needsLicense(kind) {
  if (kind === "car" || kind === "truck") return true;
  return false;
}

function chooseVehicle(option1, option2) {
  if (option1[0] < option2[0]) {
    return `${option1} is clearly the better choice.`;
  }
  return `${option2} is clearly the better choice.`;
}

function calculateResellPrice(originalPrice, age) {
  if (age < 3) console.log(originalPrice * 0.8);
  if (age > 10) console.log(originalPrice * 0.5);
  if (age > 3) console.log(originalPrice * 0.7);
}
calculateResellPrice(40000, 2);
