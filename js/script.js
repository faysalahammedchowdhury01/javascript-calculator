// select elements
const outputField = document.getElementById('output');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function (event) {
  // get clicked value
  const clicked = event.target.innerText;

  try {
    // if started with 'NOT A NUMBER'
    if (outputField.innerText == '' && isNaN(clicked)) {
      alert('Click a number first');
    }
    // if clicked value is 'DEL'
    else if (clicked == 'DEL') {
      outputField.innerText = outputField.innerText.slice(0, -1);
    }
    // if clicked value is 'C'
    else if (clicked == 'c') {
      outputField.innerText = 0;
    }
    // if clicked value is '='
    else if (clicked == '=') {
      // replace '÷' and '×' operator
      const replace = { '×': '*', '÷': '/' };
      const totalText = outputField.innerText.replace(
        /\b(?:×|÷)\b/gi,
        (matched) => replace[matched]
      );
      let result = eval(totalText);
      // to fixed when needed
      if (Math.round(result) != result) {
        result = result.toFixed(2);
      }
      outputField.innerText = result;
    }
    // if clicked value is 'NUMBER OR OPERATOR'
    else {
      outputField.innerText += clicked;
    }
  } catch (err) {
    // throw error
    alert('Invalid operation');
    outputField.innerText = 0;
  }
});
