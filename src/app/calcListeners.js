import { calculate } from './actions';

let x = '';
let y = '';
let sign = '';
let prevSign = '';
let mutation = '';
let result = false;

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const numberMutationSigns = ['%', '+/-'];
const signs = ['+', '-', '*', '/', '='];
export const memorisedActions = [];

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelector('.calculator');
  const output = document.querySelector('.calculator__display p');

  function clearOutput(val = '0') {
    x = '';
    y = '';
    sign = '';
    prevSign = '';
    result = false;
    output.textContent = val;
  }

  function refreshOutput(value) {
    output.textContent = value;
  }

  buttons.addEventListener('click', (e) => {
    let buttonValue = e.target.dataset.val;
    if (buttonValue === 'AC') return clearOutput();

    if (numbers.includes(buttonValue)) {
      if (result) {
        clearOutput('');
        x = buttonValue;
        refreshOutput(x);
      } else if (y === '' && sign === '') {
        if (x === '0' && buttonValue !== '.') {
          x = buttonValue;
        } else x += buttonValue;
        refreshOutput(x);
      } else if (sign !== '') {
        y += buttonValue;
        refreshOutput(y);
      }
    } else if (signs.includes(buttonValue)) {
      prevSign = sign;
      sign = buttonValue;

      if (result) {
        result = false;
        y = '';
        refreshOutput(sign);
      } else refreshOutput(sign);

      if (sign === '=') {
        if (x !== '' && y !== '') {
          x = calculate(x, y, prevSign);
          y = '';
          result = true;
          refreshOutput(x);
        }
      } else if (x !== '' && y !== '') {
        x = calculate(x, y, prevSign);
        y = '';
        prevSign = '';
        refreshOutput(x);
      }
    } else if (numberMutationSigns.includes(buttonValue)) {
      mutation = buttonValue;

      if (mutation === '%') {
        if (x !== '' && y === '') {
          x = calculate(x, y, mutation);
        } else if (x !== '' && y !== '') {
          x = calculate(x, y, mutation);
        }
        result = true;
        refreshOutput(x);
      } else if (mutation === '+/-') {
        if (x !== '' && y === '') {
          x = (-parseFloat(x)).toString();
          refreshOutput(x);
        } else if (y !== '') {
          y = (-parseFloat(y)).toString();
          refreshOutput(y);
        }
      } else {
        refreshOutput('Error!');
      }
    }
  });
});
