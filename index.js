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
      //break;

    case ("a"):
      return tom3.play();
      //break;

    case ("s"):
      return tom1.play();
      //break;

    case ("d"):
      return kick.play();
      //break;

    case ("j"):
      return tom2.play();
      //break;

    case ("k"):
      return tom4.play();
    //  break;

    case ("l"):
      return crash.play();
      //break;

    default: //This runs when an input other than the above are detected.
      console.log(event);
      console.log("Key entered is: "+event.key + " which has no functionality for this webpage");
  }
}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    console.log(this);
    // this.style.color ="white"; //<--Challenge
    console.log(this.textContent);
    //this.textContent or className returns the textContent or class name of the triggered button

    var letterStorage = this.textContent;

    playAudio(letterStorage);
  })
}

// ---- OnKeyDown

//document.addEventListener works too.
document.querySelector("html").addEventListener("keydown", function(event) {
    playAudio(event.key);
  //keyCode
  //65 is a
  //90 is z

  //66 is b (65+1)
  //d (65+3) = 68;
  //h (65+7) = 72;
  //j (65+9) = 74;
  //k (65+10) = 75;
  //l = 76

  //s (65+18) = 83;
  //w (65+21) = 86;
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
