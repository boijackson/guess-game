/**let attempt = 0;
let random_num = Math.floor(Math.random() * 100 +1);

const user_input = document.querySelector('.guess');
const submit = document.querySelector('.submit');
const hint = document.querySelector('.hint');
const attempts = document.querySelector('.attempts');

submit.addEventListener("click", click_me);
function click_me(){
    const userValue = Number(user_input.value)
    attempt ++
    
if(user_input.value === random_num){
    hint.innerHTML(`Congratulations! Your guessd was right ${random_num}`)

}else if(user_input.value > random_num){
    hint.innerHTML("You guessed too high! Try again.")
}
if(user_input.value < random_num){
    hint.innerHTML("You guessed too low! Try again.")
}
}**/


let attempts = 0;
let randon_num = Math.floor(Math.random() *  100 + 1);

const user_input = document.querySelector('.guess');
const submits = document.querySelector('.submit');
const hint = document.querySelector('.hint');
const attempt = document.querySelector('.attempts');
//console.log(randon_num);

submits.addEventListener('click', clickMe)
function clickMe(){
    const userValue = Number(user_input.value);
    attempts++

    if(user_input.value == randon_num){
        hint.innerHTML = `Congratulation, you guessed it! ${randon_num}`;

    }else if(user_input.value < randon_num){
        hint.innerHTML = "You guessed too low! Try again.";
    }
    if(user_input.value > randon_num){
        hint.innerHTML = "You guessed too high! Try again.";
    }

    attempt.innerHTML = "Attempts: " + attempts;
    if (attempts === 10){
        hint.innerHTML = "Game over!";
    }
    
}