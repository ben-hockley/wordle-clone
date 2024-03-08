attempt = 1
var letter = 2

activeSquare = attempt + "-" + letter

document.addEventListener('keydown', function(e){
    if (e.key == 'Backspace'){
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