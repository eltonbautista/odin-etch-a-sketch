const container = document.querySelector('#container');
/* 

if (i < 16) {
    square.style.borderTop = '5px solid black';
} else if (i >= 240) {
    square.style.borderBottom = '5px solid black';
} 
if (i % 16 === 0) {
    square.style.borderLeft = '5px solid black';
} 
   if(i % 16 === 15) {
    square.style.borderRight = '5px solid black';
}
        
        */

const makeGrid = function(size) {
for (let i = 0; i < size; i++) {
const squareContainer = document.createElement('div');
squareContainer.classList.add('squareContainer');
squareContainer.style.display = 'flex';
squareContainer.style.justifyContent = 'center';
squareContainer.style.maxWidth = '850px';
squareContainer.style.width = '850px';
squareContainer.style.maxHeight = '850px';
squareContainer.style.minHeight = 'auto';
squareContainer.style.backgroundColor = 'white'
//squareContainer.style.border = '5px solid yellow'
squareContainer.style.margin = '0';
container.appendChild(squareContainer);

for (let i = 0; i < size; i++) {
const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'red';
const width = square.style.maxWidth = '15px';
        square.style.width = '100%';
        square.style.flex = '1 0 0';
        square.style.height = width;
        square.style.border = '1px solid black'
        squareContainer.appendChild(square);

square.addEventListener('click', (e) => {
    square.style.backgroundColor = 'yellow';
    square.style.filter = 'blur(2px)';
})         
}
}
}

function numberOfGrid() {
   let input = prompt('How big would you like it?')
   makeGrid(input);
}
numberOfGrid();
