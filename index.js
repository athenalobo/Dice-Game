var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
var resultTitle = "Let's see who wins!";

var rollButton = document.getElementById('rollButton');
rollButton.addEventListener('click', function () {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");

    dice1.classList.add("rolling");
    dice2.classList.add("rolling");

    var duration = Math.random() * 500 + 500; 

    setTimeout(function () {
        randomNumber1 = Math.ceil(Math.random() * 6);
        randomNumber2 = Math.ceil(Math.random() * 6);

        dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
        dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

        if (randomNumber1 > randomNumber2)
            resultTitle = 'Player 1 wins!';
        else if (randomNumber2 > randomNumber1)
            resultTitle = 'Player 2 wins!';
        else
            resultTitle = 'It\'s a draw! Roll again.';

        dice1.classList.remove("rolling");
        dice2.classList.remove("rolling");

        document.getElementById("heading").textContent = resultTitle;
    }, duration);     
});

document.getElementById("dice1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.getElementById("dice2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
document.getElementById("heading").textContent = resultTitle;
