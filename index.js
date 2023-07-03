const defaultColor = '#e9eaec';
const containerGrid = document.querySelector('.container-grid');
// Control Settings
const clearBtn = document.querySelector('#clr-btn');
const defaultColorBtn = document.querySelector('#def-btn');
const inColor = document.querySelector('#color-in');
const inColorBtn = document.querySelector('#color-btn');
const rainbowBtn = document.querySelector('#rbw-btn');
// Size Settings
const inSize = document.querySelector('#input-size');
const displaySize = document.querySelector('#display-size');
const gridBtn = document.querySelector('#grid-btn');

// Create initial grid of 16x16
createGrid(16);

// Event Listeners
clearBtn.addEventListener('click', function(e) {
    getGridCells().forEach(cell => {
        // Default style
        cell.style.backgroundColor = 'transparent';
    });
});

defaultColorBtn.addEventListener('click', setColor);
inColorBtn.addEventListener('click', setColor);
rainbowBtn.addEventListener('click', setColor);

inSize.addEventListener('input', getGridSize);

gridBtn.addEventListener('click', function(e) {
    createGrid(inSize.value);
});

// Functions
function createGrid(gridSize) {
    resetGrid();

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j <= gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            // cell.textContent = (i * gridSize) + j;
            containerGrid.append(cell);
        }
    }
    const gridCells = document.querySelectorAll('.grid-cell');
    setGridCells(gridCells);
    setCellListener(gridCells, defaultColor);

    containerGrid.style = `grid-template-rows: 
        repeat(${gridSize}, 1fr)`;
    containerGrid.style = `grid-template-columns: 
        repeat(${gridSize}, 1fr)`;
}

function resetGrid() {
    const cells = document.querySelectorAll('.grid-cell');

    cells.forEach(cell => {
        cell.parentNode.removeChild(cell);
    });
}

function setColor(e) {
    if (e.target.id === 'def-btn') {
        setCellListener(gridCells, defaultColor);
    }
    else if (e.target.id === 'color-btn') {
        let color = inColor.value;
        setCellListener(gridCells, color);
    }
    else if (e.target.id === 'rbw-btn') {
        setCellListener(gridCells);
    }
}

// Credits: Phillip (StackOverflow) => Basis
function setCellListener(gridCells, color) {
    let flag = false;

    window.onmouseup = () => {
        flag = false;
    }

    if (color !== undefined) {
        gridCells.forEach(cell => {
            let brightness = 100;

            cell.onmouseover = () => {
                if (flag) {
                    cell.style.backgroundColor = color;

                    cell.style.filter = `brightness(${brightness}%)`;
                    brightness = reduceBrightness(brightness);
                }
            }
            cell.onmousedown = () => {
                cell.style.backgroundColor = color;
                flag = true;

                cell.style.filter = `brightness(${brightness}%)`;
                brightness = reduceBrightness(brightness);
            }
        });
    }
    else {
        gridCells.forEach(cell => {
            let brightness = 100;

            cell.onmouseover = () => {
                if (flag) {
                    cell.style.backgroundColor = getRandomColor(150);

                    cell.style.filter = `brightness(${brightness}%)`;
                    brightness = reduceBrightness(brightness);
                }
            }
            cell.onmousedown = () => {
                cell.style.backgroundColor = getRandomColor(150);
                flag = true;

                cell.style.filter = `brightness(${brightness}%)`;
                brightness = reduceBrightness(brightness);
            }
        });
    }
}

function reduceBrightness(brightness) {
    if (brightness === 100) {
         return brightness - 20;
    }
    else {
        return brightness - 10;
    }
}

function setGridCells(cells) {
    this.gridCells = cells;
}

function getGridCells() {
    if (gridCells === 'undefined') {
        gridCells = document.querySelectorAll('.grid-cell');
    }
    return gridCells;
}

function getGridSize() {
    displaySize.textContent = inSize.value;
} 

// Credits: David Mihal (StackOverflow)
function getRandomColor(brightness) {
    function randomChannel(brightness) {
        let r = 255 - brightness;
        let n = 0|((Math.random() * r) + brightness);
        let s = n.toString(16);
        
        return (s.length==1) ? '0'+s : s;
    }
    return '#' + randomChannel(brightness) + 
        randomChannel(brightness) + randomChannel(brightness);
}