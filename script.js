//DOM variables
var startButtonEl = document.getElementById("start-button");
// var instructionParagraphs = document.getElementsByClassName("instructions");
var instructionParagraphs = document.querySelector(".instructions");

// on button click, hide <p>s
startButtonEl.addEventListener("click", function(event){
    instructionParagraphs.setAttribute("style", "visibility:hidden")
})