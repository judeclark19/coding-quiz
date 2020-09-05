//DOM variables
var startButtonEl = document.getElementById("start-button");
var instructionParagraphs = document.querySelectorAll(".instructions"); //note this is an array
var quizDisplayCell = document.getElementById("quiz-display-cell");

//Quiz Questions and Answers
var questionPromptArr = [
  {
    //index 0
    number: 1,
    prompt: "Commonly used data types DO NOT include:",
  },
  {
    //index 1
    number: 2,
    prompt: "The condition in an if/else statement is enclosed within:",
  },
  {
    //index 2
    number: 3,
    prompt: "Arrays in JavaScript can be used to store:",
  },
  {
    //index 3
    number: 4,
    prompt: "String values must be enclosed within ______ when being assigned to variables.",
  },
  {
    //index 4
    number: 5,
    prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
  },
];
var answerOptions = [
  {
    //index 0 q1
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
  },
  {
    //index 1 q2
    a: "quotes",
    b: "curly brackets",
    c: "parentheses",
    d: "square brackets",
  },
  {
    //index 2 q3
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
  },
  {
    //index 3 q4
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parentheses",
  },
  {
    //index 4 q5
    a: "JavaScript",
    b: "terminal / bash",
    c: "for loops",
    d: "console.log",
  },

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
  //create h3 and display the prompt
  var questionPromptEl = document.createElement("h3");
  questionPromptEl.textContent = questionPromptArr[0].prompt;
  quizDisplayCell.appendChild(questionPromptEl);
}

function displayAnswerOptions() {
  //create button group div to contain the answers
  var optionsDivEl = document.createElement("div");
  optionsDivEl.setAttribute("id", "option-buttons-div");
  quizDisplayCell.appendChild(optionsDivEl);

  //TODO: for loop

  //create button for option1
  var optionOne = document.createElement("button");
  //add text to button
  optionOne.textContent = answerOptions[0].a;
  optionOne.classList.add("btn", "btn-info", "btn-block");
  //append to btn-group
  optionsDivEl.appendChild(optionOne);

  //create button for option2
  var optionTwo = document.createElement("button");
  //add text to button
  optionTwo.textContent = answerOptions[0].b;
  optionTwo.classList.add("btn", "btn-info", "btn-block");
  //append to btn-group
  optionsDivEl.appendChild(optionTwo);

  //create button for option3
  var optionThree = document.createElement("button");
  //add text to button
  optionThree.textContent = answerOptions[0].c;
  optionThree.classList.add("btn", "btn-info", "btn-block");
  //append to btn-group
  optionsDivEl.appendChild(optionThree);
}
