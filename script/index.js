// EXERCISE 1: Guess the random number  
//Create a function guessNumberGame that generates a random number between 1 and 10.  
//The function should repeatedly prompt the user to guess the number until the correct number is guessed.  
//Use a while loop to keep asking the user for input until they guess correctly.   
//Provide feedback if the guess is too high or too low.  
// Call the function to start the game

speletgissasiffran();  

function speletgissasiffran() {
    const slumpmässigtNummer = Math.floor(Math.random() * 10) + 1;
    let användarensGissning = null;

    while (användarensGissning !== slumpmässigtNummer) {
        användarensGissning = parseInt(prompt("Gissa på ett nummer mellan 1 och 10!:"));

        if (användarensGissning < slumpmässigtNummer) {
            alert("För lågt! Prova igen!");
        } else if (användarensGissning > slumpmässigtNummer) {
            alert("För högt! Prova igen!");
        } else if (användarensGissning === slumpmässigtNummer) {
            alert("Bra jobbat! Du har gissat rätt nummer! Grattis!");
        } else {
            alert("Vänligen knappa in ett giltigt nummer!");
        }
    }
}