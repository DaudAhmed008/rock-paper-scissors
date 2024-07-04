let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses : 0,
  ties : 0
};



function pickComputerMove() {
  let computerMove = '';
  let randomNumber = Math.random();

  if(randomNumber >=0 && randomNumber<= 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >=1/3 && randomNumber<= 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >=2/3 && randomNumber < 1) {
    computerMove = 'scissors'
  }
  return computerMove;
}

function playGame(playMove)
{
  let computerMove = pickComputerMove();
  result = '';
if (playMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You Lose';
  } else if (computerMove === 'paper') {
    result = 'You Win';
  } else if (computerMove === 'scissors') {
    result = 'Tie';
  }
} 
else if (playMove === 'rock') {
  if (computerMove === 'rock') {
  result = 'Tie';
  } else if (computerMove === 'paper') {
  result = 'You Lose';
  } else if (computerMove === 'scissors') {
  result = 'You Win';
  }
}
else if (playMove === 'paper'){
  if (computerMove === 'rock') {
  result = 'You Win';
  } else if (computerMove === 'paper') {
  result = 'Tie';
  } else if (computerMove === 'scissors') {
  result = 'You Lose';
  }
}


// alert (`You picked ${playMove}, Computer picked ${computerMove}, ${result}\nWins: ${score.wins}, Lose: ${score.losses}, Tie: ${score.ties}`);

if (result === 'You Win') {
  score.wins++;
} else if (result === 'You Lose') {
  score.losses++;
} else if(result === 'Tie'){
  score.ties++;
}

function gameResult () {
  document.querySelector('.js-result').innerHTML = `${result}`;
}

function updateScore () {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Lose: ${score.losses}, Tie: ${score.ties}`;

}
function yourChoice () {
  document.querySelector('.js-yourMove').innerHTML = `Your Move: <img class="move-icon" src="images/${playMove}-emoji.png" alt="">`;
  
}

function compChoice () {
  document.querySelector('.js-compMove').innerHTML = `Computer's Move: <img class="move-icon" src="images/${computerMove}-emoji.png" alt="">`;
}
localStorage.setItem('score',JSON.stringify(score));
yourChoice();
compChoice();
updateScore();
gameResult();

}