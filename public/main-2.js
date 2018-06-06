// const state = {
//     players: {
        
//     }
// }
var socket = io.connect('http://localhost:3000');

selectedPlayerElement = "";

// Sets the charSubmit button to trigger after pressing Enter
document.getElementById("charInput")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("charSubmit").click();
    }
});

// function createPlayer(name) {
//     state.players[name] = {
//         stunned: 0,
//         poisoned: 0,
//         charmed: 0,
//         fatigued: 0,
//         frightened: 0,
//         blinded: 0,
//         paralyzed: 0,
//     }
// }

function addPlayerToState() {
    let charName = document.getElementById("charInput");
    let player = document.getElementById(charName.value);
    socket.emit('addPlayer', {
        player: player,
        
    })
    // if (!player) {
    //     createPlayer(charName.value);
    // }
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
    let length = document.getElementById("turn_input");
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
        case "custom_but":
        let customText = document.getElementById("custom_text").value;
        state.players[selectedPlayerElement][customText] = Number(length.value);
        let effectElement = document.createElement("div");
        let effectDisplay = document.getElementById(selectedPlayerElement + "EffectDisplay");
        effectElement.classList.add("effect", customText);
        effectDisplay.appendChild(effectElement); 
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
        effectDisplay = document.createElement('div');
        effectDisplay.id = playerName + "EffectDisplay";
        effectDisplay.classList.add('effectDisplay');
        playerElement.classList.add("charWrap");
        let findDisplay = document.getElementById('display');
        findDisplay.appendChild(playerElement);
        playerElement.appendChild(namePlate)
        playerElement.appendChild(effectDisplay);
        document.getElementById(playerName + "Plate").innerHTML = playerName;
        
        for (let effect in player) {
            let effectElement = document.createElement("div");
            effectElement.classList.add("effect", effect);
            effectDisplay.appendChild(effectElement);
        }
    }
    
    for (let effect in player) {
        const currentEffect = document.querySelector("#" + playerName + "EffectDisplay" + " > .effect." + effect);
        currentEffect.style.width = (player[effect] * 50) + "px";
        currentEffect.style.display = player[effect] ? "block" : "none";
        currentEffect.textContent = player[effect] + `: ${effect}`;
    }
}
