let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => 
  Math.floor(Math.random()*8);

const compareGuesses = (humanGuess, computerGuess, target) => {
if(Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)){
  return true;
}
if(Math.abs(humanGuess - target) >= Math.abs(computerGuess - target)){
  return false;
}
}

const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore ++;
  }
  if (winner === 'computer'){
     computerScore ++;
  }
}

const advanceRound = () =>  
  currentRoundNumber ++;


