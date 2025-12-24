const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let equation = "";

function updateDisplay() {
  display.innerText = equation === "" ? "0" : equation;
}

function calculate() {
  if (equation.endsWith("+")) {
    equation = equation.slice(0, -1);
  }
  if (equation === "") return;

  const numbers = equation.split("+");
  let sum = 0;
  numbers.forEach((num) => {
    sum += parseFloat(num);
  });

  equation = String(sum);
  updateDisplay();
}

function handleInput(key) {
  if (key >= "0" && key <= "9") {
    equation += key;
    updateDisplay();
  } else if (key === "+") {
    if (equation !== "" && !equation.endsWith("+")) {
      equation += "+";
      updateDisplay();
    }
  } else if (key === "=" || key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    equation = equation.slice(0, -1);
    updateDisplay();
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const val = button.innerText;
    handleInput(val);
  });
});

document.addEventListener("keydown", (event) => {
  handleInput(event.key);
});

function handleInput(key) {
  if (key >= "0" && key <= "9") {
    equation += key;
  } else if (key === "+") {
    if (equation !== "" && !equation.endsWith("+")) equation += "+";
  } else if (key === "=" || key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    equation = equation.slice(0, -1);
  } else if (key === "AC" || key === "Escape") {
    equation = "";
  }
  updateDisplay();
}
