let boardSize = 8;
let color = "#1d1d1d";
let isEraserActive = false;

const drawBoard = document.querySelector(".draw-board");
const colorPicker = document.querySelector("#color-picker");
const eraserBtn = document.querySelector(".eraser-btn");
const sizeRange = document.querySelector(".size-range");
const rangeLabel = document.querySelector(".range-label");

colorPicker.addEventListener('input', changeColor);
eraserBtn.addEventListener('click', toggleErase);
sizeRange.addEventListener('input', changeSize);




// Functions

function drawPixel(e) {
    if(e.buttons === 1) {
        e.target.style.backgroundColor = color
    }
}

function fillBoard() {
    drawBoard.textContent = "";
    for(let i = 1; i <= boardSize * boardSize; i++) {
        let boardPixel = document.createElement("div");
        boardPixel.style.height = 400 / boardSize + "px";
        boardPixel.style.width = 400 / boardSize + "px";
        boardPixel.className = "board-pixel";
        boardPixel.addEventListener('mousedown', drawPixel)
        boardPixel.addEventListener('mouseover', drawPixel)

        drawBoard.appendChild(boardPixel);
    }
}

fillBoard()

function changeColor() {
    color = colorPicker.value;
}

function toggleErase() {
    isEraserActive = !isEraserActive;

    if(isEraserActive) {
        eraserBtn.classList.add("active");
        color = "#fff";
    } else {
        eraserBtn.classList.remove("active");
        color = colorPicker.value;
    }
}

function changeSize() {
    boardSize = sizeRange.value;
    rangeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`
    fillBoard();
}