// select elements
const outputField = document.getElementById('output');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function (event) {
  // get clicked value
  const clicked = event.target.innerText;

  try {
    // if started with 'NOT A NUMBER'
    if (outputField.value == '' && isNaN(clicked)) {
      alert('Click a number first');
    }
    // if clicked value is 'DEL'
    else if (clicked == 'DEL') {
      outputField.value = outputField.value.slice(0, -1);
    }
    // if clicked value is 'C'
    else if (clicked == 'c') {
      outputField.value = '';
    }
    // if clicked value is '='
    else if (clicked == '=') {
      // replace '÷' and '×' operator
      const replace = { '×': '*', '÷': '/' };
      const totalText = outputField.value.replace(
        /\b(?:×|÷)\b/gi,
        (matched) => replace[matched]
      );
      let result = eval(totalText);
      // to fixed when needed
      if (Math.round(result) != result) {
        result = result.toFixed(2);
      }
      outputField.value = result;
    }
    // if clicked value is 'NUMBER OR OPERATOR'
    else {
      outputField.value += clicked;
    }
  } catch (err) {
    // throw error
    alert('Invalid operation');
    outputField.value = '';
  }
});
