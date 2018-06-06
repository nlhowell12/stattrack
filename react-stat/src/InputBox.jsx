import React, { Component } from 'react';
import './App.css';


class InputBox extends Component {
    render() {
        return (
<section id="input_box">
    <section id="char_text">
        <input id='charInput' type="text" placeholder={"Enter Character Name"} value={this.props.newPlayer} onChange={evt => {this.props.changeState({newPlayer: evt.target.value})}}/>
        <input type="number" id="initInput" placeholder={"Initiative"} value={this.props.newPlayerInit} onChange={evt => {this.props.changeState({newPlayerInit: Number(evt.target.value)})}}/>
        <button id='charSubmit' onClick={this.props.addPlayer(this.props.newPlayer, this.props.newPlayerInit)}>Submit</button>
    </section>
    <section id="turn_counter">
        <p>Turn Counter</p>
        <div id="turnDisplay">
        {this.props.turnNumber}
        </div>
        <button id="turnClick" onClick={this.props.nextTurn}>Next Turn</button>
    </section>
</section>
        )
    }
}

export default InputBox;
