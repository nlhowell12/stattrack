import React, { Component } from 'react';
import Player from './Player.jsx'

class CharDisplay extends Component {
    render() {
        const { players } = this.props;
        return (
            <section id="display">
            {players.map(player => <Player key={1} player={player}/>)}
            </section>
        )
    }
}

export default CharDisplay;