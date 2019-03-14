var numOfButtons = document.querySelectorAll(".drum").length;

//loops through each button with the class of "drum"
for (var i = 0; i < numOfButtons; i++) {
    //listens for the user to click on the button
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //selects the current button being triggered
        var buttonInnerHTML = this.innerHTML;
        //adds corresponding sound to the button being pressed
        
        drumSound(buttonInnerHTML);
    });
}

// Listens for the keyboard press
document.addEventListener("keypress", function (event) {
    drumSound(event.key);
});

//Makes the corresponding sounds for each button / key
function drumSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: break;
    }
}