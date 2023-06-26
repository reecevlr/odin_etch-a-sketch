const containerGrid = document.querySelector('.container-grid');
const gridBtn = document.querySelector('#grid-btn');

function createGrid(gridSize) {
    gridSize = 16;

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

// Event Listeners
gridBtn.addEventListener('click', createGrid);