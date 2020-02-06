
var kick = new Audio('sounds/kick-bass.mp3');
var crash = new Audio('sounds/crash.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');

for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    console.log(this);
    // this.style.color ="white"; //<--Challenge
    console.log(this.textContent);
//this.textContent or className returns the textContent or class name of the triggered button

    var letterStorage = this.textContent;

    if (letterStorage === "w")
      snare.play()
      else if (letterStorage === "a")
        tom3.play()
        else  if (letterStorage === "s")
          tom1.play()
          else if (letterStorage ==="d")
            kick.play()
            else if (letterStorage ==="j")
              tom2.play()
              else if (letterStorage ==="k")
                tom4.play()
                else
                  crash.play();
  })
}














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
