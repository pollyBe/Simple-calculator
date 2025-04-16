export function calculate(a, b, operator) {
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
    case '%':
      if (!parseFloat(b)) {
        res = parseFloat(a) / 100;
      } else {
        res = (parseFloat(a) * parseFloat(b)) / 100;
      }
      break;
    default:
      res = 'Error! Invalid operator.';
      break;
  }
  return Number.isInteger(res) ? res : res.toFixed(5).replace(/\.?0+$/, '');
}
