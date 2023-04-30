const cell = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")

console.log(cell)

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

let options = ["", "", "", "", "", "", "", "",""]
let currentPlayer = "X"
let running = false

intializeGame()
function intializeGame(){
    cell.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame)
    statusText.textContent = `${currentPlayer}'s turn` 
    running = true
}
// console.log(running)
function cellClicked(){
    // console.log("clicked")
    const cellIndex = this.getAttribute("cellIndex")
    console.log(cellIndex)
    // cellIndex = 0 , 1, 2
    if(options[cellIndex] != "" || !running){
        console.log("hii")
        return;
    }

    updateCell(this,cellIndex)
    changePlayer()
    checkWinner()
    
}

function updateCell(cell, index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer
    // console.log("updatecell")
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X" ) ? "O" : "X"
    statusText.textContent = `${currentPlayer}'s turn`
}

function checkWinner(){
    console.log("checkwinner")

}

function restartGame(){
    console.log("restart")
}