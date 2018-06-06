import React, { Component } from 'react';
import './App.css';
import CharDisplay from './CharDisplay.jsx';

class App extends Component {
    state = {
        turn: 0,
        players: [],
    }
    addPlayer = (name, init) => evt => {
        const { players } = this.state;
        let player = {
            name: name,
            initiative: init,
            effects: [
                { stunned: 0 },
                { poisoned: 0 },
                { charmed: 0 },
                { frightened: 0 },
                { blinded: 0 },
                { fatigued: 0 },
                { paralyzed: 0}
                ]
        }
        this.setState({players:  [...players, player]})
    }
  render() {
    return (
      <div className="App">
        <CharDisplay players={this.state.players}/>
        <section id="lower_wrap">
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
            <section id="input_box">
                <section id="char_text">
                    <p>Character Name</p>
                    <input id='charInput' type="text"/>
                    <button id='charSubmit' onClick={this.addPlayer("Kyrin", 1)}>Submit</button>
                    <button id="removeChar" >Remove</button>
                </section>
                <section id="turn_counter">
                    <p>Turn Counter</p>
                    <div id="turnDisplay"></div>
                    <button id="turnClick" >Next Turn</button>
                </section>
            </section>
        </section>
      </div>
    );
  }
}

export default App;
