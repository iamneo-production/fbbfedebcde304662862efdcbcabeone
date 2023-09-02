// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let chance = "X";
let i = 0;
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    //console.log(element);
    //console.log(index);
    //console.log(cells);
    for(const cond of conditions) {
        const [a, b, c] = cond;
        //console.log("check for:" + cells[a] + cells[b] + cells[c]);
        if(cells[a] && cells[a] == cells[b] && cells[a] == cells[c]) {
            console.log(cells[a] + "wins");
        }
    }
    
    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};
function chnchance() {
    if(chance == "X") {
        chance = "O";
    } else {
        chance = "X";
    }
}
function func1() {
    if(cells[0] == ""){
        cells[0] = chance;
        ticTacToe(chance, 0);
        chnchance();
}
function func2() {
    cells[1] = chance;
    ticTacToe(chance, 1);
    chnchance();
}
function func3() {
    cells[2] = chance;
    ticTacToe(chance, 2);
    chnchance();
}
function func4() {
    cells[3] = chance;
    ticTacToe(chance, 3);
    chnchance();
}
function func5() {
    cells[4] = chance;
    ticTacToe(chance, 4);
    chnchance();
}
function func6() {
    cells[5] = chance;
    ticTacToe(chance, 5);
    chnchance();
}
function func7() {
    cells[6] = chance;
    ticTacToe(chance, 6);
    chnchance();
}
function func8() {
    cells[7] = chance;
    ticTacToe(chance, 7);
    chnchance();
}
function func9() {
    cells[8] = chance;
    ticTacToe(chance, 8);
    chnchance();
}
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
