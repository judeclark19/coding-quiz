//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array
var quizDisplayCell = document.getElementById("quiz-display-cell");
var quizDisplayCellBody = document.getElementById("quiz-display-cell-body");
var questionPromptDiv = document.getElementById("question-prompt-div");
var promptTextDisplayed = document.getElementById("prompt-text");
var answersWrapperEl = document.getElementById("answers-wrapper");
var allAnswerButtons = document.querySelectorAll(".btn-info");

//Starting intervals
let currentQuestion = 0;

//Quiz Questions and Answers
var allQuestionsBank = [
  "Commonly used data types DO NOT include:",
  "The condition in an if/else statement is enclosed within:",
  "Arrays in JavaScript can be used to store:",
];

var questionBeingDisplayed;

var allAnswersBank = [
  //question 1
  ["strings", "booleans", "alerts", "numbers"],
  //question 2
  ["quotes", "curly brackets", "parentheses", "square brackets"],
];

var answersBeingDisplayed;

//Event Listeners
// TODO: how do I combine these?
startButtonEl.addEventListener("click", hideInstructions);
startButtonEl.addEventListener("click", showNextPrompt);
startButtonEl.addEventListener("click", showNextQuestion);

function hideInstructions() {
  for (let i = 0; i < instructionParagraphs.length; i++) {
    instructionParagraphs[i].remove();
    startButtonEl.remove();
  }
}

function showNextPrompt() {
  questionBeingDisplayed=allQuestionsBank[currentQuestion]
  //create h4 and display the prompt
  var questionPromptEl = document.createElement("h4");
  questionPromptEl.textContent = allQuestionsBank[currentQuestion];
  promptTextDisplayed.appendChild(questionPromptEl);
}

function hidePrevQuestions() {
  var prevAnswerSet = document.querySelectorAll("#answer-button")

  // if (currentQuestion!==0){
 for (let i=0; i<4; i++) {
    prevAnswerSet[0].remove(); }}

  function showNextQuestion() {
  answersBeingDisplayed=allAnswersBank[currentQuestion]
  for (let i=0; i<answersBeingDisplayed.length; i++){
    var anAnswerButton = document.createElement("button");
    anAnswerButton.textContent = allAnswersBank[currentQuestion][i];
    anAnswerButton.classList.add("btn", "btn-info", "btn-block");
    anAnswerButton.setAttribute("id","answer-button");
    answersWrapperEl.appendChild(anAnswerButton);
  }
}

//Click listener for when user clicks on any answer
answersWrapperEl.addEventListener("click", function(event){
  if(event.target.id==="answer-button"){
    console.log("clicked a button")
    currentQuestion++
    hidePrevQuestions();
    // showNextQuestion();
  }
  else {console.log("NOT button")}

})