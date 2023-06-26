const containerGrid = document.querySelector('.container-grid');
const inSize = document.querySelector('#input-size');
const displaySize = document.querySelector('#display-size');
const gridBtn = document.querySelector('#grid-btn');

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
    containerGrid.style = `grid-template-columns: 
        repeat(${gridSize}, 0fr)`;
}

function getGridSize() {
    displaySize.textContent = inSize.value;
}

function resetGrid() {
    const cells = document.querySelectorAll('.grid-cell');

    cells.forEach(cell => {
        cell.parentNode.removeChild(cell);
    });
}

// Event Listeners
gridBtn.addEventListener('click', function(e) {
    createGrid(inSize.value);
});

inSize.addEventListener('input', getGridSize);

// Create initial grid of 16x16
createGrid(16);