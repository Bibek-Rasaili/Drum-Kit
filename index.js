/* By removing the variable/object declaration passed through the Audio constructor
from here AND adding it into WHEN it is called.

 the sound/audio is much more instantanous and no longer has delay  */

function addPressedClassToBtn(key) {
  document.querySelector("." + key).classList.add("pressed");
}


function playAudio(character) {
  switch (character) {

    case ("w"):
    var snare = new Audio('sounds/snare.mp3'); //Added here instead
      return snare.play();

    case ("a"):
    var tom3 = new Audio('sounds/tom-3.mp3');
      return tom3.play();

    case ("s"):
    var tom1 = new Audio('sounds/tom-1.mp3');
      return tom1.play();

    case ("d"):
    var kick = new Audio('sounds/kick-bass.mp3');
      return kick.play();

    case ("j"):
    var tom2 = new Audio('sounds/tom-2.mp3');
      return tom2.play();

    case ("k"):
    var tom4 = new Audio('sounds/tom-4.mp3');
      return tom4.play();

    case ("l"):
    var crash = new Audio('sounds/crash.mp3');
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
