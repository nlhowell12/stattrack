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
    newEffectDiv.className = 'stunned';
    newEffectDiv.id = charNameGet + "Stun";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Stun");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'yellow';
}

function addPoisoned () {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'poisoned';
    newEffectDiv.id = charNameGet + "Poison";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Poison");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'green';
}

function addCharmed () {
    let charNameGet = document.getElementById('charInput').value;
    let effectWrapFind = document.getElementById(charNameGet+'Effects');
    let newEffectDiv = document.createElement('div');
    let effectLength = Number(document.getElementById('turn_input').value);
    newEffectDiv.className = 'charmed';
    newEffectDiv.id = charNameGet + "Charmed";
    effectWrapFind.appendChild(newEffectDiv);
    let effect = document.getElementById(charNameGet + "Charmed");
    effect.style.width = String(effectLength*50)+'px';
    effect.style.minHeight = "20px";
    effect.style.backgroundColor = 'pink';
}


