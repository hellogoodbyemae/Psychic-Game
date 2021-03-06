// Variables

var computerChoice = "";
var userGuess = "";
var numGuesses = 10;
var guesses = [];
var wins = 0;
var losses = 0;

var letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Functions

function randomLetterChoice () {
    return computerChoice = letters[Math.floor(Math.random()*letters.length)];
}

function resetGame () {
    numGuesses=10;
    guesses=[];
    randomLetterChoice();
}

// Main Process

// Call Function to Select Random Letter
randomLetterChoice();
    console.log("Computer Letter: " + computerChoice);

// User selects letter with onkeyup
document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
        console.log("Computer Letter: " + computerChoice);
        console.log("User Guess: " + userGuess);

    // if userGuess key selection is in letter array


    if (letters.indexOf(userGuess.toLowerCase()) !== -1) {

        // if user guesses incorrectly
        if (userGuess !== computerChoice) {
            numGuesses--;
                console.log("Number Guesses: " + numGuesses);
            guesses.push(userGuess);
                console.log(guesses);

        // if user guesses correctly
        } if(userGuess === computerChoice) {
            alert("You Win! You correctly guessed " + computerChoice + "!");
            wins++;
                console.log("Wins: " + wins);
            resetGame();
        // if user runs out of guesses
        } if(numGuesses === 0) {
            alert("You Lose! The correct guess was " + computerChoice + "! Try again!");
            losses++;
                console.log("Losses: " + losses);
            resetGame();
        }
    }

    // if userGuess key selection is not in letter array
    else {
        alert("Only letters of the alphabet!");
    }

    // Access HTML Elements
    document.getElementById("wins-text").textContent = "Wins: " + wins;
    document.getElementById("losses-text").textContent = "Losses: " + losses;
    document.getElementById("number-text").textContent = "Guesses Left: " + numGuesses;
    document.getElementById("guesses-text").textContent = "Your Guesses So Far: " + guesses;
    
};