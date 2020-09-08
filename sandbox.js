
const storedScores = localStorage.getItem('gameResults')
let gameResultsArray;

if(storedScores === null){
    gameResultsArray = []; //if there is nothing in memory, blank array
} else {
    gameResultsArray = JSON.parse(storedScores); //if there is memory, set the array equal to the unstringified scores
}

var thisGameResult = {name: "nameInputField.value",
percent: "(tc/tq)*100 = '%'",
remainder: "gameDurationInSecs",
}

gameResultsArray.push({name: "four name",
percent: "four score",
remainder: "four duration",
});


localStorage.setItem("gameResults", JSON.stringify(gameResultsArray));

console.log(gameResultsArray);