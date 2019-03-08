//random numbers for the first dice
var randomNumber1 = Math.floor((Math.random() * 6) +1);

//random numbers for the second dice
var randomNumber2 = Math.floor((Math.random() * 6) +1);

//selects the first dice picture and sets random numbers to replace the images on reload
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

//selects the second dice picture and sets random numbers to replace the images on reload
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

//Checks to see which dice had the higher number to determine the winner / else if they are equal and chooses a draw
if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
} else {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}