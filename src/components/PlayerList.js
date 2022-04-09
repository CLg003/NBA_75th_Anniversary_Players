import React from 'react';
import Player from './Player';
import StatsDetail from './StatsDetail';

const PlayerList = ({players, onPlayerClick, selectedPlayer, onTeamClick, teamClick, onStatsClick, statsClick, onHideClick, hideClick, stats}) => {

    const playerNodes = players.map((player, index) => {
        return (
            <Player 
            key={index} 
            index={index} 
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
            onPlayerClick={onPlayerClick} 
            selectedPlayer={selectedPlayer} 
            players={players}
            onTeamClick={onTeamClick} 
            teamClick={teamClick} 
            onStatsClick={onStatsClick} 
            statsClick={statsClick} 
            onHideClick={onHideClick} 
            hideClick={hideClick} 
            stats={stats}
            />
        );
    });

    return (
        <>
            <ul id="player-list">
                {playerNodes}
            </ul>
        </>
    );

}

export default PlayerList;