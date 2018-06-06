import React, { Component } from 'react';

class Player extends Component {
    render() {
        const { effects } = this.props.player;
        const { name } = this.props.player;
        return (
            <div className="player">
                <div className="charName">
                    <p>
                    {this.props.player.name}
                    </p>
                </div>
                <div className="effectDisplay">
                    {effects.map(effect => <div key={name + Object.keys(effect)[0]} style={{width: (effect[Object.keys(effect)[0]] * 50) + "px", display: effect[Object.keys(effect)[0]] ? null : "none"}} className={Object.keys(effect)[0]}>{Object.keys(effect)[0]}</div>)}
                </div>
            </div>
        )
    }
}

export default Player