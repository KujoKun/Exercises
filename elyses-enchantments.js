function getItem(cards, position) {
  return cards[position];
}
function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}
function insertItemAtTop(cards, newCard) {
  console.log([...cards, newCard]);
  return cards;
}
insertItemAtTop([1], 5);
insertItemAtTop([1], 9);
function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}
removeItem([1, 2, 3, 4], 3);
function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

function insertItemAtBottom(cards, newCard) {
  cards.push(newCard);
  console.log();
  return cards;
}
const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);
function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
