function calculate(operation) {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result;
  switch (operation) {
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      if (secondNumber === 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      alert("Invalid operation.");
      return;
  }

  document.getElementById("result").textContent = result;
}

function resetForm() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";

  document.getElementById("result").textContent = "";
}
