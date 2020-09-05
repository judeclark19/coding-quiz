//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array
var quizDisplayCell = document.getElementById("quiz-display-cell");
var quizDisplayCellBody = document.getElementById("quiz-display-cell-body");
var allAnswerButtons = document.getElementsByClassName("btn-info");

//Starting intervals
let currentQuestion=0;

//Quiz Questions and Answers
var allQuestionsObject={
questionOnePrompt: "Commonly used data types DO NOT include:",
questionTwoPrompt: "The condition in an if/else statement is enclosed within:",
questionThreePrompt: "Arrays in JavaScript can be used to store:",
}

var allAnswersArray=[
    //question 1
    ["strings", "booleans","alerts","numbers"],
    //question 2
    ["quotes", "curly","paren","square"]

]


//Event Listeners
// TODO: how do I combine these?
startButtonEl.addEventListener("click", hideInstructions);
startButtonEl.addEventListener("click", showNextPrompt);
startButtonEl.addEventListener("click", showNextQuestion);
// for (var i = 0; i < allAnswerButtons.length; i++) {
//     elements[i].addEventListener('click', hidePrevAnswers);
// }

//when user chooses an answer
// https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
var allAnswerButtons = document.getElementsByClassName("btn-info");

function hidePrevAnswers() {
    for (let i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].remove();
      }
    }

function hideInstructions() {
  for (let i = 0; i < instructionParagraphs.length; i++) {
    instructionParagraphs[i].remove();
    startButtonEl.remove();
  }
}

function showNextPrompt() {
  //create h4 and display the prompt
  var questionPromptEl = document.createElement("h4");
  questionPromptEl.textContent = allQuestionsObject.questionOnePrompt;
  quizDisplayCell.appendChild(questionPromptEl);
}

function showNextQuestion() {
  for (let i = 0; i < allAnswersArray[currentQuestion].length; i++) {
    var anAnswerButton = document.createElement("button");
    anAnswerButton.textContent = allAnswersArray[currentQuestion][i];
    anAnswerButton.classList.add("btn", "btn-info", "btn-block");
    quizDisplayCellBody.appendChild(anAnswerButton);
  }
}
