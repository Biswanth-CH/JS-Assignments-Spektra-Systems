function calculate() {
  const input = document.getElementById("arrayInput").value.trim();

  if (input === "") {
    alert("Please enter numbers.");
    return;
  }

  const numbers = input.split(",").map((num) => parseFloat(num.trim()));

  if (numbers.some(isNaN)) {
    alert("Please enter valid numbers.");
    return;
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  let grade;
  if (average >= 91) {
    grade = "A Grade";
  } else if (average >= 81) {
    grade = "B Grade";
  } else if (average >= 71) {
    grade = "C Grade";
  } else {
    grade = "D Grade";
  }

  document.getElementById("sumResult").textContent = sum;
  document.getElementById("averageResult").textContent = average.toFixed(2);
  document.getElementById("gradeResult").textContent = grade;
  document.getElementById("result").style.display = "block";
}
