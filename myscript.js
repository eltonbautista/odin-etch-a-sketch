const container = document.querySelector('#container');



const drawSquares = function() {
for (let i = 0; i < 16*16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.display = 'flex';
        square.style.backgroundColor = 'red';
        square.style.minWidth = '45px';
        square.style.minHeight = '45px';
        square.style.border = '2.5px solid black'
        square.style.borderRight = '2.5px solid black';
        square.style.borderLeft = '2.5px solid black';
        container.appendChild(square);
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
square.addEventListener('click', (e) => {
    square.style.backgroundColor = 'yellow';
    square.style.filter = 'blur(4px)';
})
}
}
drawSquares();

