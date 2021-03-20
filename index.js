const hourglass = document.getElementById('hourglass');
const birthdateInput = document.getElementById('birthdate');
const deathdateInput = document.getElementById('deathdate');

let birthdate, deathdate, secondsAlive;

function refresh() {
  const birthdateValue = new Date(...birthdateInput.value.split('-'));
  if (!isNaN(birthdateValue.getTime())) {
    birthdate = birthdateValue;
    secondsAlive = Math.floor((Date.now() - birthdate.getTime()) / 1000);
  }
  const deathdateValue = new Date(...deathdateInput.value.split('-'));
  if (!isNaN(deathdateValue.getTime())) {
    deathdate = deathdateValue;
  }
}

function tick() {
  let msAlive = Date.now() - birthdate.getTime();
  let secondsAlive = Math.floor(msAlive / 1000);
  let minutesAlive = Math.floor(secondsAlive / 60);
  let hoursAlive = Math.floor(minutesAlive / 60);
  let daysAlive = Math.floor(hoursAlive / 24);
  let weeksAlive = Math.floor(daysAlive / 7);
  let yearsAlive = Math.floor(daysAlive / 365);
  let msLeft = deathdate.getTime() - Date.now();
  let secondsLeft = Math.floor(msLeft / 1000);
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);
  let weeksLeft = Math.floor(daysLeft / 7);
  let yearsLeft = Math.floor(daysLeft / 365);
  hourglass.innerText = `
    ${commaify(secondsLeft)} s\n
    ${commaify(minutesLeft)} m\n
    ${commaify(hoursLeft)} h\n
    ${commaify(daysLeft)} d\n
    ${commaify(weeksLeft)} w\n
    ${commaify(yearsLeft)} y\n
    .\n
    ${commaify(yearsAlive)} y\n
    ${commaify(weeksAlive)} w\n
    ${commaify(daysAlive)} d\n
    ${commaify(hoursAlive)} h\n
    ${commaify(minutesAlive)} m\n
    ${commaify(secondsAlive)} s\n
  `;
}

function commaify(number) {
  var numString = '' + number;
  var commaString = '';
  for (let i = 0; i < numString.length; i++) {
    commaString += numString[i];
    if ((numString.length - i - 1) % 3 === 0 && i + 1 < numString.length) {
      commaString += ',';
    }
  }
  return commaString;
}

refresh();
setInterval(tick, 500);
