const answerUnitText = document.querySelector(".answerUnitText"),
  alertDiv = document.querySelector(".alert"),
  unitValueInput = document.querySelector("#unitValueInput"),
  fromUnit = document.getElementById("fromUnit"),
  toUnit = document.getElementById("toUnit"),
  answerBtn = document.querySelector(".answerBtn");
let timeOut;
function removeActiveFromAlert() {
  clearTimeout(timeOut);
  alertDiv.classList.remove("active");
  if (fromUnit.value === toUnit.value) {
    timeOut = setTimeout(() => {
      alertDiv.classList.remove("active");
    }, 1200);
    return alertDiv.classList.add("active");
  }
}
fromUnit.addEventListener("change", () => {
  removeActiveFromAlert();
});
toUnit.addEventListener("change", () => {
  removeActiveFromAlert();
});
answerBtn.addEventListener("click", () => {
  removeActiveFromAlert();
  if (fromUnit.value == 0 && toUnit.value == 1) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value / 10 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 0 && toUnit.value == 2) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value / 1000 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 0 && toUnit.value == 3) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value / 1000000 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 1 && toUnit.value == 0) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value * 10 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 1 && toUnit.value == 2) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value / 100 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 1 && toUnit.value == 3) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value / 100000 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 2 && toUnit.value == 0) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value * 1000 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 2 && toUnit.value == 1) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value * 100 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 2 && toUnit.value == 3) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value / 1000 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 3 && toUnit.value == 0) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value * 1000000 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 3 && toUnit.value == 1) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value * 100000 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 3 && toUnit.value == 2) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      unitValueInput.value * 1000 +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
});
