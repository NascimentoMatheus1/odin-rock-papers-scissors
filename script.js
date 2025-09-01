const result = document.getElementById('gameWinner');
const playerPoints = document.getElementById('playerScore');
const computerPoints = document.getElementById('computerScore');

const start_restart = document.getElementById('start_restart');
const playerMoves = document.getElementById('playerMoves');

const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');

const playerMove = document.getElementById('playerImage');
const computerMove = document.getElementById('computerImage');

let playerScore = 0;
let ComputerScore = 0;
let round = 0;

start_restart.addEventListener('click', (e) =>{
    e.preventDefault();
    if(start_restart.innerHTML = "<button>RESTART</button>"){
        updateBoard('Choose your Move', 'none', 'none');
        playerMoves.style.display = 'flex';
        start_restart.style.display = 'none';
    }else{
        playerMoves.style.display = 'flex';
        start_restart.style.display = 'none';
    }
});

btnRock.addEventListener('click', (e) => {
    e.preventDefault();
    game('rock');
});

btnPaper.addEventListener('click', (e) => {
    e.preventDefault();
    game('paper');
});

btnScissors.addEventListener('click', (e) => {
    e.preventDefault();
    game('scissors');
});

function getComputerChoice(){
    const Choices = ["rock", "paper", "scissors"];
    const randommNum = Math.floor(Math.random() * 3);
    return Choices[randommNum];
}

function playRound(playerChoice, computerChoice){
    playerMove.classList.remove('winnerRound');
    playerMove.classList.remove('loserRound');
    computerMove.classList.remove('winnerRound');
    computerMove.classList.remove('loserRound');
    round++;

    if(isPlayerWon(playerChoice, computerChoice) == 'draw'){
        updateBoard(`ROUND: ${round} - IT'S A DRAW !!!`, playerChoice, computerChoice)
    }else if(isPlayerWon(playerChoice, computerChoice)){
        playerScore++;
        playerMove.classList.add('winnerRound');
        computerMove.classList.add('loserRound');
        updateBoard(`ROUND: ${round} - PLAYER WON !!!`, playerChoice, computerChoice);
    }else {
        ComputerScore++;
        computerMove.classList.add('winnerRound');
        playerMove.classList.add('loserRound');
        updateBoard(`ROUND: ${round} - COMPUTER WON !!!`, playerChoice, computerChoice);
    }
}

function isPlayerWon(playerChoice, computerChoice){
    let result;

    if(playerChoice == computerChoice){
        result = 'draw';
    } else if(playerChoice == 'rock' && computerChoice == 'paper'){
        result = false;
    } else if(playerChoice == 'paper' && computerChoice == 'scissors'){
        result = false;
    } else if(playerChoice == 'scissors' && computerChoice == 'rock'){
        result = false;
    }else {
        result = true;
    }
    return result;
}

function updateBoard(message, playerChoice, computerChoice){
    playerMove.innerHTML = `<img src="images/${playerChoice}.png" alt="${playerChoice} hand gesture">`;
    computerMove.innerHTML = `<img src="images/${computerChoice}.png" alt="${computerChoice} hand gesture">`

    result.innerText = '';
    result.innerText = message;

    playerPoints.innerText = ` : ${playerScore}`;
    computerPoints.innerText = ` : ${ComputerScore}`;
}

function restartGame(){
    start_restart.style.display = 'block';
    start_restart.innerHTML = '<button>RESTART</button>';
    playerScore = 0;
    ComputerScore = 0;
    round = 0;
    playerMove.classList.remove('winnerRound');
    playerMove.classList.remove('loserRound');
    computerMove.classList.remove('winnerRound');
    computerMove.classList.remove('loserRound');
}

function game(playerChoice){
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);

    if(playerScore === 5 || ComputerScore === 5){
        playerMoves.style.display = 'none';
        setTimeout(() => {
            if(playerScore === 5){
                updateBoard("PLAYER WON THE GAME !!!", "winner", "looser");
            }else{
                updateBoard("COMPUTER WON THE GAME !!!", "looser", "winner");
            }
            restartGame();
        }, 2000);
       
    }
}
