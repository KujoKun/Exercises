function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((prev, curr) => prev + curr, 0);
}

function birdsInWeek(birdsPerDay, week) {
  const newArr = birdsPerDay.slice(week * 7 - 7, week * 7);
  console.log(newArr);
  let total = 0;
  for (let i = 0; i < newArr.length; i++) {
    total += newArr[i];
    console.log(newArr[i]);
  }
  return total;
}
birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2);
function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) birdsPerDay[i]++;
  }
  return birdsPerDay;
}

fixBirdCountLog([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0]);

console.log(`Expected birds: [4, 0, 6, 1, 1, 4, 2, 0, 4, 4, 4, 0];`);
