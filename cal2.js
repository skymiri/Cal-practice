// cal2.js

document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("inputBox");
  const resultElement = document.getElementById("result");
  const errorElement = document.getElementById("error");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    const input = inputBox.value;
    const regex = /([-+*/])|\d+/g;
    const tokens = input.match(regex);

    if (tokens === null) {
      errorElement.textContent = "유효하지 않은 계산식입니다.";
      resultElement.textContent = "결과:";
      return;
    }

    let result = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      if (isNaN(operand)) {
        errorElement.textContent = "유효하지 않은 계산식입니다.";
        resultElement.textContent = "결과:";
        return;
      }

      switch (operator) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "*":
          result *= operand;
          break;
        case "/":
          result /= operand;
          break;
        default:
          errorElement.textContent = "유효하지 않은 계산식입니다.";
          resultElement.textContent = "결과:";
          return;
      }
    }

    errorElement.textContent = "에러:";
    resultElement.textContent = `결과: ${result}`;
  });
});
