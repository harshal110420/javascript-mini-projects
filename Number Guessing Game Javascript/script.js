const msg1 = document.getElementById("message1");
const msg2 = document.getElementById("message2");
const msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
const guessed_nums = [];

function play() {
  const user_guess = parseInt(document.getElementById("guess").value);

  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number between 1 to 100.");
    return;
  }

  guessed_nums.push(user_guess);
  no_of_guesses++;

  if (user_guess < answer) {
    msg1.textContent = "Your guess is too low.";
  } else if (user_guess > answer) {
    msg1.textContent = "Your gsuess is too high.";
  } else {
    msg1.textContent = "Yeah! You Guessed it right.";
    document.getElementById("my_btn").disabled = true;
  }

  msg2.textContent = "No. of guesses: " + no_of_guesses;
  msg3.textContent = "Guessed numbers are : " + guessed_nums;
}
