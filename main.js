function getUserChoice(userInput){
userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {
        console.log('error')
    } 
}; 

userInput = 'bomb'
// console.log(getUserChoice(userInput));

function getComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
    case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
}
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice){
        return 'game was a tie'
    } else if (userChoice === 'rock' && computerChoice === 'paper'){
        return 'Computer is the winner'
    } else if (userChoice === 'rock' && computerChoice === 'scissors'){
        return 'You won!'
    } if (userChoice === 'paper' && computerChoice === 'rock'){
        return 'You won!'
    } else if (userChoice === 'paper' && computerChoice === 'scissors'){
        return 'Computer is the winner'
    } if (userChoice === 'scissors' && computerChoice === 'paper'){
        return 'You won!'
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
        return 'Computer is the winner'
    } else (userChoice === 'bomb')
        return 'YOU ARE THE VICTOR'
    };
var userChoice = getUserChoice(userInput);
var computerChoice = getComputerChoice();

// console.log(determineWinner(userChoice, computerChoice));

function playGame(){
    userChoice = getUserChoice(userInput);
    computerChoice = getComputerChoice();
    console.log (`You threw ${userChoice}`)
    console.log (`Computer threw ${computerChoice}`)
    console.log (determineWinner (userChoice, computerChoice))}
playGame();
