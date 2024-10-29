let playerLife = 5;
let aiLife = 5;
let prefixGame = "";

function showWord(word) {
    var showWord = document.getElementById("word");
        showWord.innerText = word;
}

async function aiTurn(prefix) {
    await delay(1500);
    var word = await generateWord(prefix);
    if (word === "-1") {
        addLetter(2);
    } if (word.slice(0, 2) !== prefixGame) {
        word = await generateWord(prefix);
    }

    showWord(word);
    var aiCard = document.getElementById("aiCard");
    aiCard.style.display = "none";
    var playerCard = document.getElementById("playerCard");
    playerCard.style.display = "flex";
    var titleTurn = document.getElementById("titleTurn");
    titleTurn.innerText = "Player Turn";
    prefixGame = getSufix(word);
    
}

function addLetter(id){
    if (id == 1 && playerLife !== 0) {
        --playerLife;
        var showLetters = document.getElementById("playerLife");
        showLetters.innerText = chooseTheModel(playerLife);
        newRound(id);
        if (playerLife === 0) {
            showTheWiner(id);
        }
    } else {
        --aiLife;
        var showLetters = document.getElementById("aiLife");
        showLetters.innerText = chooseTheModel(aiLife);
        newRound(id);
        if (aiLife === 0) {
            showTheWiner(id);
        }
    }
}

async function playerTurn() {
    var inputValue = document.getElementById("playerInput").value;
    if (inputValue.trim() === "") {
        alert("You must enter a word to start the game");
        return; 
    }

    if (await checkWord(inputValue) === "False") {
        alert("You must enter a real word ");
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
    if (inputValue.slice(0, 2) !== prefixGame) {
        alert("The word should start with " + prefixGame);
        return;
    }

    showWord(inputValue);
    prefixGame = getSufix(inputValue);
    var aiCard = document.getElementById("aiCard");
    aiCard.style.display = "flex";
    var playerCard = document.getElementById("playerCard");
    playerCard.style.display = "none";
    aiTurn(prefixGame);
    var titleTurn = document.getElementById("titleTurn");
    titleTurn.innerText = "AI Turn";
}
