export const timeToMixJuice = (name) => {
  const obj = {
    "Pure Strawberry Joy": 0.5,
    Energizer: 1.5,
    "Green Garden": 1.5,
    "Tropical Island": 3,
    "All or Nothing": 5,
    default: 2.5,
  };
  if (!obj[name]) return obj["default"];
  return obj[name];
};

export function limesToCut(wedgesNeeded, limes) {
  const obj = {
    small: 6,
    medium: 8,
    large: 10,
  };
  let i = 0;
  let sliceCount = 0;
  let limeCount = 0;
  while (i < limes.length) {
    if (sliceCount >= wedgesNeeded) break;
    sliceCount += obj[limes[i]];
    limeCount++;
    i++;
  }
  console.log(limeCount);
  return limeCount;
}

export function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(orders.shift());
  } while (timeLeft > 0 && orders.length > 0);
  return orders;
}
