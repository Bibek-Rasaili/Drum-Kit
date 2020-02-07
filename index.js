var kick = new Audio('sounds/kick-bass.mp3');
var crash = new Audio('sounds/crash.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');

function addPressedClassToBtn(key) {
  document.querySelector("." + key).classList.add("pressed");
}

function playAudio(character) {
  switch (character) {

    case ("w"):
      return snare.play();

    case ("a"):
      return tom3.play();

    case ("s"):
      return tom1.play();

    case ("d"):
      return kick.play();

    case ("j"):
      return tom2.play();

    case ("k"):
      return tom4.play();

    case ("l"):
      return crash.play();

    default: //This runs when an input other than the above are detected.
      console.log(event);
      console.log("Key entered is: " + event.key + " which has no functionality for this webpage");
  }
}

// Detecting Button click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    console.log(this); //this returns/is the current button that was clicked.
    console.log(this.textContent); //its content/child, etc can be retrieved.

    var letterStorage = this.textContent;

    addPressedClassToBtn(letterStorage);
    playAudio(letterStorage);

    setTimeout(function(){
      document.querySelector("."+letterStorage).classList.remove("pressed");
    }, 100);
  })
}

// Detecting Keyboard Press/Down

//document.addEventListener works too.
document.querySelector("html").addEventListener("keydown", function(event) {

  addPressedClassToBtn(event.key);
  playAudio(event.key);
  setTimeout(function(){
    document.querySelector("."+event.key).classList.remove("pressed");
  }, 100);
});
