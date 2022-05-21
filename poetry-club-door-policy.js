function frontDoorResponse(line) {
  return line[0];
}
frontDoorResponse("Stands so high");

function frontDoorPassword(word) {
  const str = word.toLowerCase();
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
}
frontDoorPassword("SHIRE");

function backDoorResponse(line) {
  const str = line.trim();
  return str[str.length - 1];
}
backDoorResponse("Stands so high");

function backDoorPassword(word) {
  const str = word.toLowerCase();
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}, please`;
}
