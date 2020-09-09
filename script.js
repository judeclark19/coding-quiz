//DOM Elements
const viewScoreboard = document.getElementById("view-scoreboard");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const introSlide = document.getElementById("intro-slide");
const questionPromptEl = document.getElementById("question-prompt-text");
const answerButtonsDiv = document.getElementById("answer-buttons");
const questionsRight = document.getElementById("questions-right");
const totalQuestionsEl = document.getElementById("total-questions");
const timeRemainderEl = document.getElementById("time-remainder");
const gameOverModal = document.getElementById("game-over-mod-bg");
const gomCloseButton = document.getElementById("gom-close-button");
const scoreboardModal = document.getElementById("scoreboard-mod-bg");
const scoreModCloseButton = document.getElementById("scoreMod-close-button");
const scoreSubmitButton = document.querySelector(".submit-btn");
const nameInputField = document.getElementById("name-input-field");
const scoreTable = document.getElementById("add-new-scores-here");

//Question and answer bank
const quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers:[
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if/else statement is enclosed within:",
    answers: [
      { text: "parentheses", correct: true },
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables:",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parentheses", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal / bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
  {
    question:
      "What is the correct way to call the random method on the Math global object?",
    answers: [
      { text: "math.random()", correct: false },
      { text: "Math.random()", correct: true },
      { text: "Math(random)", correct: false },
      { text: "random.Math()", correct: false },
    ],
  },
  {
    question:
      "What is string interpolation?",
    answers: [
      { text: "Printing a string to the console.", correct: false },
      { text: "Changing the value of a variable", correct: false },
      { text: "Using template literals to embed variables into strings", correct: true },
      { text: "Joining multiple strings together using the + operator", correct: false },
    ],
  },
  {
    question:
      "What is the correct syntax for a single-line comment in JavaScript?",
    answers: [
      { text: "'Put your comment in quotes'", correct: false },
      { text: "console.log('Your comment')", correct: false },
      { text: "// Your comment", correct: true },
      { text: "<!--Your comment-->", correct: false },
    ],
  },

  {
    question:
      "Which of the following options correctly declares a variable that can be changed later in the code?",
    answers: [
      { text: "let myName = 'Sam';", correct: true },
      { text: "let myName: 'Sam';", correct: false },
      { text: "myName = 'Sam';", correct: false },
      { text: "const myName = 'Sam';", correct: false },
    ],
  },
  {
    question:
      "Which of the following is not a way to declare a variable?",
    answers: [
      { text: "let", correct: false },
      { text: "temp", correct: true },
      { text: "const", correct: false },
      { text: "var", correct: false },
    ],
  },
];

//Other variables
var currentQuestionIndex = 0;
var totalCorrect = 0;
var questionsAttempted = 0;
const gameDuration = 75;
var gameDurationInSec = gameDurationInSec;
var gameDurationInMin = gameDurationInSec / 60;
var totalQuestions = quizQuestions.length;

//Event listeners
viewScoreboard.addEventListener("click", viewScoreboardFunc);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestionSlide();
});
gomCloseButton.addEventListener("click", () => {
  gameOverModal.classList.remove("modal-active");
});
scoreModCloseButton.addEventListener("click", () => {
  scoreboardModal.classList.remove("modal-active");
  location.reload();
});
// TODO: put these stored values on the scoreboard
scoreSubmitButton.addEventListener("click", () => {
  gameOverModal.classList.remove("modal-active");
  scoreboardModal.classList.add("modal-active");
  submitScore();
});

//Functions

//start the game, show first question
function startGame() {
  currentQuestionIndex = 0;
  totalCorrect = 0;
  questionsAttempted = 0;
  gameDurationInSec = gameDuration;
  resetAnswers(); //TODO: what is this
  startButton.classList.add("hide");
  introSlide.classList.add("hide");
  answerButtonsDiv.classList.remove("hide");
  showNextQuestion();
  startTimer();
}

//define interval
var myInterval;

//Start the timer
function startTimer() {
  var timer = document.createElement("div");
  timer.setAttribute("id", "timer-readout");
  document.body.appendChild(timer);

  timer.innerHTML = "BEGIN!";
  myInterval = setInterval(() => {
    gameDurationInSec--;

    let minuteHand = Math.floor(gameDurationInSec / 60);
    let secondHand = gameDurationInSec % 60;
    if (secondHand < 10) {
      secondHand = "0" + secondHand;
    }

    timer.innerHTML = `${minuteHand}:${secondHand}`;
  
    if (gameDurationInSec <= 0) {
      gameOver();
    }
  }, 1000);
}

