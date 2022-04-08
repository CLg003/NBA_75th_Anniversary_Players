import React from 'react';
import Player from './Player';

const PlayerList = ({players}) => {

    const playerNodes = players.map((player, index) => {
        return (
            <Player 
            key={index}
            id={player.data[0].id}
            listPosition={Number(index) + 1}
            firstName={player.data[0].first_name}  
            lastName={player.data[0].last_name} 
            position={player.data[0].position} 
            heightFeet={player.data[0].height_feet} 
            heightInches={player.data[0].height_inches} 
            weight={player.data[0].weight_pounds} 
            team={player.data[0].team.full_name} 
            conference={player.data[0].team.conference} 
            division={player.data[0].team.division}
            teamInit={player.data[0].team.abbreviation}
            />
        );
    });

    return (
        <>
            <h2>The NBA 75</h2>
            <ul id="player-list">
                {playerNodes}
            </ul>
        </>
    );

}

export default PlayerList;