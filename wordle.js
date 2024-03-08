word = "PLANE" //must be in all caps

var attempt = 1
var letter = 1

activeSquare = attempt + "-" + letter

function generateWord(){

}

function checkAnswer(){
    guess = ""
    for (i=1;i<6;i++){
        guess += (document.getElementById(attempt + "-" + i).innerHTML)
    }
    if (word == guess){
        alert("You win in " + attempt + " attempts!")
        for (k=1;k<6;k++){
            document.getElementById(attempt + "-" + k).style.backgroundColor = 'green'
            document.getElementById(attempt + "-" + k).style.color = 'white'
        }
        attempt = 0 //end game
    }
    else if (guess.length == 5){
    for (j=1;j<6;j++){
        if (guess[j-1] == word[j-1]){
            document.getElementById(attempt + "-" + j).style.backgroundColor = 'green'
            document.getElementById(attempt + "-" + j).style.color = 'white'
        } else if (guess[j-1] == word[0] || guess[j-1] == word[1] || guess[j-1] == word[2] || guess[j-1] == word[3] || guess[j-1] == word[4]){
            document.getElementById(attempt + "-" + j).style.backgroundColor = 'orange'
            document.getElementById(attempt + "-" + j).style.color = 'white'
        }  
    }
    attempt = attempt + 1
    if (attempt == 7){
        alert("Game over, you lose :(")
    }
    letter = 1
    activeSquare = attempt + "-" + letter
    } else {
        alert("must enter a 5 letter word")
    }
}


document.addEventListener('keydown', function(e){
    if (e.key == 'Enter'){
        checkAnswer()  //calls checkanswer() function.
    } else if (e.key == 'Backspace'){
        if (letter != 1){ //blocks user from going before first letter in an attempt
            letter = letter - 1
            activeSquare = attempt + "-" + letter //move back
        }
        document.getElementById(activeSquare).innerHTML = "" //clear square
    } else {
        keyPressed = e.key
        keyPressed = keyPressed.toUpperCase() //change input to upper case
        document.getElementById(activeSquare).innerHTML = keyPressed //add key pressed to current square
        //go to next square
        letter = letter + 1
        activeSquare = attempt + "-" + letter
    }
});