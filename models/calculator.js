function isNumber(value) {
  return !isNaN(Number(value));
}

function add(number1, number2) {
  if (!isNumber(number1) || !isNumber(number2)) {
    return "Error";
  }

  return number1 + number2;
}

exports.add = add;
