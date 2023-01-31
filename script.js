const body = document.querySelector("body");
const canvasContainer = document.querySelector("#canvasContainer");
const sizeBtn = document.querySelector(".sizeBtn");
const clearBtn = document.querySelector(".clearGridBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const gradientBtn = document.querySelector(".gradientBtn");
const colorPicker = document.querySelector("#colorPicker");
const colorBtn = document.querySelector("#colorBtn");
const eraseBtn = document.querySelector(".eraseBtn");
const burshBtn = document.querySelector(".brushBtn");
const defaultGrid = 16;
let solidColor = true;
let rainbowColor = false;
let gradientColor = false;
let erase = false;
let mouseEventStatus = false;

let dynamicDivCreator = (dimensions) => {
  canvasContainer.innerHTML = "";
  gridSize = Math.pow(dimensions, 2);
  for (let i = 0; i < gridSize; i++) {
    var div = document.createElement("div");
    div.setAttribute("id", "div" + (i + 1));
    div.setAttribute("style", "background-color: white;");
    canvasContainer.appendChild(div);
  }
  canvasContainer.setAttribute(
    "style",
    "grid-template-columns: repeat(" + dimensions + ", auto);"
  );
};

let clearGrid = () => {
  childNodes = canvasContainer.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    childNodes[i].setAttribute("style", "background-color: #FFFF;");
  }
};

let boxPressed = (e) => {
  let isPixel = e.target.nodeName === "DIV";

  if (!isPixel || e.target.id == "canvasContainer") {
    return;
  }
  if (solidColor) {
    document
      .querySelector("#" + e.target.id)
      .setAttribute("style", "background-color: " + colorPicker.value + ";");
  } else if (rainbowColor) {
    let hashColor = rainbowColowGenerator();
    document
      .querySelector("#" + e.target.id)
      .setAttribute("style", "background-color: " + hashColor + ";");
  } else if (gradientColor) {
    let element = document.getElementById(e.target.id);
    divColor = window
      .getComputedStyle(element)
      .getPropertyValue("background-color");
    divColor = divColor.replace("rgb(", " ").replace(")", " ");
    let arr = divColor.split(",");
    let r = Math.round(arr[0] * (1 - 0.1));
    let g = Math.round(arr[1] * (1 - 0.1));
    let b = Math.round(arr[2] * (1 - 0.1));
    divColor =
      "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    document
      .querySelector("#" + e.target.id)
      .setAttribute("style", "background-color: " + divColor + ";");
    console.log(e.target.id);
  } else if (erase) {
    document
      .querySelector("#" + e.target.id)
      .setAttribute("style", "background-color: #FFFF;");
  }
};

let rainbowColowGenerator = () => {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
};

body.addEventListener("mouseup", (event) => {
  mouseEventStatus = false;
});

canvasContainer.addEventListener("mousedown", (event) => {
  boxPressed(event);
  mouseEventStatus = true;
});

canvasContainer.addEventListener("mouseup", (event) => {
  mouseEventStatus = false;
});

canvasContainer.addEventListener("mouseover", (event) => {
  if (mouseEventStatus) {
    boxPressed(event);
  }
});

sizeBtn.addEventListener("click", () => {
  let sizeOption = prompt("Enter desired size grid");
  dynamicDivCreator(sizeOption);
});

clearBtn.addEventListener("click", clearGrid);

rainbowBtn.addEventListener("click", () => {
  (solidColor = false),
    (rainbowColor = true),
    (gradientColor = false),
    (erase = false);
});

gradientBtn.addEventListener("click", () => {
  (solidColor = false),
    (rainbowColor = false),
    (gradientColor = true),
    (erase = false);
});

colorPicker.addEventListener("change", () => {
  (solidColor = true),
    (rainbowColor = false),
    (gradientColor = false),
    (erase = false);
  colorBtn.setAttribute("style", "background-color:" + colorPicker.value + ";");
});

eraseBtn.addEventListener("click", () => {
  (solidColor = false),
    (rainbowColor = false),
    (gradientColor = false),
    (erase = true);
});

burshBtn.addEventListener("click", () => {
  (solidColor = true),
    (rainbowColor = false),
    (gradientColor = false),
    (erase = true);
});

window.onload = () => {
  colorBtn.setAttribute("style", "background-color:" + colorPicker.value + ";");
  dynamicDivCreator(defaultGrid);
};
