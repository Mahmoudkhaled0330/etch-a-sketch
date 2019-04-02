const wrapper = document.getElementById("main-wrapper");

function createGrid(numSquares) {
    let numberOfCells = numSquares * numSquares;
    let cellSize = 600 / numSquares;
    for (let i = 0; i < numberOfCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        wrapper.appendChild(cell);
    }
    colorBlue();
}

function colorBlue() {
    let cells = document.querySelectorAll(".cell");
    console.log(cells);

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {
            cells[i].classList.add("fill-blue");
        }) 
    }
}

createGrid(8);

