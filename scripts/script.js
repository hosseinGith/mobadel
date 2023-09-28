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
function condationTrue(operation, toUnit) {
  answerUnitText.classList.add("active");
  answerUnitText.querySelector("span").textContent =
    operation + ` ${toUnit.children[toUnit.value].textContent}`;
}
fromUnit.addEventListener("change", () => {
  removeActiveFromAlert();
});
toUnit.addEventListener("change", () => {
  removeActiveFromAlert();
});
answerBtn.addEventListener("click", () => {
  removeActiveFromAlert();
  if (fromUnit.value == 0) {
    switch (Number(toUnit.value)) {
      case 1:
        condationTrue(unitValueInput.value / 10, toUnit);
        break;
      case 2:
        condationTrue(unitValueInput.value / 1000, toUnit);
        break;
      case 3:
        condationTrue(unitValueInput.value / 1000000, toUnit);
        break;
      case 4:
        condationTrue(unitValueInput.value / 1609343.9999672, toUnit);
        break;
    }
  }
  if (fromUnit.value == 1) {
    switch (Number(toUnit.value)) {
      case 0:
        condationTrue(unitValueInput.value * 10, toUnit);
        break;
      case 2:
        condationTrue(unitValueInput.value / 100, toUnit);
        break;
      case 3:
        condationTrue(unitValueInput.value / 100000, toUnit);
        break;
      case 4:
        condationTrue(unitValueInput.value / 160934.39999672, toUnit);
        break;
    }
  }
  if (fromUnit.value == 2) {
    switch (Number(toUnit.value)) {
      case 0:
        condationTrue(unitValueInput.value * 1000, toUnit);
        break;
      case 1:
        condationTrue(unitValueInput.value * 100, toUnit);
        break;
      case 3:
        condationTrue(unitValueInput.value / 1000, toUnit);
        break;
      case 4:
        condationTrue(unitValueInput.value / 1609.3439999672, toUnit);
        break;
    }
  }
  if (fromUnit.value == 3) {
    switch (Number(toUnit.value)) {
      case 0:
        condationTrue(unitValueInput.value * 1000000, toUnit);
        break;
      case 1:
        condationTrue(unitValueInput.value * 100000, toUnit);
        break;
      case 2:
        condationTrue(unitValueInput.value * 1000, toUnit);
        break;
      case 4:
        condationTrue(unitValueInput.value / 1.6093439999672, toUnit);
        break;
    }
  }
  if (fromUnit.value == 4) {
    switch (Number(toUnit.value)) {
      case 0:
        condationTrue(unitValueInput.value * 1609343.9999672, toUnit);
        break;
      case 1:
        condationTrue(unitValueInput.value * 160934.39999672, toUnit);
        break;
      case 2:
        condationTrue(unitValueInput.value * 1609.3439999672, toUnit);
        break;
      case 3:
        condationTrue(unitValueInput.value * 1.6093439999672, toUnit);
        break;
    }
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
  if (fromUnitKG.value == 0) {
    console.log("toUnitKg.value: ", toUnitKg.value);
    switch (Number(toUnitKg.value)) {
      case 1:
        condationTrue(kGValueInput.value / 4.608, toUnitKg);
        break;
      case 2:
        condationTrue(kGValueInput.value / 1000, toUnitKg);
        break;
      case 3:
        condationTrue(kGValueInput.value / 1000000, toUnitKg);
        break;
    }
  }
  if (fromUnitKG.value == 1) {
    switch (Number(toUnitKg.value)) {
      case 0:
        condationTrue(kGValueInput.value * 4.608, toUnitKg);
        break;
      case 2:
        condationTrue(kGValueInput.value / 217.0138888888889, toUnitKg);
        break;
      case 3:
        condationTrue(kGValueInput.value / 217013.8888888889, toUnitKg);
        break;
    }
  }
  if (fromUnitKG.value == 2) {
    switch (Number(toUnitKg.value)) {
      case 0:
        condationTrue(kGValueInput.value * 1000, toUnitKg);
        break;
      case 1:
        condationTrue(kGValueInput.value * 217.0138888888889, toUnitKg);
        break;
      case 3:
        condationTrue(kGValueInput.value / 1000, toUnitKg);
        break;
    }
  }
  if (fromUnitKG.value == 3) {
    switch (Number(toUnitKg.value)) {
      case 0:
        condationTrue(kGValueInput.value * 1000000, toUnitKg);
        break;
      case 1:
        condationTrue(kGValueInput.value * 217013.8888888889, toUnitKg);
        break;
      case 2:
        condationTrue(kGValueInput.value * 1000, toUnitKg);
        break;
    }
  }
});
