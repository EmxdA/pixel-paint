const canvasContainer = document.querySelector("#canvasContainer");
const sizeBtn = document.querySelector(".sizeBtn");

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

const boxPressed = (e) => {
  const isPixel = e.target.nodeName === "DIV";

  if (!isPixel || e.target.id == "canvasContainer") {
    return;
  }

  document
    .querySelector("#" + e.target.id)
    .setAttribute("style", "background-color: red;");
  console.log(e.target.id);
};

canvasContainer.addEventListener("mouseover", boxPressed);
sizeBtn.addEventListener("click", () => {
  let sizeOption = prompt("Enter desired size grid");
  dynamicDivCreator(sizeOption);
});

dynamicDivCreator(8);
