const container = document.querySelector('#container');
const restartBtn = document.querySelector('#restart-button')
const buttonContainer = document.querySelector('#button-container');

const makeGrid = function(size) {
for (let i = 0; i < size; i++) {
const squareContainer = document.createElement('div');
squareContainer.classList.add('squareContainer');
squareContainer.style.display = 'flex';
squareContainer.style.flex = '1 0 auto'
squareContainer.style.justifyContent = 'center';
squareContainer.style.width = '100%';
squareContainer.style.backgroundColor = 'white'
buttonContainer.appendChild(squareContainer);

for (let i = 0; i < size; i++) {
const square = document.createElement('div');
        square.classList.add('square');
        square.style.display = 'flex';
        square.style.backgroundColor = 'red';
        square.style.width = '100%';
        square.style.height = '100%';
        square.style.outline = '1px solid black'
        squareContainer.appendChild(square);
const yellowEffect = function(){
    square.style.backgroundColor = 'yellow';
    square.style.filter = 'blur(6px)';
}
const greyEffect = function(){
    square.style.backgroundColor = 'grey';
    square.style.filter = 'blur(6px)';
}
const whiteEffect = function() {
    square.style.backgroundColor = 'white';
    square.style.filter = 'blur(6px)';
}
const blackEffect = function() {
    square.style.backgroundColor = 'black';
    square.style.filter = 'blur(6px)'
}
const yellowButton = function() {
square.addEventListener('mouseenter', yellowEffect);
}
const greyButton = function() {
square.addEventListener('mouseenter', greyEffect);
}
const whiteButton = function() {
square.addEventListener('mouseenter', whiteEffect);
}
const blackButton = function() {
square.addEventListener('mouseenter', blackEffect);
}
const stopYellow = function () {
square.removeEventListener('mouseenter', yellowEffect);
}
const stopGrey = function(){
square.removeEventListener('mouseenter', greyEffect);
}
const stopWhite = function () {
square.removeEventListener('mouseenter', whiteEffect);
}
const stopBlack = function() {
square.removeEventListener('mouseenter', blackEffect);
}

document.addEventListener('keydown', e => {
    if (e.key === 'e'){
        stopYellow();
        stopGrey();
        stopWhite();
        stopBlack();
};
});
    
document.addEventListener('keydown', e => {
    if (e.key === 's'){
        yellowButton();
        stopGrey();
        stopWhite();
        stopBlack();
    }
});
document.addEventListener('keydown', e => {
    if(e.key === 'd') {
        greyButton();
        stopWhite();
        stopBlack();
        stopYellow();
    }
});
document.addEventListener('keydown', e => {
    if(e.key === 'w') {
        whiteButton();
        stopYellow();
        stopGrey();
        stopBlack();
    }
});
document.addEventListener('keydown', e => {
    if(e.key === 'a') {
        blackButton();
        stopYellow();
        stopGrey();
        stopWhite();
    }
});
}
}
}

makeGrid(16);

const clearDiv = function() {
    document.querySelector('#button-container').innerText = '';
}

function numberOfGrid() {
    let input = prompt('How big would you like it? No bigger than 100 please! ')
    if (input <= 100 && input > 0){
        clearDiv();
    makeGrid(input);
    } else if (input > 100) {
        alert("That's TOO BIG!");
    } else if (input === null || input === ''){
    }
 }

const reload = function() {
    window.location.reload();
}
//restartBtn.addEventListener('click', clearDiv);
restartBtn.addEventListener('click', numberOfGrid);
//restartBtn.addEventListener('click', reload);


