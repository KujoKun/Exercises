function createScoreBoard() {
  return { "The Best Ever": 1000000 };
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = player;
  scoreBoard[score] = score;
  return scoreBoard;
}

addPlayer({ "Dave Thomas": 0 }, "José Valim", 486373);
// => {'Dave Thomas': 0, 'José Valim': 486373}
function removePlayer(scoreBoard, player) {
  if (!scoreBoard.hasOwnProperty(player)) return scoreBoard;
  delete scoreBoard[player];
}
removePlayer({ "Dave Thomas": 0 }, "Dave Thomas");

function updateScore(scoreBoard, player, points) {
  scoreBoard[player] = scoreBoard[player] + points;
  return scoreBoard;
  console.log(scoreBoard);
}
updateScore({ "Freyja Ćirić": 12771008 }, "Freyja Ćirić", 73);

function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] = scoreBoard[key] + 100;
  }
  return scoreBoard;
}

applyMondayBonus({
  "Dave Thomas": 44,
  "Freyja Ćirić": 539,
  "José Valim": 265,
});
function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

function normalize(score) {
  return 2 * score + 10;
}
normalizeScore({ score: 400, normalizeFunction: normalize });

const strConvert = (str) => {
  return `${str[0].toUpperCase()}${str}`;
};

strConvert("tasaretDFSDgs");
