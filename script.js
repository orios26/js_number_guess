var round = 1;
var computerScore = 0;
var playerScore = 0;

window.onload = function() {
  document.getElementById('number-field').value = 0;
  buttonActiveCheck();
  document.getElementById("number-down").addEventListener("click", numberDown);
  document.getElementById('number-up').addEventListener('click', numberUp);
  document.getElementById('guess').addEventListener('click', takeTurn);
}

const numberDown = () => {
  var text = parseInt(document.getElementById('number-field').value, 10);
  document.getElementById('number-field').value = text -1;
  buttonActiveCheck();
}

const numberUp = () => {
  var text = parseInt(document.getElementById('number-field').value, 10);
  document.getElementById('number-field').value = text +1;
  buttonActiveCheck();
}
//checks the value of the player guess and determines if the numUp numDown buttons are active or not
const buttonActiveCheck = () => {
  var guessText = parseInt(document.getElementById('number-field').value, 10);
  if (guessText === undefined || guessText === 0){
    document.getElementById('number-down').disabled = true;
    document.getElementById('number-down').innerHTML = '';
  } else if (guessText === 10) {
    document.getElementById('number-up').disabled = true;
    document.getElementById('number-up').innerHTML = '';
  }
  else {
    document.getElementById('number-down').disabled = false;
    document.getElementById('number-down').innerHTML = '-';
    document.getElementById('number-up').disabled = false;
    document.getElementById('number-up').innerHTML = '+';
  }

}

const takeTurn = () => {
  var playerGuess = parseInt(document.getElementById('number-field').value);
  var computerNumber = Math.floor((Math.random *10) + 1);
  round++;

  if (playerGuess === computerNumber) {
    playerScore ++;
    updateText();
  } else {
    computerScore ++;
    updateText();
  }
}

const updateText = () => {
  document.getElementById('round').innerHTML = round;
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;
}
