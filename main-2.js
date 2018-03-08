const state = {
    players: {

    }
}

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

function addPlayerClick() {
    var players = document.getElementsByClassName("player");
    for (let i = 0; i < players.length; i++) {
        players[i].addEventListener("click", selectPlayerElement)
    }
}

function selectPlayerElement() {
    let clickEvent = event.target;
    let selectedPlayer = '';
    selectedPlayer = clickEvent.id;
    document.getElementById(clickEvent.id).style = "border: 2px solid red";
}

function buttonClick() {
    let clickEvent = event.target;
    let length = document.getElementById("lengthInput").value;

    if (clickEvent.className == "effect_but") {
        addEffect(selectedPlayer, clickEvent.id, length)
    }
    drawPlayers();
    addPlayerClick();
}

function addEffect(charName, effectName, length) {
    state.players.charName[effectName] = length;
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
        playerElement.classList.add("player");
        let findDisplay = document.getElementById('display');
        findDisplay.appendChild(playerElement);
        for (let effect in player) {
            let effectElement = document.createElement("div");
            effectElement.classList.add("effect", effect);
            effectElement.textContent = player[effect];
            playerElement.appendChild(effectElement);
        }
    }

    for (let effect in player) {
        const currentEffect = document.querySelector("#" + playerName + " > .effect." + effect);
        currentEffect.style.width = (player[effect] * 50) + "px";
        currentEffect.style.display = player[effect] ? "block" : "none";
    }
}

function log(value) {
    const div = document.createElement("div");
    div.textContent = JSON.stringify(value);
    document.display.appendChild(div);
}