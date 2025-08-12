const form = document.querySelector('form');
const playerInput = document.getElementById('playerInput');
const rounds = document.getElementById('rounds');
const result = document.getElementById('gameWinner');
const playerPoints = document.getElementById('playerScore');
const computerPoints = document.getElementById('computerScore');

let playerScore = 0;
let ComputerScore = 0;
let numRouds = 0;

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    playGame()
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

function playRound(){
    const playerChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    numRouds++

    if(isPlayerWon(playerChoice, computerChoice) == 'draw'){
        const drawMessage = `${playerChoice} VS ${computerChoice} IT'S A DRAW !!!`;
        updateBoard(drawMessage, playerChoice, computerChoice)

    }else if(isPlayerWon(playerChoice, computerChoice)){
        ++playerScore;
        const playerWonMessage = `${playerChoice} beats ${computerChoice} ! PLAYER WON !!!`;
        updateBoard(playerWonMessage, playerChoice, computerChoice);
        
    }else {
        ++ComputerScore;
        const computerWonMessage = `${computerChoice} beats ${playerChoice} ! COMPUTER WON !!!`;
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

function playGame(){
    if(numRouds < 5){
        playRound()
    }else{
        let winner = '';
        if(playerScore ==  ComputerScore){
            winner = 'DRAW !!!';
        }else if (playerScore > ComputerScore){
            winner = 'PLAYER WON !!!';
        }else{
            winner = 'COMPUTER WON !!!';
        }
        alert(winner);

        const aswer = confirm('NEW GAME ?')
        if(aswer){
            playerScore = 0;
            ComputerScore = 0;
            numRouds = 0;
            updateBoard('', '', '');
            playGame()
        }
    }
}

function updateBoard(message, playerChoice, computerChoice){
    rounds.innerText = ''
    rounds.innerText = `ROUND ${numRouds} ||| Player move: ${playerChoice} |||-||| Computer move: ${computerChoice}`

    result.innerText = '';
    result.innerText = message;

    
    playerPoints.innerText = `Player points: ${playerScore}`;
    computerPoints.innerText = `Computer points: ${ComputerScore}`;
}