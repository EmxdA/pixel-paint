const canvasContainer = document.querySelector("#canvasContainer");
const sizeBtn = document.querySelector(".sizeBtn");
const clearBtn = document.querySelector(".clearGridBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const gradientBtn = document.querySelector(".gradientBtn");
const colorPicker = document.querySelector("#colorPicker");
let solidColor = true;
let rainbowColor = false;
let gradientColor = false;


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

  if (solidColor){
    document.querySelector("#" + e.target.id).setAttribute("style", "background-color: " + colorPicker.value +";");
  } else if(rainbowColor)
  {
    let hashColor = rainbowColowGenerator();
    document.querySelector("#" + e.target.id).setAttribute("style", "background-color: " + hashColor +";");
  } else if(gradientColor){

  }
  console.log(e.target.id);
};

let rainbowColowGenerator = () =>{
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

canvasContainer.addEventListener("mouseover", boxPressed);
sizeBtn.addEventListener("click", () => {
  let sizeOption = prompt("Enter desired size grid");
  dynamicDivCreator(sizeOption);
});
clearBtn.addEventListener("click", clearGrid);

rainbowBtn.addEventListener("click", () => {
    solidColor = false, rainbowColor = true, gradientColor = false;
})

gradientBtn.addEventListener("click", () => {
    solidColor = false, rainbowColor = false, gradientColor = true;
})

colorPicker.addEventListener("change", () => {
    solidColor = true, rainbowColor = false, gradientColor = false;
})

dynamicDivCreator(8);
