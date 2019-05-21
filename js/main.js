(() =>{
//this is a self invoking fucntion
console.log('fired!');

//select elements with JS
//setting up a variable using the let keyword,
//and using CSS selector to find the element we want to use

//let stores the reference to element as  a variable (in memory)


let mainHeadline = document.querySelector(".main-headline"),
subHead = document.querySelector("#raster-vector h3"),
swapTextButton = document.querySelector(".switch-type"),
allImages = document.querySelectorAll("#image-container img"),
objectButton = document.querySelector(".container button");





//functions are reusable pieces of code that you can run any time

function logMyId() {
  console.log(this.id);

  // do toggling class

  this.classList.toggle("opacity")

}

function swapText(){
  mainHeadline.textContent = "Now you're something else!!";
  mainHeadline.classList.toggle("selected")
  subHead.textContent = "You are also something else!";

}

function logTheSVG(){
  console.log(this.previousElementSibling.id);
}




swapTextButton.addEventListener("click", swapText);

allImages.forEach(item => {
  item.addEventListener("click", logMyId);
});

// the button beside the svg object objectButton
objectButton.addEventListener("click",logTheSVG)

})();
