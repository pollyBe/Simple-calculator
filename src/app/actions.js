let x = '';
let y = '';
let sign = '';
let prevSign = '';
let result = false;

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const signs = ['+', '-', '*', '/', '+/-', '=', '%'];
const memorisedActions = [];

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelector('.calculator');
  const output = document.querySelector('.calculator__display');

  function clearOutput() {
    x = '';
    y = '';
    sign = '';
    prevSign = '';
    result = false;
    output.textContent = '0';
  }

  function calculate(a, b, operator) {
    let res;
    switch (operator) {
      case '+':
        res = parseFloat(a) + parseFloat(b);
        break;
      case '-':
        res = parseFloat(a) - parseFloat(b);
        break;
      case '*':
        res = parseFloat(a) * parseFloat(b);
        break;
      case '/':
        if (parseFloat(b) !== 0) {
          res = parseFloat(a) / parseFloat(b);
        } else {
          res = 'Error! Division by zero.';
        }
        break;
      default:
        res = 'Error! Invalid operator.';
        break;
    }
    memorisedActions.push(`${a} ${operator} ${b} => ${res}`);
    console.log(res);
    return res;
  }

  function refreshOutput(value) {
    output.textContent = value;
  }

  buttons.addEventListener('click', (e) => {
    let buttonValue = e.target.dataset.val;
    if (buttonValue === 'AC') return clearOutput();
    console.log(buttonValue);
    output.textContent = '';

    if (numbers.includes(buttonValue)) {
      if (result) {
        y = '';
        result = false;
      }

      if (y === '' && sign === '') {
        x += buttonValue;
        refreshOutput(x);
      } else if (x !== '' && sign !== '' && result === true) {
        y = buttonValue;
        result = false;
        refreshOutput(y);
      } else {
        y += buttonValue;
        refreshOutput(y);
      }
    } else if (signs.includes(buttonValue)) {
      prevSign = sign;
      sign = buttonValue;

      if (sign !== '+/-' || sign !== '%') {
        refreshOutput(sign);
      }

      console.log('x=', x, 'y=', y, 'sign=', sign, 'prev=', prevSign);

      if (sign === '%' && x !== '') {
        x = (x * y) / 100;
        result = true;
        refreshOutput(x);
      } else if (sign === '=') {
        if (x !== '' && y !== '') {
          x = calculate(x, y, prevSign);
          refreshOutput(x);
          result = true;
        }
      } else if (sign === '+/-') {
        if (x !== '') {
          x = -x;
          console.log(x);
          refreshOutput(x);
        } else if (y !== '') {
          y = -y;
          refreshOutput(y);
        }
      } else if (x !== '' && y !== '' && sign !== '') {
        x = calculate(x, y, prevSign);
        y = '';
        refreshOutput(x);
        result = true;
        prevSign = '';
      }
    } else {
      refreshOutput('Error! Missing values.');
    }
  });
});
