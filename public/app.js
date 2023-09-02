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
    console.log(element);
    console.log(index);
    for(const cond of conditions) {
        const [a, b, c] = cond;
        console.log("check for:" + cells[a]);
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
    ticTacToe(chance, 0);
    cells[0] = chance;
    chnchance();
}
function func2() {
    ticTacToe(chance, 1);
    cells[0] = chance;
    chnchance();
}
function func3() {
    ticTacToe(chance, 2);
    cells[0] = chance;
    chnchance();
}
function func4() {
    ticTacToe(chance, 3);
    cells[0] = chance;
    chnchance();
}
function func5() {
    ticTacToe(chance, 4);
    cells[0] = chance;
    chnchance();
}
function func6() {
    ticTacToe(chance, 5);
    cells[0] = chance;
    chnchance();
}
function func7() {
    ticTacToe(chance, 6);
    cells[0] = chance;
    chnchance();
}
function func8() {
    ticTacToe(chance, 7);
    cells[0] = chance;
    chnchance();
}
function func9() {
    ticTacToe(chance, 8);
    cells[0] = chance;
    chnchance();
}
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
