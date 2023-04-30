const cell = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")

const winConditions = [
    // rows
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // columms
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // diagonals
    [0,4,8],
    [6,4,2],

];
