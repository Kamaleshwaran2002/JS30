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
    statusText.textContent = `Now ${currentPlayer}'s turn` 
    running = true
}
// console.log(running)
function cellClicked(){
    // console.log("clicked")
    const cellIndex = this.getAttribute("cellIndex")
    // console.log(cellIndex)
    // cellIndex = 0 , 1, 2
    if(options[cellIndex] != "" || !running){
        // console.log("hii")
        return;
    }

    updateCell(this,cellIndex)
    // changePlayer()
    checkWinner()
    
}

function updateCell(cell, index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer
    // console.log("updatecell")
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X" ) ? "O" : "X"
    statusText.textContent = `Now ${currentPlayer}'s turn`
}

function checkWinner(){
    // console.log("checkwinner")
    let roundWon = false

    for(i=0; i<winConditions.length; i++){
        const condition = winConditions[i]

        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if(cellA =="" || cellB =="" || cellC ==""){
            continue
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true
            break
        }

    }

    if(roundWon){
        statusText.textContent = `${currentPlayer}'s wins!`
        running = false
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`
        running = false
    }
    else{
        changePlayer()
    }

}

function restartGame(){
    // console.log("restart")
    currentPlayer = "X"
    options = ["", "", "", "", "", "", "", "",""]
    statusText.textContent = `${currentPlayer}'s turn` 
    cell.forEach(cell => cell.textContent="")
    running = true

}