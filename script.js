//DOM Elements
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const introSlide = document.getElementById("intro-slide");
const questionPromptEl = document.getElementById("question-prompt-text");
const answerButtonsDiv = document.getElementById("answer-buttons");
const questionsRight = document.getElementById("questions-right");
const totalQuestionsEl = document.getElementById("total-questions");
const gameOverModalParent = document.querySelector(".game-over-modal-parent");
const scoreboardModalParent = document.querySelector(
  ".scoreboard-modal-parent"
);
const modalCloseButton = document.querySelector(".modal-close-button");
const scoreSubmitButton = document.querySelector(".submit-btn");
const nameInputField = document.getElementById("name-input-field");
const timer = document.getElementById("timer-readout");

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
const gameDurationMin = 0.1;
let gameDurationSec = gameDurationMin * 60;
const totalQuestions = quizQuestions.length;

//Event listeners
//start button triggers startGame which triggers resetState and showNextQuestion
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestionSlide();
});
modalCloseButton.addEventListener("click", () => {
  gameOverModalParent.classList.add("hide");
});
// TODO: put these stored values on the scoreboard
scoreSubmitButton.addEventListener("click", () => {
  console.log("score submitted");
  console.log(nameInputField.value);
});

//Functions

//start the game, show first question
function startGame() {
  currentQuestionIndex = 0;
  resetState();
  startButton.classList.add("hide");
  introSlide.classList.add("hide");
  answerButtonsDiv.classList.remove("hide");
  showNextQuestion();
}
//Start the timer
var countdown = setInterval(function () {
  console.log("interval triggered");
  let minuteHand = Math.floor(gameDurationSec / 60);
  let secondHand = gameDurationSec % 60;
  if (secondHand < 10) {
    secondHand = "0" + secondHand;
  }
  gameDurationSec--;
  timer.innerHTML = `${minuteHand}:${secondHand}`;
  if (gameDurationSec <= -1) {
    clearInterval(countdown);
  }
}, 1000);
// setInterval(countDown, 1000);
// function countDown() {
//   // setInterval(countDown, 1000);
//   let minuteHand = Math.floor(gameDurationSec / 60);
//   let secondHand = gameDurationSec % 60;
//   if (secondHand < 10) {
//     secondHand = "0" + secondHand;
//   }
//   timer.innerHTML = `${minuteHand}:${secondHand}`;
//   if (secondHand<=0){
//     clearInterval(gameDurationSec);
//   }
//   gameDurationSec--;
// }

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
  console.log(selectedButton.dataset.correct);
  Array.from(answerButtonsDiv.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (selectedButton.dataset.correct) {
    totalCorrect++;
    console.log(totalCorrect);
  }
  if (quizQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    //Game Over
    gameOverModalParent.classList.add("modal-active");
    startButton.innerText = "Play Again";
    startButton.classList.remove("hide");
    questionsRight.innerHTML = totalCorrect;
    totalQuestionsEl.innerHTML = totalQuestions;
  }
}

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
