var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
var resultTitle = "Let's see who wins!"; 

var rollButton = document.getElementById('rollButton');
rollButton.addEventListener('click', function () {
    randomNumber1 = Math.ceil(Math.random() * 6);
    randomNumber2 = Math.ceil(Math.random() * 6);

    document.getElementById("dice1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.getElementById("dice2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2)
        resultTitle = 'Player 1 wins!';
    else if (randomNumber2 > randomNumber1)
        resultTitle = 'Player 2 wins!';
    else
        resultTitle = 'It\'s a draw! Roll again.';

    
    document.getElementById("heading").textContent = resultTitle;
});

document.getElementById("dice1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.getElementById("dice2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
document.getElementById("heading").textContent = resultTitle;
