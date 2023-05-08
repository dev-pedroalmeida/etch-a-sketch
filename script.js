let boardSize = 8;
let color = "#1d1d1d";
let isEraserActive = false;
let isRainbowActive = false;

const drawBoard = document.querySelector(".draw-board");
const colorPicker = document.querySelector("#color-picker");
const eraserBtn = document.querySelector("#eraser-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const sizeRange = document.querySelector("#size-range");
const rangeLabel = document.querySelector(".range-label");

colorPicker.addEventListener('input', changeColor);
eraserBtn.addEventListener('click', toggleErase);
rainbowBtn.addEventListener('click', toggleRainbow);
sizeRange.addEventListener('input', changeSize);




// Functions

function drawPixel(e) {
    if(e.buttons === 1) {
        if(isRainbowActive) {
            e.target.style.backgroundColor = `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`;
        } else {
            e.target.style.backgroundColor = color
        }
    }
}

function fillBoard() {
    drawBoard.textContent = "";

    const boardHeight = drawBoard.clientHeight;
    const boardWidth = drawBoard.clientWidth;

    for(let i = 1; i <= boardSize * boardSize; i++) {
        let boardPixel = document.createElement("div");
        boardPixel.style.height = boardHeight / boardSize + "px";
        boardPixel.style.width = boardWidth / boardSize + "px";
        boardPixel.className = "board-pixel";
        boardPixel.addEventListener('mousedown', drawPixel)
        boardPixel.addEventListener('mouseover', drawPixel)

        drawBoard.appendChild(boardPixel);
    }
}

fillBoard()

function changeColor() {
    isEraserActive && toggleErase();
    isRainbowActive && toggleRainbow();
    color = colorPicker.value;
}

function toggleErase() {
    isRainbowActive && toggleRainbow();
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

function toggleRainbow() {
    isEraserActive && toggleErase();
    isRainbowActive = !isRainbowActive;

    if(isRainbowActive) {
        rainbowBtn.classList.add("active");

    } else {
        rainbowBtn.classList.remove("active");
        color = colorPicker.value;
    }
}