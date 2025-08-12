const form = document.querySelector('form');
const playerInput = document.getElementById('playerInput');
const rounds = document.getElementById('rounds');
const result = document.getElementById('gameWinner');
const playerPoints = document.getElementById('playerScore');
const computerPoints = document.getElementById('computerScore');

let playerScore = 0;
let ComputerScore = 0;

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const playerChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
})

function getComputerChoice(){
    const Choices = ["rock", "paper", "scissors"];
    const randommNum = Math.floor(Math.random() * 3);
    return Choices[randommNum];
}

function getHumanChoice(){
    const hChoice = playerInput.value ;
    return hChoice;
}

function playRound(playerChoice, computerChoice){
    rounds.innerText = ''
    rounds.innerText = `Player move: ${playerChoice} ------ Computer move: ${computerChoice}`

    if(isPlayerWon(playerChoice, computerChoice) == 'draw'){
        result.innerText = `${playerChoice} VS ${computerChoice} IT'S A DRAW !!!`
    }else if(isPlayerWon(playerChoice, computerChoice)){
        result.innerText = `${playerChoice} beats ${computerChoice} ! PLAYER WON !!!`
        playerScore++;
        playerPoints.innerText = `Player points: ${playerScore}`;
    }else {
        result.innerText = `${computerChoice} beats ${playerChoice} ! COMPUTER WON !!!`
        ComputerScore++;
        computerPoints.innerText = `Computer points: ${ComputerScore}`;
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