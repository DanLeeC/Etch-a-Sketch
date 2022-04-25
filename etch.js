// constants for
const nRows = 16;
const nCols = 16;

// Changes colour of a grid element
function fillSquare(e) {
  this.style.backgroundColor = 'blue';
  //element.classList.add("hover");
}
// Function called by reset button event listener
function resetGridColor(e) {
  childrenList.forEach(child => child.style.backgroundColor = '#ce8888');
}

// Get container div
const container = document.querySelector(".container");
// Get reset button
const resetButton = document.querySelector(".reset-button");
// Add grid elements to the container
for (let i = 0; i < nRows * nCols; i++) {
  const gridDiv = document.createElement("div");
  gridDiv.classList.add('gridElement');
  container.appendChild(gridDiv);
}
// get nodeList of grid elements
const childrenList = document.querySelectorAll(".gridElement");
// Add event listener so colour changes on mouseover
childrenList.forEach(child => child.addEventListener("mouseover", fillSquare));
// Add event listener to rest button to reset grid color
resetButton.addEventListener('click', resetGridColor);
