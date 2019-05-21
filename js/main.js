(() =>{
//this is a self invoking fucntion
console.log('fired!');

//select elements with JS
//setting up a variable using the let keyword,
//and using CSS selector to find the element we want to use

//let stores the reference to element as  a variable (in memory)

let svgGraphic = document.querySelector("#badgeSVG"),
mainHeadline = document.querySelector(".main-headline"),
subHead = document.querySelector("#raster-vector h3"),
swapTextButton = document.querySelector(".switch-type");



//functions are reusable pieces of code that you can run any time

function logMyId() {
  console.log(this.id);

  this.style.opacity = 0.5;

}

function swapText(){
  mainHeadline.textContent = "Now you're something else!!";
  mainHeadline.classList.toggle("selected")
  subHead.textContent = "You are also something else!";

}


svgGraphic.addEventListener("click",logMyId);
swapTextButton.addEventListener("click", swapText)


})();
