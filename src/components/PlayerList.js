import React from 'react';
import Player from './Player';

const PlayerList = ({players}) => {

    const playerNodes = players.map(player => {
        return <Player key={player.data[0].id} name={player.data[0].first_name + " " + player.data[0].last_name} height={player.data[0].height_feet + "\' " + player.data[0].height_inches + "\""}/>
    })

    return (
        <>
            <h2>The NBA "75"</h2>
            <ul id="player-list">
                {playerNodes}
            </ul>
        </>
    );

}

export default PlayerList;