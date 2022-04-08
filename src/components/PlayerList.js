import React from 'react';
import Player from './Player';

const PlayerList = ({players}) => {

    // const playerNodes = players.map(player => {
    //     return <Player   />
    // })

    return (
        <ul id="player-list">
            <h2>The NBA "75"</h2>
            <Player />
        </ul>
    );

}

export default PlayerList;