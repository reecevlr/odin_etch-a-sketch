const containerGrid = document.querySelector('.container-main-grid');
const gridBtn = document.querySelector('#grid-btn');

function createGrid(gridSize) {
    const row = document.createElement('div');
    gridSize = 16;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.textContent = 'OMG';
            row.append(cell);
        }
        containerGrid.appendChild(row);
    }
}

// Event Listeners
gridBtn.addEventListener('click', createGrid);