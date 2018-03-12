const state = {
    players: {

    }
}

selectedPlayerElement = "";

function createPlayer(name) {
    state.players[name] = {
        stunned: 0,
        poisoned: 0,
        charmed: 0,
        fatigued: 0,
        frightened: 0,
        blinded: 0,
        paralyzed: 0,
    }
}

function addPlayerToState() {
    let charName = document.getElementById("charInput")
    createPlayer(charName.value);
    charName.value = '';
    drawPlayers();
}

// Adds an event listener to every button
var buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonClick);
}

function addPlayerClickResponse() {
    var players = document.getElementsByClassName("player");
    for (let i = 0; i < players.length; i++) {
        players[i].addEventListener("click", selectPlayerElement)
    }
}

function selectPlayerElement() {
    let clickEvent = event.target;
    let selectedPlayer = clickEvent.id;
    let findPlayers = document.getElementsByClassName("player");
    // For loop resets other player elements for clarity
    for (let i = 0; i < findPlayers.length; i++) {
        if (findPlayers[i].id != selectedPlayer) {
            (findPlayers[i]).style = "border: 1px solid blue";
        }
    }
    document.getElementById(selectedPlayer).style = "border: 2px solid red";
    selectedPlayerElement = clickEvent.id;
}

function buttonClick() {
    let clickEvent = event.target;
    let length = document.getElementById("lengthInput");
    switch (clickEvent.className) {
        case "effect_but":
        addEffect(selectedPlayerElement, clickEvent.id, length.value);
        break;
    }
    switch (clickEvent.id) {
        case "charSubmit":
        addPlayerToState();
        addPlayerClickResponse();
        break;
    }
    drawPlayers();
    
    length.value = '';
}

function addEffect(charName, effectName, length) {
    if (charName != "") {
    state.players[charName][effectName] = length;
    }
    else {
        alert("Please select a character");
    }
}

function drawPlayers() {
    for (let player in state.players) {
        drawPlayer(player);
    }
}

function drawPlayer(playerName) {
    let playerElement = document.getElementById(playerName);
    const player = state.players[playerName];

    if (!playerElement) {
        playerElement = document.createElement("div");
        playerElement.id = playerName;
        namePlate = document.createElement('div');
        namePlate.id = playerName + "Plate";
        namePlate.classList.add("namePlate");
        playerElement.classList.add("player");
        let findDisplay = document.getElementById('display');
        findDisplay.appendChild(playerElement);
        playerElement.appendChild(namePlate)
        document.getElementById(playerName + "Plate").innerHTML = playerName;
        for (let effect in player) {
            let effectElement = document.createElement("div");
            effectElement.classList.add("effect", effect);
            playerElement.appendChild(effectElement);
        }
    }

    for (let effect in player) {
        const currentEffect = document.querySelector("#" + playerName + " > .effect." + effect);
        currentEffect.style.width = (player[effect] * 50) + "px";
        currentEffect.style.display = player[effect] ? "block" : "none";
        currentEffect.textContent = player[effect];
    }
}
