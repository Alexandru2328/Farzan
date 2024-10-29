async function startGame() {
    var aiCard = document.getElementById("aiCard");
    aiCard.style.display = "flex";
    var startGameDiv = document.getElementById("startGameDiv");
    var inputValue = document.getElementById("inputStart").value;

    if (inputValue.trim() === "") {
        alert("You must enter a word to start the game");
        return; 
    }

    if (await checkWord(inputValue) === "False") {
        alert("You must enter a real word to start the game");
        return; 
    }

    if (inputValue.length <= 2) {
        alert("You must enter a word longer than 2 letters");
        return; 
    }

    if (inputValue.includes(" ")) {
        alert("Input cannot contain spaces.");
        return;
    }

    startGameDiv.style.display = "none";
    var containerGame = document.getElementById("containerGame");
    containerGame.style.display = "flex";
    var playerCard = document.getElementById("playerCard");
    playerCard.style.display = "none";
    var showWord = document.getElementById("word");
    showWord.innerText = inputValue;

    prefixGame = getSufix(inputValue);
    aiTurn(prefixGame);
}


function getSufix(word) {
    let prefix = word.substring(word.length -2);
    console.log(prefix);
    return prefix;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function newGame() {
    window.location.reload();
}

function showTheWiner(id) {
    var containerGame = document.getElementById("containerGame");
    containerGame.style.display = "none";
    var button = document.getElementById("butonStart");
    button.textContent = "NEW GAME";
    button.setAttribute('onclick',
        `newGame()`);
    var input = document.getElementById("inputStart");
    input.style.display= "none";
    var textNweRound = document.getElementById("textNweRound");
    if (id === 1) {
        textNweRound.innerText = "You LOST";
    } else {
        textNweRound.innerText = "You Win";
    }

}

function newRound(id) {
    var containerGame = document.getElementById("containerGame");
    containerGame.style.display = "none";

    var startGameDiv = document.getElementById("startGameDiv");
    startGameDiv.style.display = "flex";

    var aiCard = document.getElementById("aiCard");
    aiCard.style.display = "flex";

    var playerCard = document.getElementById("playerCard");
    playerCard.style.display = "flex";

    var textNweRound = document.getElementById("textNweRound");
    if (id === 1) {
        textNweRound.innerText = "You Gave Up";
    } else {
        textNweRound.innerText = "The AI Gave Up";
    }
   
}