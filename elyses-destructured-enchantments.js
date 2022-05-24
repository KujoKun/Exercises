function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}

function getSecondCard(deck) {
  const [_, secondCard] = deck;
  return secondCard;
}

function swapTopTwoCards(deck) {
  const arr = deck;
  [arr[1], arr[0]] = [arr[0], arr[1]];
  return arr;
}

function discardTopCard(deck) {
  const [firstCard, ...deck2] = deck;
  return [firstCard, deck2];
}

const FACE_CARDS = ["jack", "queen", "king"];

function insertFaceCards(deck) {
  const [firstCard, ...arr] = deck;
  return [firstCard, ...FACE_CARDS, ...arr];
}

const deck = [5, 4, 7, 10];

insertFaceCards(deck);
// => [5, 'jack', 'queen', 'king', 4, 7, 10]
