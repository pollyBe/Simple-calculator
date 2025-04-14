let x = '';
let y = '';
let sign = '';
let result = false;

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const signs = ['+', '-', '*', '/', '+/-', '=', '%'];

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelector('.calculator');
  const output = document.querySelector('.calculator__display');

  function getResult() {
    x = '';
    y = '';
    sign = '';
    result = false;
    output.textContent = '0';
  }

  buttons.addEventListener('click', (e) => {
    console.log('click');
    if (e.target.classList.contains('clear')) return getResult();
    output.textContent = '';

    if (e.target.classList.contains('calculator__button')) {
      let number = e.target.textContent;
      if (numbers.includes(number)) {
        if (y === '' && sign === '') {
          x += number;
          output.textContent = x;
        } else if (x !== '' && sign !== '' && result === true) {
          y += number;
          output.textContent = y;
        } else {
          y += number;
          output.textContent = y;
        }
      }
    }

    if (e.target.classList.contains('calculator__button-operation')) {
      output.textContent = '';
      let operator = e.target.textContent;
      if (signs.includes(operator)) {
        console.log('sign', operator);
        sign += operator;
        output.textContent = sign;
        makeAction();
      }
    }
  });

  function makeAction(sign) {
    if (sign === '=') {
      switch (sign) {
        case 'plus':
          x = +x + +y;
          break;
        case 'minus':
          x = x - y;
          break;
        case 'multiple':
          x = x * y;
          break;
        case 'divide':
          x = x / y;
          break;
      }
      result = true;
      output.textContent = x;
    } else {
      switch (sign) {
        case 'percent':
          y = (x / 100) * y;
          break;
        case 'sign-change':
          if (x < 0) {
            x = `${x}`;
          } else if (x === '0') return;
          x = `-${x}`;
          break;
      }
      output.textContent = x;
    }
  }
});
