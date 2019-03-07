//random numbers for the first dice
var randomNumber1 = Math.floor((Math.random() * 6) +1);

//random numbers for the second dice
var randomNumber2 = Math.floor((Math.random() * 6) +1);

//selects the first dice picture and sets random numbers to replace the images on reload
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

//selects the second dice picture and sets random numbers to replace the images on reload
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
