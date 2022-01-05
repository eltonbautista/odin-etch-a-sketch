const container = document.querySelector('#container');


for (let i = 0; i < 16; i++) {
    const squareOne = document.createElement('div');
    squareOne.classList.add('square');
    squareOne.style.backgroundColor = 'yellow';
    squareOne.style.minWidth = '45px';
    squareOne.style.minHeight = '45px';
    squareOne.style.border = '2.5px solid black'
    squareOne.style.borderRight = '2.5px solid black'
    squareOne.style.borderTop = '5px solid black'
    container.appendChild(squareOne);
}

for (let i = 0; i < 224; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = 'red';
    square.style.minWidth = '45px';
    square.style.minHeight = '45px';
    square.style.border = '2.5px solid black'
    square.style.borderRight = '2.5px solid black';
    square.style.borderLeft = '2.5px solid black';
    container.appendChild(square);

}


for (let i = 0; i < 16; i++) {                                                                                                                                                       
    const squareLast = document.createElement('div');
    squareLast.classList.add('square');
    squareLast.style.backgroundColor = 'yellow';
    squareLast.style.minWidth = '45px';
    squareLast.style.minHeight = '45px';
    squareLast.style.border = '2.5px solid black'
    squareLast.style.borderLeft = '2.5px solid black'
    squareLast.style.borderBottom = '5px solid black'
    container.appendChild(squareLast);
}


