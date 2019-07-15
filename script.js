//game variables
var round = 1;
var computerScore = 0;
var playerScore = 0;

$(document).ready(() => {
  $('#number-field').val('0');
  buttonActiveCheck();
  $('#number-down').on('click', numberDown);
  $('#number-up').on('click', numberUp);
  $('#guess').on('click', takeTurn);
});

const numberDown = () => {
  var text = parseInt($('#number-field').val(), 10);
  $('#number-field').val(text-1);
  buttonActiveCheck();
}

const numberUp = () => {
  var text = parseInt($('#number-field').val(), 10);
  $('#number-field').val(text+1);
  buttonActiveCheck();
}
//checks the value of the player guess and determines if the numUp numDown buttons are active or not
const buttonActiveCheck = () => {
  var guessText = parseInt($('#number-field').val(), 10);
  if (guessText === undefined || guessText === 0){
    $('#number-down').prop('disabled', true);
    $('#number-down').html('');
  } else if (guessText === 10) {
    $('#number-up').prop('disabled', true);
    $('#number-up').html('');
  }
  else {
    $('#number-down').prop('disabled', false);
    $('#number-down').html('-');
    $('#number-up').prop('disabled', false);
    $('#number-up').html('+');
  }

}

const takeTurn = () => {
  var playerGuess = parseInt($('#number-field').val());
  var computerNumber = Math.floor((Math.random() * 10) +1 );
  round++;

  if (playerGuess === computerNumber) {
    playerScore ++;
    updateText(computerNumber);
    $('#player-panel').addClass('correct');
    setTimeout(() => {$('#player-panel').removeClass('correct')}, 1000);
    $('#computer-panel').addClass('wrong');
    setTimeout(() => {$('#computer-panel').removeClass('wrong')}, 1000);
  } else {
    computerScore ++;
    updateText(computerNumber);
    $('#player-panel').addClass('wrong');
    setTimeout(() => {$('#player-panel').removeClass('wrong')}, 1000);
    $('#computer-panel').addClass('correct');
    setTimeout(() => {$('#computer-panel').removeClass('correct')}, 1000);
  }
}

const updateText = (num) => {
  $('#round').html(round);
  $('#player-score').html(playerScore);
  $('#computer-score').html(computerScore);
  $('#target-number').html(num)
}
