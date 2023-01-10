let board=['','','','','','','','','']
let cellElements=document.querySelectorAll('.grid-item')
let overlay= document.querySelector('.overlay');
let playerOne= document.getElementById('player-one');
let playerTwo=document.getElementById('player-two');
let restartBtn= document.querySelector('.restart');

playGame()
// making the button and overlay clickable
restartBtn.addEventListener('click',playGame)
overlay.addEventListener('click',playGame)


//switch turns
function switchPlayer(){
    playerOne.classList.toggle('active');
    playerTwo.classList.toggle('active');
}

//add Xs or Os in the array
function fillBoard(){
    let cellArray= Array.from(cellElements);
    for(let i=0;i<board.length;i++){
        board[i]=cellArray[i].textContent
    }
    console.log(board)
}


//start game or restart game
function playGame(){
    overlay.classList.remove('active')
    playerOne.classList.add('active')
    playerTwo.classList.remove('active')
    cellElements.forEach(cell=>{
        cell.textContent=''
        cell.removeEventListener('click', handleClick)
    })
    for(let i=0;i<board.length;i++){
        board[i]=''
    }
    cellElements.forEach(cell=>cell.addEventListener('click', handleClick, {once:true}))
}


//check if a player wins
function checkWin(){
    let winning_combinations=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[6,7,8],[3,4,5]]
    let draw= board.every(index=>index!=='')
    let X_wins= winning_combinations.find(combo=>
        combo.every(cell_value =>
            board[cell_value]==='X'))
            if(X_wins){
                overlay.classList.add('active')
                overlay.textContent='player 1 wins!'
            }
    let O_wins= winning_combinations.find(combo=>
        combo.every(cell_value =>
            board[cell_value]==='O'))
            if(O_wins){
                overlay.classList.add('active')
                overlay.textContent='player 2 wins!'
            }
            if(draw && !X_wins && !O_wins){
                overlay.classList.add('active')
                overlay.textContent='it\'s a draw!'
            }
        }
        
//what to do when a cell is clicked
function handleClick(){
    if(playerOne.classList.contains('active')){
                this.textContent='X'
            } else{
                this.textContent='O'
            } 
            fillBoard()
            switchPlayer()
            checkWin()

}








