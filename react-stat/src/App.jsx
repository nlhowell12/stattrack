import React, { Component } from 'react';
import './App.css';
import CharDisplay from './CharDisplay.jsx';
import InputBox from './InputBox.jsx';
import ButtonBox from './ButtonBox.jsx';

class App extends Component {
    state = {
        turn: 1,
        players: [],
        newPlayer: "",
        newPlayerInit: ""
    }
    addPlayer = (name, init) => evt => {
        const { players } = this.state;
        let playerExists = false;
        let player = {
            name,
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
        for (let player of players) {
            if (player.name === name) {
                playerExists = true
            }
        }
        playerExists || this.state.newPlayer === "" ? alert("Please enter a name") : this.setState({players: [...players, player], newPlayer: "", newPlayerInit: ""})
    }
    changeState = (change) => {
        this.setState(change)
    }
    nextTurn = () => {
        this.setState({turn: this.state.turn + 1})
    }

  render() {
    return (
      <div className="App">
        <CharDisplay players={this.state.players}/>
        <section id="lower_wrap">
            <ButtonBox/>
            <InputBox newPlayer={this.state.newPlayer} newPlayerInit={this.state.newPlayerInit} addPlayer = {this.addPlayer} changeState={this.changeState} turnNumber={this.state.turn} nextTurn={this.nextTurn}/>
        </section>
      </div>
    );
  }
}

export default App;
