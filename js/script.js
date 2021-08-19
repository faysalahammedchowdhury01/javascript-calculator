// select elements
const outputField = document.getElementById('output');

function displayClickedButton(event) {
  // get clicked value
  const clicked = event.target.innerText;

  // if started with 'NOT A NUMBER'
  if (outputField.value == '' && isNaN(clicked)) {
    alert('Click a number first');
  }
  // if clicked value is '='
  else if (clicked == '=') {
    return;
  }
  // if clicked value is 'DEL'
  else if (clicked == 'DEL') {
    outputField.value = outputField.value.slice(0, -1);
  }
  // if clicked value is 'C'
  else if (clicked == 'c') {
    outputField.value = '';
  }
  // if clicked value is 'NUMBER OR OPERATOR'
  else {
    outputField.value += clicked;
  }
}

function makeResult() {
  try {
    // replace '÷' and '×' operator
    const replace = { '×': '*', '÷': '/' };
    const totalText = outputField.value.replaceAll(
      /\b(?:×|÷)\b/gi,
      (matched) => replace[matched]
    );
    let result = eval(totalText);
    // to fixed when needed
    if (Math.round(result) != result) {
      result = result.toFixed(2);
    }
    outputField.value = result;
  } catch (error) {
    alert('Invalid Operation');
  }
}
