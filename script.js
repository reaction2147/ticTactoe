let gameBoard;
const huPlayer = 'o';
const aiPlayer = 'x';
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];

const cells = document.querySelectorAll('.cell');
startgame();

function startgame() {
    document.querySelector('.endgame').style.display = "none";
    gameBoard = Array.from(Array(9).keys());
    for(i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
     turn(square.target.id, huPlayer)
}

function turn(squareId, player) {
    gameBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    
}



