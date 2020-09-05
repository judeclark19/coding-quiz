//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array

//When start button is clicked:
// hide intro text
startButtonEl.addEventListener("click", function(event){
console.log(instructionParagraphs);
    for (let i=0; i<instructionParagraphs.length; i++) {
        instructionParagraphs[i].remove();
    }
})
//Make first question appear TODO: tie both functions to same click event
startButtonEl.addEventListener("click", function(event){

    })