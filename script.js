//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array
var quizDisplayCell = document.getElementById("quiz-display-cell");

//Quiz Questions
var questions = [
  {
    questionNumber: 1,
    questionPrompt: "Commonly used data types DO NOT include:",
    optionOne: "strings",
    optionTwo: "booleans",
    optionThree: "alerts",
    optionFour: "numbers",
  },
  //question2
  //question3
  //question4
  //question5
];

//When start button is clicked:
// TODO: how do I combine these?
startButtonEl.addEventListener("click", hideInstructions);
startButtonEl.addEventListener("click", showNextPrompt);
startButtonEl.addEventListener("click", showOptionOne);
startButtonEl.addEventListener("click", showOptionTwo);

function hideInstructions() {
  for (let i = 0; i < instructionParagraphs.length; i++) {
    instructionParagraphs[i].remove();
    startButtonEl.remove();
  }
}

function showNextPrompt() {
  //create an h3 for the prompt
  var questionPrompt = document.createElement("h3");
  //add text to the h3
  questionPrompt.textContent = questions[0].questionPrompt;
  //append it inside quiz-display-cell
  quizDisplayCell.appendChild(questionPrompt);
}

function showOptionOne() {
  var optionOne = document.createElement("button");
  //add text to the span
  optionOne.textContent = "first option";
  optionOne.classList.add("answer-button", "btn", "btn-info");
  //append it inside quiz-display-cell
  quizDisplayCell.appendChild(optionOne);
}

function showOptionTwo() {
  var optionTwo = document.createElement("button");
  //add text to the span
  optionTwo.textContent = "second option";
  optionTwo.classList.add("answer-button", "btn", "btn-info");
  //append it inside quiz-display-cell
  quizDisplayCell.appendChild(optionTwo);
}
