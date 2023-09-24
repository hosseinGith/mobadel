const metrContainer = document.querySelector(".metrContainer"),
  kGContainer = document.querySelector(".kGContainer"),
  answerUnitText = document.querySelector(".answerUnitText"),
  alertDiv = document.querySelector(".alert"),
  unitValueInput = document.querySelector("#unitValueInput"),
  fromUnit = document.getElementById("fromUnit"),
  toUnit = document.getElementById("toUnit"),
  answerBtn = document.querySelector(".answerBtn"),
  changeModeSKM = document.querySelector(".SKM"),
  changeModeKG = document.querySelector(".KG"),
  answerBtnKG = document.querySelector(".answerBtnKG"),
  kGValueInput = document.querySelector("#kGValueInput"),
  fromUnitKG = document.querySelector("#fromUnitKG"),
  toUnitKg = document.querySelector("#toUnitKg");

let timeOut;
function removeActiveFromAlert(input = fromUnit.value, input2 = toUnit.value) {
  clearTimeout(timeOut);
  alertDiv.classList.remove("active");
  if (input === input2) {
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
  if (fromUnit.value == 3 && toUnit.value == 4) {
    answerUnitText.classList.add("active");
    let colact = unitValueInput.value / 1.6093439999672;
    answerUnitText.querySelector("span").textContent =
      "..." +
      colact.toFixed(2) +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
  if (fromUnit.value == 4 && toUnit.value == 3) {
    answerUnitText.classList.add("active");
    let colact = unitValueInput.value * 1.6093439999672;
    answerUnitText.querySelector("span").textContent =
      "..." +
      colact.toFixed(2) +
      ` ${toUnit.children[toUnit.value].textContent}`;
  }
});
changeModeSKM.addEventListener("click", () => {
  changeModeSKM.parentElement.parentElement.classList.remove("active");
  metrContainer.classList.add("active");
  kGContainer.classList.remove("active");
  answerUnitText.classList.remove("active");
  answerUnitText.querySelector("span").textContent = "";
});
changeModeKG.addEventListener("click", () => {
  changeModeSKM.parentElement.parentElement.classList.add("active");
  kGContainer.classList.add("active");
  metrContainer.classList.remove("active");
  answerUnitText.classList.remove("active");
  answerUnitText.querySelector("span").textContent = "";
});
fromUnitKG.addEventListener("change", () => {
  removeActiveFromAlert(fromUnitKG.value, toUnitKg.value);
});
toUnitKg.addEventListener("change", () => {
  removeActiveFromAlert(fromUnitKG.value, toUnitKg.value);
});
answerBtnKG.addEventListener("click", () => {
  removeActiveFromAlert(fromUnitKG.value, toUnitKg.value);
  if (fromUnitKG.value == 0 && toUnitKg.value == 1) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      kGValueInput.value / 4.608 +
      ` ${toUnitKg.children[toUnitKg.value].textContent}`;
  }
  if (fromUnitKG.value == 0 && toUnitKg.value == 2) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      kGValueInput.value / 1000 +
      ` ${toUnitKg.children[toUnitKg.value].textContent}`;
  }
  if (fromUnitKG.value == 1 && toUnitKg.value == 0) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      kGValueInput.value * 4.608 +
      ` ${toUnitKg.children[toUnitKg.value].textContent}`;
  }
  if (fromUnitKG.value == 1 && toUnitKg.value == 2) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      kGValueInput.value / 217.0138888888889 +
      ` ${toUnitKg.children[toUnitKg.value].textContent}`;
  }
  if (fromUnitKG.value == 2 && toUnitKg.value == 0) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      kGValueInput.value * 1000 +
      ` ${toUnitKg.children[toUnitKg.value].textContent}`;
  }
  if (fromUnitKG.value == 2 && toUnitKg.value == 1) {
    answerUnitText.classList.add("active");
    answerUnitText.querySelector("span").textContent =
      kGValueInput.value * 217.0138888888889 +
      ` ${toUnitKg.children[toUnitKg.value].textContent}`;
  }
});
