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
      //    document.querySelector(".w").classList.remove("pressed");
      //this has no effect. i.e. causes no animation
      //therefore the removePressedFromButton() function was created.

      //break not needed as, return should break/stop the case/switch.

      //call for animation will go here

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
      removePressedFromButton();
      addPressedClassToBtn(character);
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
    //i.e.
    //this.textContent or className returns the textContent or class name of the triggered button
    // this.style.color ="white"; //<--Challenge

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









/*
For each
document.querySelectorAll("button").forEach(item => {
  item.addEventListener("click", function() {
      alert("I got clicked");
  })
})
*/
//___________________________________________________

/*
handleClick() vs handleClick
 document.querySelector("button").addEventListener("click", handleClick);
//handleClick() instantly calls the function
//where else handleClick, assigns the even to the function and is called when
//the condition is met such as "click", "mouseover", etc

function handleClick(){
  alert("I got clicked");
}

*/


//___________________________________________________


//Click, Hover ,Mouse out.
// document.querySelector("button").addEventListener("click", function(){
//   console.log("I have been clicked");
// });
//
// document.querySelector("button").addEventListener("mouseover", function(){
//   console.log("Hover");
// });
//
// document.querySelector("button").addEven tListener("mouseout", function(){
//   console.log("out");
// });
