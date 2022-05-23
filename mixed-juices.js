// function timeToMixJuice(name) {
//   switch (name) {
//     case "Pure Strawberry Joy":
//       return 0.5;
//     case "Energizer":
//       return 1.5;
//     case "Green Garden":
//       return 1.5;
//     case "Tropical Island":
//       return 3;
//     case "All or Nothing":
//       return 5;
//     default:
//       return 2.5;
//   }
// }
const timeToMixJuice = (name) => {
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
function limesToCut(wedgesNeeded, limes) {
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
  return limeCount;
}
limesToCut(80, [
  "small",
  "large",
  "large",
  "medium",
  "small",
  "large",
  "large",
]); //4

//6 from small, 8 from medium, 10 from large
function remainingOrders(timeLeft, orders) {
  let orderTime = 0;
  let remainingTime = timeLeft;
  const newArr = [];
  let i = 0;
  let t = 0;
  do {
    if (remainingTime - timeToMixJuice(orders[i]) < 0) {
      newArr[t] = orders[i];
      t++;
    }
    i++;
    remainingTime -= timeToMixJuice(orders[i]);
    // console.log("Remaining time:", remainingTime);
  } while (i < orders.length);
  console.log(`From function: ${orders}`);
  console.log("Expected", ["All or Nothing", "Green Garden", "Limetime"]);
}

remainingOrders(13, [
  "Pure Strawberry Joy",
  "Pure Strawberry Joy",
  "Vitality",
  "Tropical Island",
  "All or Nothing",
  "All or Nothing",
  "All or Nothing",
  "Green Garden",
  "Limetime",
]);
