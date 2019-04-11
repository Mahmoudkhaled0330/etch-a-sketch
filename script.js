const wrapper = document.getElementById("main-wrapper");

function createGrid(numSquares) {
    let numberOfCells = numSquares * numSquares;
    let cellSize = 600 / numSquares;
    for (let i = 0; i < numberOfCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        wrapper.appendChild(cell);
    }
    colorBlue();
}

function colorBlue() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function() {
            cells[i].style.backgroundColor = "darkblue";
        }) 
    }
}

function deleteGrid() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].parentNode.removeChild(cells[i]);
    }
}

// Button functionality

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("fill-blue"); 
        cells[i].style.backgroundColor = null;
    }
    colorBlue();
});

let newGridButton = document.querySelector(".new-grid");
newGridButton.addEventListener("click", function() {
    userSelection = window.prompt("Please enter a positive number \(100 or fewer\) for a new grid creation. \(Ex. Entering '4' would create a 4x4 grid\)", 16);
    deleteGrid();
    createGrid(userSelection);
})

let randomColorButton = document.querySelector(".rgb");
randomColorButton.addEventListener("click", function() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function() {
            cells[i].style.backgroundColor = selectRandomColor();
        }) 
    }
})

function selectRandomColor() {
    let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += values[Math.floor(Math.random() * 16)];
    }
    return hexColor;
}

// Default grid
createGrid(16);

