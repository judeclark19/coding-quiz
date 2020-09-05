//DOM variables
var startButtonEl = document.getElementById("start-button");
// var instructionParagraphs = document.getElementsByClassName("instructions");
var instructionParagraphs = document.querySelectorAll(".instructions");

// on button click, hide <p>s
startButtonEl.addEventListener("click", function(event){
    // instructionParagraphs.setAttribute("style", "visibility:hidden")
//    instructionParagraphs.style.visibility="blue";
console.log(instructionParagraphs);
    for (let i=0; i<instructionParagraphs.length; i++) {
        instructionParagraphs[i].remove();
    }
})