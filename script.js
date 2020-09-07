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
// const timer = document.getElementById("timer-readout");

//Question and answer bank
const quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
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
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parentheses", correct: true },
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
];

//Other variables
var currentQuestionIndex = 0;
var totalCorrect = 0;
const gameDurationInMin = 1;
let gameDurationInSec = gameDurationInMin * 60;
const totalQuestions = quizQuestions.length;

//Event listeners
viewScoreboard.addEventListener("click", () => {
  scoreboardModal.classList.add("modal-active");
});
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
  resetState();
  startButton.classList.add("hide");
  introSlide.classList.add("hide");
  answerButtonsDiv.classList.remove("hide");
  showNextQuestion();
  startTimer();
}
//Start the timer
function startTimer() {
  var timer = document.createElement("div");
  timer.setAttribute("id", "timer-readout");
  document.body.appendChild(timer);

  gameDurationInSec = gameDurationInMin * 60;
  timer.innerHTML = "BEGIN!";
  var myInterval = setInterval(() => {
    gameDurationInSec--;

    let minuteHand = Math.floor(gameDurationInSec / 60);
    let secondHand = gameDurationInSec % 60;
    if (secondHand < 10) {
      secondHand = "0" + secondHand;
    }

    timer.innerHTML = `${minuteHand}:${secondHand}`;

    if (gameDurationInSec <= 0) {
      clearInterval(myInterval);
      gameOver();
    }
  }, 1000);
}

//Show next question once the game is already underway
function nextQuestionSlide() {
  resetState();
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

function resetState() {
  while (answerButtonsDiv.firstChild) {
    answerButtonsDiv.removeChild(answerButtonsDiv.firstChild);
  }
  nextButton.classList.add("hide");
}

//when an answer is selected
function selectAnswer(event) {
  var selectedButton = event.target;
  Array.from(answerButtonsDiv.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (selectedButton.dataset.correct) {
    totalCorrect++;
  }
  if (quizQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    gameOver();
  }
}

function gameOver() {
  gameOverModal.classList.add("modal-active");
  startButton.innerText = "Play Again";
  startButton.classList.remove("hide");
  questionsRight.innerHTML = totalCorrect;
  totalQuestionsEl.innerHTML = totalQuestions;
  timeRemainderEl.innerHTML = gameDurationInSec;
}

function submitScore () {
  localStorage.setItem("myName", nameInputField.value)
  localStorage.setItem("myScore", (totalCorrect/totalQuestions)*100+"%")
  localStorage.setItem("myTime", gameDurationInSec);
  console.log(localStorage);

var scoreTableRow = document.createElement("tr");

  var nameField = document.createElement("th")
  nameField.setAttribute("scope", "row");
  nameField.textContent = localStorage.getItem("myName");
  scoreTableRow.appendChild(nameField);

  var percentField = document.createElement("td")
  // percentField.setAttribute("scope", "row");
  percentField.textContent = localStorage.getItem("myScore");
  scoreTableRow.appendChild(percentField);

  var timeField = document.createElement("td")
  // timeField.setAttribute("scope", "row");
  timeField.textContent = localStorage.getItem("myTime");
  scoreTableRow.appendChild(timeField);

  scoreTable.appendChild(scoreTableRow);
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
