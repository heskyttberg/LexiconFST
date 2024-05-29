
windows.onload = init;


function init(){
  let maxNum = 10;
  let randomNumber = Math.floor(Math.random() * maxNum) + 1;
  const result = document.querySelector('.result');
  const submit = document.querySelector('.submit');
  const guess = document.querySelector('.guess');

  submit.addEventListener('click', check);
}

function check() {
    const userGuess = Number(guess.value);

    if (userGuess === randomNumber) {
    result.textContent = 'Congratulations! You got it right!';
    setGameOver();
    } else {
    if(userGuess < randomNumber)
        result.textContent = 'Last guess was too low!' ;
    else 
        result.textContent = 'Last guess was too high!';
    }

    guess.value = '';
    guess.focus();
}

function setGameOver() {
    guess.disabled = true;
    submit.disabled = true;
}  