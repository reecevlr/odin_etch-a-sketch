const containerGrid = document.querySelector('.container-grid');
// Control Settings
const clearBtn = document.querySelector('#clr-btn');
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
    setCellListener(gridCells);

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

function setCellListener(gridCells) {
    let flag = false;

    window.onmouseup = () => {
        flag = false;
    }

    gridCells.forEach(cell => {
        cell.onmouseover = () => {
            if (flag) {
                cell.style.backgroundColor = '#e9eaec';
            }
        }
        cell.onmousedown = () => {
            cell.style.backgroundColor = '#e9eaec';
            flag = true;
        }
    });
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