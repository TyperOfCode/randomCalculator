
function calculate() {
  const severitiesInput = document.getElementById('severities').value;
  bias1 = 72
  bias2 = 90

  const severities = severitiesInput.split(',').map(Number).filter(n => !isNaN(n) && Number.isInteger(n) && n >= 1 && n <= 100);

  if (severities.length === 0) {
    alert('Invalid input! Please enter integers between 1 and 100 separated by a comma.');
    return;
  }

  let sumOfScaledSeverities = 0;

  for (let severity of severities) {
    let scaledSeverity = severity * (1 + ((severity - bias1) / 100));
    sumOfScaledSeverities += scaledSeverity;
  }

  let markWeighting = 4

  let finalMark1 = Math.max(20 - (sumOfScaledSeverities) * (markWeighting/100), 0);

  sumOfScaledSeverities = 0;

  for (let severity of severities) {
    let scaledSeverity = severity * (1 + ((severity - bias2) / 100));
    sumOfScaledSeverities += scaledSeverity;
  }

  let finalMark2 = Math.max(20 - (sumOfScaledSeverities) * (markWeighting/100), 0);

  let average = (finalMark1 + finalMark2) / 2

  document.getElementById('result').innerHTML = `The final mark is ${average.toFixed(2)}.<br>(Range: [${finalMark1.toFixed(2)}, ${finalMark2.toFixed(2)}])`;
}
