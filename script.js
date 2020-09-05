//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array
var quizDisplayCell = document.getElementById("quiz-display-cell");

//Quiz Questions
var questions = [
    {"questionNumber": 1,
        "questionPrompt": "Commonly used data types DO NOT include:",
        "optionOne": "strings",
        "optionTwo": "booleans",
        "optionThree": "alerts",
        "optionFour": "numbers"
    },
    //question2
    //question3
    //question4
    //question5
]

//When start button is clicked:
// hide intro text
startButtonEl.addEventListener("click", function(event){
console.log(instructionParagraphs);
    for (let i=0; i<instructionParagraphs.length; i++) {
        instructionParagraphs[i].remove();
        startButtonEl.remove();
    }
})
//introducing first question <p> TODO: tie both functions to same click event
startButtonEl.addEventListener("click", function(event){
    //create an h3 for the prompt
    var questionPrompt = document.createElement("h3");
    //add text to the h3
    questionPrompt.textContent = "first question prompt";
    //append it inside quiz-display-cell
    quizDisplayCell.appendChild(questionPrompt)
    })