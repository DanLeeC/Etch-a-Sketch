const nRows = 16;
const nCols = 16;


const container = document.querySelector(".container");

for (let i = 0; i < nRows; i++){
    const rowDiv = document.createElement("div");
    rowDiv.classList.add('row');
    rowDiv.innerHTML = i;
    for (let j = 0; j < nCols; j++){
      const colDiv = document.createElement("div");
      colDiv.classList.add("col");
      colDiv.innerHTML = j;
      rowDiv.appendChild(colDiv);
    }
    container.appendChild(rowDiv);
}
