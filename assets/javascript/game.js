var words = ["Wizards", "Raptors", "Warriors", "Celtics", "Pacers", "Cavaliers", "Lakers", "Pelicans", "Clippers", "Mavericks"]

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;


function startGame() {
/*
1. select a word at random (Math.random)
2. break up random word into letters and replace them with underscores
3. add those underscores to the HTML
4. numGuesses always equals 12 and blankAndSuccesses is an empty array, and wrongGuesses is also empty
*/

numGuesses = 12;
blanksAndSuccesses = [];
wrongGuesses = [];

chosenWord = words[Math.floor(Math.random() * words.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
console.log(chosenWord)
console.log(numBlanks)

for (var i = 0; i < numBlanks; i++) {
	blanksAndSuccesses.push("_")
}
console.log(blanksAndSuccesses)


}

function checkLetters(letter) {

/*
1. Compare the letter the user picks matches any of the letters in the word
2. conditional statement to determine if the letter the user picks is in the word. If so, do something. If not, do something else
3. if the user is wrong, we want to decrease the numGuesses variable by onw

*/	

}

function roundComplete() {

/*
1. update the HTML with the letters that are in the word
2. update the HTML with guesses we have left
3. update the HTML to show the wrong guesses
4. determine whether the user won the game or not

*/


}


document.onkeyup = function(event) {
/*
1. take in the letter that we type in
2. pass the letter through the checkLetter function

*/


}


startGame();