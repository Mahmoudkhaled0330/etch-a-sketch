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

createGrid(16);

function colorBlue() {
    let cells = document.querySelectorAll(".cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function() {
            cells[i].classList.add("fill-blue");
        }) 
    }
}

// Button functionality

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
    let cells = document.querySelectorAll(".cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("fill-blue"); 
    }
});

let newGridButton = document.querySelector(".new-grid");
console.log(newGridButton);
newGridButton.addEventListener("click", function() {
    userSelection = window.prompt("Please enter a positive number of squares for a new grid creation. 'Ex. 4 would create a 4x4 grid'", 16);
    createGrid(userSelection);
})


