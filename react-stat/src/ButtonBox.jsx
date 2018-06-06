import React, { Component } from 'react';
import './App.css';

class ButtonBox extends Component {
    render() {
        return (
            <section id="but_box">
            <section id="effect_length">
                <input type="number" id="turn_input"/>
                <p>Length of Effect</p>
            </section>
            <section id="custom_effect">
                <input type="text" id="custom_text"/>
                <button id="custom_but">Custom Effect</button> 
            </section>
            <button className="effect_but" id="stunned" >Stunned</button>
            <button className="effect_but" id="poisoned" >Poisoned</button>
            <button className="effect_but" id="charmed" >Charmed</button>
            <button className="effect_but" id="frightened" >Frightened</button>
            <button className="effect_but" id="blinded" >Blinded</button>
            <button className="effect_but" id="fatigued" >Fatigued</button>
            <button className="effect_but" id="paralyzed" >Paralyzed</button>
        </section>  
        )
    }
}

export default ButtonBox