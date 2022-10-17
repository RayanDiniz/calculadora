const outputDisplay = document.getElementById("tela");
const decimal = document.getElementById("dec");

function display(eId) {
  if(outputDisplay.value == '0' || outputDisplay.value == 'Syntax error') {
    outputDisplay.value = eId.textContent;
  } else {
    outputDisplay.value += eId.textContent;
  }
}

function tcClear() {
  outputDisplay.value = '0';
  decimal.disabled = false;
}

function backSpace() {
  if(outputDisplay.value.length == 1 || outputDisplay.value == '0' || outputDisplay.value == 'Syntax error') {
    outputDisplay.value = '0';
    decimal.disabled = false;
  } else {
    outputDisplay.value = outputDisplay.value.substring(0, outputDisplay.value.length - 1);
  }
}

function setOperator(eId) {
  if (outputDisplay.value == '0' || outputDisplay.value == 'Syntax error') {
    outputDisplay.value = '0';
  } else {
    outputDisplay.value += eId.textContent;
    decimal.disabled = false;
  }
}

function setDecimal(eId) {
  outputDisplay.value += eId.textContent;
  decimal.disabled = status;
}

function calculate() {
  try {
    if (outputDisplay.value != '') {
      const calculateResult = eval(outputDisplay.value);
      outputDisplay.value = calculateResult;
    }
  } catch (err) {
    outputDisplay.value = 'Syntax error';
  }
}