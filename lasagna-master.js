const cookingStatus = (timer) => {
  if (timer === 0) return "Lasagna is done.";
  return timer ? "Not done, please wait." : "You forgot to set the timer.";
};

const preparationTime = (layers, time) => {
  return layers.length * (time ? time : 2);
};

const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
preparationTime(layers, 3);
const quantities = (arr) => {
  const obj = { noodles: 0, sauce: 0 };
  arr.forEach((el) => {
    switch (el) {
      case "noodles":
        obj.noodles += 50;
        break;
      case "sauce":
        obj.sauce += 0.2;
        break;
      default:
        break;
    }
  });
  return obj;
};

quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"]);
//For each noodle layer in your lasagna, you will need 50 grams of noodles.
//For each sauce layer in your lasagna, you will need 0.2 liters of sauce.

const addSecretIngredient = (friends, own) => {
  own[own.length] = friends[friends.length - 1];
};

const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];
addSecretIngredient(friendsList, myList);

const scaleRecipe = (recipe, portions) => {
  const newRecipe = {};
  const keys = Object.keys(recipe);
  for (let i = 0; i < keys.length; i++) {
    newRecipe[keys[i]] = (recipe[keys[i]] / 2) * portions;
    console.log(newRecipe[keys[i]]);
  }
  console.log(newRecipe);
  return newRecipe;
};

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

scaleRecipe(recipe, 4);
// =>
// {
//   noodles: 400,
//   sauce: 1,
//   mozzarella: 2,
//   meat: 200,
// };
