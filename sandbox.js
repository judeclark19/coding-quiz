const startButton = document.getElementById("start-btn");

const gameDuration = 75;
var gameDurationInSec = gameDuration;
var gameDurationInMin = gameDurationInSec / 60;

var myInterval;

startButton.addEventListener("click", startTimer);

//Start the timer
function startTimer() {
  var timer = document.createElement("div");
  timer.setAttribute("id", "timer-readout");
  document.body.appendChild(timer);

  timer.innerHTML = "BEGIN!";
  var myInterval = setInterval(() => {
    gameDurationInSec--;

    let minuteHand = Math.floor(gameDurationInSec / 60);
    let secondHand = gameDurationInSec % 60;
    if (secondHand < 10) {
      secondHand = "0" + secondHand;
    }

    timer.innerHTML = `${minuteHand}:${secondHand}`;
    
    //Conditions under which the interval will clear
    //if the timer reaches zero
    //if the questions attempted >
  }, 1000);
}