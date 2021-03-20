const birthdate = getValidDate('Birthdate');
const secondsAlive = Math.floor((Date.now() - birthdate.getTime()) / 1000);
const expectedDeath = getValidDate('Expected death');

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

function getValidDate(msg) {
  while (true) {
    const d = new Date(...prompt(msg +' yyyy-mm-dd').split('-'));
    if (!isNaN(d.getTime())) {
      return d;
    }
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
  let msLeft = expectedDeath.getTime() - Date.now();
  let secondsLeft = Math.floor(msLeft / 1000);
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);
  let weeksLeft = Math.floor(daysLeft / 7);
  let yearsLeft = Math.floor(daysLeft / 365);
  document.body.innerText = `
    ${commaify(secondsLeft)} s\n
    ${commaify(minutesLeft)} m\n
    ${commaify(hoursLeft)} h\n
    ${commaify(daysLeft)} d\n
    ${commaify(weeksLeft)} w\n
    ${commaify(yearsLeft)} y\n
    now -> . <- now\n
    ${commaify(yearsAlive)} y\n
    ${commaify(weeksAlive)} w\n
    ${commaify(daysAlive)} d\n
    ${commaify(hoursAlive)} h\n
    ${commaify(minutesAlive)} m\n
    ${commaify(secondsAlive)} s\n
  `;
}

setInterval(tick, 500);
