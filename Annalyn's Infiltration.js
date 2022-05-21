export function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake ? true : false;
}
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return archerIsAwake && prisonerIsAwake;
}
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent) {
    return !archerIsAwake;
  }
  if (!petDogIsPresent) {
    if (!prisonerIsAwake) return false;
    return prisonerIsAwake && !archerIsAwake && !knightIsAwake;
  }
}
