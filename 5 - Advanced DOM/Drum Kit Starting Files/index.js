var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
        
            default:
                break;
        }
        
    });
}

