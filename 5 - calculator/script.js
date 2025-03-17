let display = document.getElementById("display");
let history = document.getElementById("history");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function clearHistory() {
  history.innerHTML = "<li>No history found.</li>"; 
}

function calculate() {
  let expression = display.value;
  let result;

  try {
    result = eval(expression); 
  } catch (e) {
    result = "Error";
  }

  display.value = result;

  if (result !== "Error") {
    if (
      history.children.length === 1 &&
      history.children[0].textContent === "No history found."
    ) {
      history.innerHTML = "";
    }

    let historyItem = document.createElement("li");
    historyItem.textContent = `${expression} = ${result}`;
    history.appendChild(historyItem);
  }
}

function backspace() {
  let currentValue = display.value;
  display.value = currentValue.slice(0, -1); 
}
