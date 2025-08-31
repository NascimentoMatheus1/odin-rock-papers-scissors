const result = document.getElementById('gameWinner');
const playerPoints = document.getElementById('playerScore');
const computerPoints = document.getElementById('computerScore');

const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');

const playerMove = document.getElementById('playerImage');
const computerMove = document.getElementById('computerImage');

let playerScore = 0;
let ComputerScore = 0;

btnRock.addEventListener('click', (e) => {
    e.preventDefault();
    playRound('rock');
});

btnPaper.addEventListener('click', (e) => {
    e.preventDefault();
    playRound('paper');
});

btnScissors.addEventListener('click', (e) => {
    e.preventDefault();
    playRound('scissors');
});

function getComputerChoice(){
    const Choices = ["rock", "paper", "scissors"];
    const randommNum = Math.floor(Math.random() * 3);
    return Choices[randommNum];
}

function playRound(playerChoice){

    const computerChoice = getComputerChoice();

    if(isPlayerWon(playerChoice, computerChoice) == 'draw'){
        const drawMessage = `IT'S A DRAW !!!`;
        updateBoard(drawMessage, playerChoice, computerChoice)

    }else if(isPlayerWon(playerChoice, computerChoice)){
        ++playerScore;
        const playerWonMessage = `PLAYER WON !!!`;
        updateBoard(playerWonMessage, playerChoice, computerChoice);
        
    }else {
        ++ComputerScore;
        const computerWonMessage = `COMPUTER WON !!!`;
        updateBoard(computerWonMessage, playerChoice, computerChoice);
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