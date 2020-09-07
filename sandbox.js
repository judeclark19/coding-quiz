const minuteHand = document.getElementById("minute-hand");
const secondhand = document.getElementById("second-hand");

var gameDurationInSecs = 10
var gameDurationInMins = gameDurationInSecs/60

var timerFunction = setInterval(() => {
    gameDurationInSecs--;
    console.log(gameDurationInSecs);
    if (gameDurationInSecs<0) {
        clearInterval(timerFunction);
        console.log("timer stops")
    }
}, 1000);