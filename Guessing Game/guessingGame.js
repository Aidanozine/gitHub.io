var secretNumber = Math.floor((Math.random() *10)+1);
var answer = parseInt(prompt("Please guess the secret number (1-10)"));

if (answer == secretNumber) {
    alert("Correct!");
};

while (answer > secretNumber) {
    alert("Incorrect, too high.")
    break;
};

while (answer < secretNumber) {
    alert("Incorrect, too low.")
    break;
};
