//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array
var quizDisplayCell = document.getElementById("quiz-display-cell");

//Quiz Questions
var questionPromptArr = [
  { //index 0
    number: 1,
    prompt: "Commonly used data types DO NOT include:",
  }, { //index 1
    number: 2,
    prompt: "The condition in an if/else statement is enclosed within:",
  }
  //question2
  //question3
  //question4
  //question5
];

var answerOptions = [
    { //index 0
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
    }, { //index 1
      a: "quotes",
      b: "curly brackets",
      c: "parentheses",
      d: "square brackets",
    }
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
startButtonEl.addEventListener("click", displayAnswerOptions);

function hideInstructions() {
  for (let i = 0; i < instructionParagraphs.length; i++) {
    instructionParagraphs[i].remove();
    startButtonEl.remove();
  }
}

function showNextPrompt() {
  //create prompt
  var questionPromptEl = document.createElement("h3");
  questionPromptEl.textContent = questionPromptArr[0].questionPrompt;
  quizDisplayCell.appendChild(questionPromptEl);
}

function displayAnswerOptions() {
  //create button group div to contain the answers
  var optionsDivEl = document.createElement("div");
  optionsDivEl.setAttribute("id", "option-buttons-div");
  quizDisplayCell.appendChild(optionsDivEl);

  //for loop

  

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
