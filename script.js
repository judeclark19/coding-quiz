//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array
var quizDisplayCell = document.getElementById("quiz-display-cell");

//Starting intervals
let currentQuestion=0;

//Quiz Questions and Answers
var allQuestionsObject={
questionOnePrompt: "Commonly used data types DO NOT include:",
questionTwoPrompt: "The condition in an if/else statement is enclosed within:",
questionThreePrompt: "Arrays in JavaScript can be used to store:",
}

var allAnswersObject={
    questionOneAnswers: ["strings", "booleans","alerts","numbers"]

    }

var stringy = JSON.stringify(allAnswersObject.questionOneAnswers)

console.log(typeof stringy)
// questionOneAnswers: "strings,booleans,alerts,numbers",
// questionTwoAnswers: "quotes,curly brackets,parentheses,square brackets",
// questionThreeAnswers: "numbers and strings,other arrays,booleans,all of the above",


//When start button is clicked:
// TODO: how do I combine these?
startButtonEl.addEventListener("click", hideInstructions);
startButtonEl.addEventListener("click", showNextPrompt);
startButtonEl.addEventListener("click", showNextAnswerSet);

function hideInstructions() {
  for (let i = 0; i < instructionParagraphs.length; i++) {
    instructionParagraphs[i].remove();
    startButtonEl.remove();
  }
}

function showNextPrompt() {
  //create h3 and display the prompt
  var questionPromptEl = document.createElement("h4");
  questionPromptEl.textContent = allQuestionsObject.questionOnePrompt;
  quizDisplayCell.appendChild(questionPromptEl);
}

function showNextAnswerSet() {
  //create button group div to contain the answers
  var optionsDivEl = document.createElement("div");
  optionsDivEl.setAttribute("id", "option-buttons-div");
  quizDisplayCell.appendChild(optionsDivEl);

  for (let i = 0; i < allAnswersObject.questionOneAnswers.length; i++) {
    var anAnswerButton = document.createElement("button");
    anAnswerButton.textContent = allAnswersObject.questionOneAnswers[i];
    anAnswerButton.classList.add("btn", "btn-info", "btn-block");
    optionsDivEl.appendChild(anAnswerButton);
  }
}

// function displayAnswerButtons() {
//   for (let i = 0; i < allAnswersObject.questionOneAnswers.length; i++) {
//     var anAnswerButton = document.createElement("button");
//     anAnswerButton.textContent = "test";
//     anAnswerButton.classList.add("btn", "btn-info", "btn-block");
//     optionsDivEl.appendChild(anAnswerButton);
//   }
// }

//   //create button for option1
//   var optionOne = document.createElement("button");
//   //add text to button
//   optionOne.textContent = answerOptions[0].a;
//   optionOne.classList.add("btn", "btn-info", "btn-block");
//   //append to btn-group
//   optionsDivEl.appendChild(optionOne);

//   //create button for option2
//   var optionTwo = document.createElement("button");
//   //add text to button
//   optionTwo.textContent = answerOptions[0].b;
//   optionTwo.classList.add("btn", "btn-info", "btn-block");
//   //append to btn-group
//   optionsDivEl.appendChild(optionTwo);

//   //create button for option3
//   var optionThree = document.createElement("button");
//   //add text to button
//   optionThree.textContent = answerOptions[0].c;
//   optionThree.classList.add("btn", "btn-info", "btn-block");
//   //append to btn-group
//   optionsDivEl.appendChild(optionThree);
// }
