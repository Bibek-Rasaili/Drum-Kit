var kick = new Audio('sounds/kick-bass.mp3');
var crash = new Audio('sounds/crash.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');


function playAudio (character) {
  switch (character) {

    case ("w"):
      return snare.play();
      //break not needed as, return should break/stop the case/switch.

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
      console.log("Key entered is: "+event.key + " which has no functionality for this webpage");
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
    playAudio(letterStorage);
  })
}


// Detecting Keyboard Press/Down

//document.addEventListener works too.
document.querySelector("html").addEventListener("keydown", function(event) {
    playAudio(event.key);
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
