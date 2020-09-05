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
// startButtonEl.addEventListener("click", showOptionOne);
// startButtonEl.addEventListener("click", showOptionTwo);
startButtonEl.addEventListener("click", vertButGrp);

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

//let's try a vertical button group!!

function vertButGrp() {
  //create button group div
  var optionsDivEl = document.createElement("div");
  optionsDivEl.setAttribute("id", "option-buttons-div")
  quizDisplayCell.appendChild(optionsDivEl);

  //create button for option1
  var optionOne = document.createElement("button");
  //add text to button
  optionOne.textContent = questions[0].optionOne;
  optionOne.classList.add("btn", "btn-info", "btn-block");
  //append to btn-group
  optionsDivEl.appendChild(optionOne);

  //create button for option2
  var optionTwo = document.createElement("button");
  //add text to button
  optionTwo.textContent = questions[0].optionTwo;
  optionTwo.classList.add("btn", "btn-info", "btn-block");
  //append to btn-group
  optionsDivEl.appendChild(optionTwo);

  //create button for option3
  var optionThree = document.createElement("button");
  //add text to button
  optionThree.textContent = questions[0].optionThree;
  optionThree.classList.add("btn", "btn-info", "btn-block");
  //append to btn-group
  optionsDivEl.appendChild(optionThree);
}

