function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const numMonths = Math.floor(numDays / 22);
  const extraDays = numDays % 22;
  console.log(extraDays);
  const discounted =
    dayRate(ratePerHour) * (numMonths * 22) -
    dayRate(ratePerHour) * (numMonths * 22) * discount;
  console.log(discounted);
  const total = dayRate(ratePerHour) * extraDays;
  return Math.ceil(discounted + total);
}
priceWithMonthlyDiscount(16, 130, 0.15);
const expected = 14528;
