// Adding a character to the upper display
function charAdd () {
   let newCharDiv = document.createElement('div');
   let newP = document.createElement('p');
   let charNameGet = document.getElementById('charInput').value;
   let insertChar = document.getElementById('display');
   let charName = document.createTextNode(charNameGet);
   let charWrap = document.createElement('div');
   let effectWrap = document.createElement('div');
   charWrap.className = 'charWrap';
   charWrap.id = charNameGet + "Wrap";
   newCharDiv.id = charNameGet;
   newCharDiv.className = 'charName';
   effectWrap.id = charNameGet + "Effects"
   effectWrap.className = "effectDisplay";
   newP.id = "charNamePlate";
   insertChar.appendChild(charWrap);
   charWrap.appendChild(newCharDiv);
   newCharDiv.appendChild(newP);
   newP.appendChild(charName)
   charWrap.appendChild(effectWrap);
}

function charRemove () {
    let charNameGet = document.getElementById('charInput').value;
    let remFind = document.getElementById(charNameGet+'Wrap');
    let remParent = document.getElementById('display');
    remParent.removeChild(remFind);
}

function addStunned () {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'effect';
    newEffectDiv.id = charNameGet + "Stun";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Stun");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'yellow';
    newEffectDiv.appendChild(document.createTextNode("Stunned"));
}

function addPoisoned () {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'effect';
    newEffectDiv.id = charNameGet + "Poison";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Poison");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'green';
    effect.style.color = 'lightcyan';
    newEffectDiv.appendChild(document.createTextNode("Poisoned"));
}

function addCharmed () {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'effect';
    newEffectDiv.id = charNameGet + "Charmed";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Charmed");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'pink';
    newEffectDiv.appendChild(document.createTextNode("Charmed"));
}

function addFrightened () {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'effect';
    newEffectDiv.id = charNameGet + "Frightened";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Frightened");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'blue';
    effect.style.color = 'darkturquoise';
    newEffectDiv.appendChild(document.createTextNode("Frightened"));
}
function addBlinded() {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'effect';
    newEffectDiv.id = charNameGet + "Blinded";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Blinded");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'black';
    effect.style.color = "white";
    newEffectDiv.appendChild(document.createTextNode("Blinded"));
}

function addFatigued() {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'effect';
    newEffectDiv.id = charNameGet + "Fatigued";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Fatigued");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'purple';
    effect.style.color = 'lightcoral';
    newEffectDiv.appendChild(document.createTextNode("Fatigued"));
}

function addParalyzed() {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'effect';
    newEffectDiv.id = charNameGet + "Paralyzed";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Paralyzed");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'orange';
    newEffectDiv.appendChild(document.createTextNode("Paralyzed"));
}

function addCustom() {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    let customEffect = document.getElementById('custom_text').value;
    newEffectDiv.className = 'effect';
    newEffectDiv.id = charNameGet + customEffect;
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + customEffect);
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'red';
    effect.style.color = 'floralwhite';
    newEffectDiv.appendChild(document.createTextNode(customEffect));
}
var turnCount = 0;    
function nextTurn() {
    
    let turnBut = document.getElementById('turnClick');
    let turnDisplay = document.getElementById("turnDisplay");
    let effect = document.getElementsByClassName('effect');
    
        turnCount++
        turnDisplay.innerHTML = turnCount;
        turnDisplay.style.fontSize = "30px";
        
        for (let i=0; i<effect.length; i++) {
            let currentEffect = effect[i];
            currentEffect.style.width = (Math.max(0, currentEffect.offsetWidth - 50)) + "px";
        
            if (currentEffect.offsetWidth <= 5){
            currentEffect.style.display = 'none';
            console.log(currentEffect.style.width)
            }
        }
    }

