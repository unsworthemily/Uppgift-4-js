// EXERCISE 1: Guess the random number  
Create a function guessNumberGame that generates a random number between 1 and 10.  
The function should repeatedly prompt the user to guess the number until the correct number is guessed.  
Use a while loop to keep asking the user for input until they guess correctly.   
Provide feedback if the guess is too high or too low.  

function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = null;

    while (userGuess !== randomNumber) {
        userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

        if (userGuess < randomNumber) {
            alert("Too low! Try again.");
        } else if (userGuess > randomNumber) {
            alert("Too high! Try again.");
        } else if (userGuess === randomNumber) {
            alert("Congratulations! You've guessed the correct number.");
        } else {
            alert("Please enter a valid number.");
        }
    }
}

// Call the function to start the game
guessNumberGame();  