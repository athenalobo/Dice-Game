var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
var resultTitle = "Let's see who wins!"; 

var rollButton = document.getElementById('rollButton');
rollButton.addEventListener('click', function () {
    randomNumber1 = Math.ceil(Math.random() * 6);
    randomNumber2 = Math.ceil(Math.random() * 6);

    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2)
        resultTitle = 'Player 1 wins!';
    else if (randomNumber2 > randomNumber1)
        resultTitle = 'Player 2 wins!';
    else
        resultTitle = 'It\'s a draw! Roll again.';

    
    document.querySelector("h2").textContent = resultTitle;
});

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
document.querySelector("h2").textContent = resultTitle;