//Show next question once the game is already underway
function nextQuestionSlide() {
  resetAnswers();
  showNextQuestion();
}
//show next question TODO: I still don't understand the answer parameter.
function showNextQuestion(question) {
  questionPromptEl.innerText = quizQuestions[currentQuestionIndex].question;
  quizQuestions[currentQuestionIndex].answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.setAttribute("class", "btn btn-outline-info");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsDiv.appendChild(button);
  });
}

function resetAnswers() {
  while (answerButtonsDiv.firstChild) {
    answerButtonsDiv.removeChild(answerButtonsDiv.firstChild);
  }
  nextButton.classList.add("hide");
}

//when an answer is selected
function selectAnswer(event) {
  questionsAttempted++;
  var selectedButton = event.target;
  Array.from(answerButtonsDiv.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (selectedButton.dataset.correct) {
    totalCorrect++;
  } else if (selectedButton.dataset.correct === false && gameDurationInSec<10) {
    gameDurationInSec = 0; //Trying to stop the timer from turning negative if you get the last question wrong with less than 10 seconds to go
  } else {
    gameDurationInSec -= 10;
  }

  if (questionsAttempted<totalQuestions) {
    nextButton.classList.remove("hide");
  } else {
    gameOver();
  }
}

function gameOver() {
  clearInterval(myInterval);
  document.getElementById("timer-readout").classList.add("hide");
  gameOverModal.classList.add("modal-active");
  startButton.innerText = "Play Again";
  startButton.classList.remove("hide");
  questionsRight.innerHTML = totalCorrect;
  totalQuestionsEl.innerHTML = totalQuestions;

  if (gameDurationInSec>=0){
    timeRemainderEl.innerHTML = gameDurationInSec;
  } else
  timeRemainderEl.innerHTML = "0";

  
}

function submitScore() {
  const storedScores = localStorage.getItem("gameResultsString"); //string of all stored score data
  let gameResultsArray;

  if (storedScores === null) {
    gameResultsArray = []; //if there is nothing in memory, blank array
  } else {
    gameResultsArray = JSON.parse(storedScores); //if there is memory, set the array equal to the unstringified scores
  }

  var thisGameResult = {
    name: nameInputField.value,
    percent: (totalCorrect / totalQuestions) * 100 + "%",
    remainder: gameDurationInSec,
  };

  gameResultsArray.push(thisGameResult);
  localStorage.setItem("gameResultsString", JSON.stringify(gameResultsArray));

  //Create the scoreboard table using locally stored data
  for (let i = 0; i < gameResultsArray.length; i++) {
    
    var scoreTableRow = document.createElement("tr");

    var nameField = document.createElement("th");
    nameField.setAttribute("scope", "row");
    nameField.textContent = gameResultsArray[i].name;
    scoreTableRow.appendChild(nameField);

    var percentField = document.createElement("td");
    percentField.textContent = gameResultsArray[i].percent;
    scoreTableRow.appendChild(percentField);

    var timeField = document.createElement("td")
    timeField.textContent = gameResultsArray[i].remainder;
    scoreTableRow.appendChild(timeField);

    scoreTable.appendChild(scoreTableRow);
  }
}

function viewScoreboardFunc() {
  scoreboardModal.classList.add("modal-active");
  const storedScores = localStorage.getItem("gameResultsString"); //string of all stored score data
  let gameResultsArray;

  if (storedScores === null) {
    gameResultsArray = []; //if there is nothing in memory, blank array
  } else {
    gameResultsArray = JSON.parse(storedScores); //if there is memory, set the array equal to the unstringified scores
  }

  for (let i = 0; i < gameResultsArray.length; i++) {
    
    var scoreTableRow = document.createElement("tr");

    var nameField = document.createElement("th");
    nameField.setAttribute("scope", "row");
    nameField.textContent = gameResultsArray[i].name;
    scoreTableRow.appendChild(nameField);

    var percentField = document.createElement("td");
    percentField.textContent = gameResultsArray[i].percent;
    scoreTableRow.appendChild(percentField);

    var timeField = document.createElement("td")
    timeField.textContent = gameResultsArray[i].remainder;
    scoreTableRow.appendChild(timeField);

    scoreTable.appendChild(scoreTableRow);
  }
}

//showing shows right answer after the user has guessed
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("btn-success");
    element.classList.remove("btn-outline-info");
  } else {
    element.classList.add("btn-danger");
    element.classList.remove("btn-outline-info");
  }
}

function clearStatusClass(element) {
  element.classList.remove("btn-success");
  element.classList.remove("btn-danger");
}
