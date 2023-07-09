document.getElementById('bias').oninput = function () {
  document.getElementById('biasValue').innerHTML = 108 - this.value;
}

function calculate() {
  const severitiesInput = document.getElementById('severities').value;
  const bias = 108 - document.getElementById('bias').value;

  const severities = severitiesInput.split(',').map(Number).filter(n => !isNaN(n) && Number.isInteger(n) && n >= 1 && n <= 100);

  if (severities.length === 0) {
    alert('Invalid input! Please enter integers between 1 and 100 separated by a comma.');
    return;
  }

  let sumOfScaledSeverities = 0;

  for (let severity of severities) {
    let scaledSeverity = severity * (1 - ((severity - bias) / 100));
    sumOfScaledSeverities += scaledSeverity;
  }

  let finalMark = Math.max(20 - (sumOfScaledSeverities) * (5/100), 0);

  document.getElementById('result').innerHTML = `The final mark is ${finalMark.toFixed(2)}`;
}
