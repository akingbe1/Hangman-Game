var words = ["wizards", "raptors", "warriors", "celtics", "pacers", "cavaliers", "lakers", "pelicans", "clippers", "mavericks"]

var currentWord = "";
var lettersInCurrentWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 12;



function startGame() {
/*
1. choose a random word (Math.random)
2. break up random word into letters and replace them with underscores
3. add those underscores to the HTML
4. numGuesses always equals 12 and blankAndSuccesses is an empty array, and wrongGuesses is also empty
*/

numGuesses = 12;
blanksAndSuccesses = [];
wrongGuesses = [];

currentWord = words[Math.floor(Math.random() * words.length)];
lettersInCurrentWord = currentWord.split("");
numBlanks = lettersInCurrentWord.length;


for (var i = 0; i < numBlanks; i++) {
	blanksAndSuccesses.push("_");
}

document.getElementById("remaining").innerHTML = numGuesses;
document.getElementById("blank-word").innerHTML = blanksAndSuccesses.join(" ");


}

function checkLetters(letter) {

/*
1. Compare the letter the user picks to see if it matches any of the letters in the word
2. conditional statement to determine if the letter the user picks is in the word. If so, do something. If not, do something else
3. if the user is wrong, we want to decrease the numGuesses variable by onw
*/	

var letterInWord = false;

for (var i = 0; i < numBlanks; i++) {
	if (currentWord[i] === letter) {
		letterInWord = true;
	}
}

	if(letterInWord) {
		for (i = 0; i < numBlanks; i++) {
			if (currentWord[i] === letter) {
				blanksAndSuccesses[i] = letter;
			}
			
		}
	} else {
		numGuesses --;
		wrongGuesses.push(letter)
	}
	
}

function roundComplete() {

/*
1. update the HTML with the letters that are in the word
2. update the HTML with guesses we have left
3. update the HTML to show the wrong guesses
4. determine whether the user won the game or not

*/

document.getElementById("blank-word").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("remaining").innerHTML = numGuesses;
document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");




if (lettersInCurrentWord.join(" ") === blanksAndSuccesses.join("")) {
	winCounter++;
	alert("You win!");
	document.getElementById("win-counter").innerHTML = winCounter;
	startGame();
}
else if (numGuesses === 0) {
	document.getElementById("loss-counter").innerHTML = lossCounter++;
	document.getElementById("wrong-guesses").innerHTML = "";
	alert("You lose...");
	wrongGuesses = [];
	startGame();
}

}




startGame();

document.onkeyup = function(event) {
/*
1. take in the letter that we type in

2. pass the letter through the checkLetter function

*/
var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
checkLetters(letterGuess)
roundComplete();

}


startGame();
