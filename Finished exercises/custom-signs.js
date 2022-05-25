function buildSign(occasion, name) {
  return `Happy ${occasion}, ${name}`;
}

function buildBirthdaySign(age) {
  return age >= 50
    ? "Happy Birthday! What a mature fellow you are."
    : "Happy Birthday! What a young fellow you are.";
}

function graduationFor(name, year) {
  return `Congratulations ${name}\nClass of ${year}`;
}

//"Congratulations Hannah!\nClass of 2022"
function costOf(sign, currency) {
  const price = sign.length + 20;
  return `Your sign costs ${price} ${currency}.`;
}

costOf("Happy Birthday Rob!", "dollars");
// => "Your sign costs 58.00 dollars."
