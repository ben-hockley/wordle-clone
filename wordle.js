word = "plane"

var attempt = 1
var letter = 1

activeSquare = attempt + "-" + letter


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
    }
    else if (guess.length == 5){
    console.log(guess)
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
    letter = 1
    activeSquare = attempt + "-" + letter
    } else {
        alert("must enter a 5 letter word")
    }
}


document.addEventListener('keydown', function(e){
    if (e.key == 'Enter'){
        checkAnswer()
    } else if (e.key == 'Backspace'){
        letter = letter - 1
        activeSquare = attempt + "-" + letter
        document.getElementById(activeSquare).innerHTML = ""
        console.log(e.key)
    } else {
        console.log(e.key)
        document.getElementById(activeSquare).innerHTML = e.key
        letter = letter + 1
        activeSquare = attempt + "-" + letter
    }
});