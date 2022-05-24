// function twoSum(array1, array2) {
//   const str1 = array1.reduce((prev, cur) => String(prev) + String(cur));
//   const str2 = array2.reduce((prev, cur) => String(prev) + String(cur));
//   return +str1 + +str2;
// }
function twoSum(array1, array2) {
  return array1.join("") + array2.join("");
}
// twoSum([1, 2, 3], [0, 7]);

function luckyNumber(value) {
  const reversedValue = Number([...String(value)].reverse().join(""));
  console.log(reversedValue);
  return value === reversedValue ? true : false;
}
// luckyNumber(1441);
// luckyNumber(123);

function errorMessage(input) {
  if (!input) return "Required field";
  if (!Number(input)) return "Must be a number besides 0";
  return "";
}
errorMessage("some text");
errorMessage("86f1");
errorMessage("4 2");
errorMessage("0");
