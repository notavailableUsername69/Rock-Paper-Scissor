document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
  });
  
  document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
  });
  
  document.getElementById('scissors').addEventListener('click', function() {
    playGame('scissors');
  });
  
  function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result = compareChoices(userChoice, computerChoice);
  
    var resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`;
  }
  
  function compareChoices(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }