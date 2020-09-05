//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array
var quizDisplayCell = document.getElementById("quiz-display-cell");
var quizDisplayCellBody = document.getElementById("quiz-display-cell-body");
var questionPromptDiv = document.getElementById("question-prompt-div");
var answersDivEl = document.getElementById("answers-div");
var allAnswerButtons = document.getElementsByClassName("btn-info");

//Starting intervals
let currentQuestion = 0;

//Quiz Questions and Answers
var allQuestionsArray = [
  "Commonly used data types DO NOT include:",
  "The condition in an if/else statement is enclosed within:",
  "Arrays in JavaScript can be used to store:",
];

var allAnswersBank = [
  //question 1
  ["strings", "booleans", "alerts", "numbers"],
  //question 2
  ["quotes", "curly", "paren", "square"],
];

var answersBeingDisplayed;

//Event Listeners
// TODO: how do I combine these?
startButtonEl.addEventListener("click", hideInstructions);
startButtonEl.addEventListener("click", showNextPrompt);
startButtonEl.addEventListener("click", showNextQuestion);


//when user chooses an answer
// https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class


function hideInstructions() {
  for (let i = 0; i < instructionParagraphs.length; i++) {
    instructionParagraphs[i].remove();
    startButtonEl.remove();
  }
}

function showNextPrompt() {
  //create h4 and display the prompt
  var questionPromptEl = document.createElement("h4");
  questionPromptEl.textContent = allQuestionsArray[currentQuestion];
  questionPromptDiv.appendChild(questionPromptEl);
}

function showNextQuestion() {
  answersBeingDisplayed=allAnswersBank[currentQuestion]

  for (let i=0; i<answersBeingDisplayed.length; i++){
    console.log("test");
    var anAnswerButton = document.createElement("button");
    anAnswerButton.textContent = allAnswersBank[currentQuestion][i];
    anAnswerButton.classList.add("btn", "btn-info", "btn-block");
    quizDisplayCellBody.appendChild(anAnswerButton);
  }
  
}
