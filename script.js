const canvasContainer = document.querySelector("#canvasContainer");
const sizeBtn = document.querySelector(".sizeBtn");
const clearBtn = document.querySelector(".clearGridBtn");

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
    childNodes = canvasContainer.childNodes
    for (let i =0; i < childNodes.length; i++){
        childNodes[i].setAttribute('style', 'background-color: white;');
    }
}

let boxPressed = (e) => {
  let isPixel = e.target.nodeName === "DIV";

  if (!isPixel || e.target.id == "canvasContainer") {
    return;
  }

  document.querySelector("#" + e.target.id).setAttribute("style", "background-color: red;");
  console.log(e.target.id);
};

canvasContainer.addEventListener("mouseover", boxPressed);
sizeBtn.addEventListener("click", () => {
  let sizeOption = prompt("Enter desired size grid");
  dynamicDivCreator(sizeOption);
});
clearBtn.addEventListener("click", clearGrid);

dynamicDivCreator(8);
