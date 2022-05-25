function translate2d(dx, dy) {
  console.log(dx, dy);
  return (bx, by) => {
    console.log(bx, by);
    return [dx + bx, dy + by];
  };
}
function scale2d(sx, sy) {
  return (bx, by) => {
    return [sx * bx, sy * by];
  };
}
function composeTransform(f, g) {
  return f;
}
const moveCoordinatesRight2Px = translate2d(2, 0);
const doubleCoordinates = scale2d(2, 2);

const composedTransformations = composeTransform(
  moveCoordinatesRight2Px,
  doubleCoordinates
);
const result = composedTransformations(0, 1);
// result => [4, 2]
function memoizeTransform(f) {}
