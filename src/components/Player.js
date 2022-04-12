import React from 'react';
import PlayerDetail from './PlayerDetail';


const Player = ({index, id, listPosition, firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamInit, onPlayerClick, selectedPlayer, players, onTeamClick, teamClick, onStatsClick, statsClick, onHideClick, hideClick, stats}) => {

    const teamLogo = require(`../images/teams/${teamInit}.png`);

    const handleClick = function() {
        onPlayerClick(index);
        console.log(`Clicked on ${firstName} ${lastName}`);
        console.log({index});
    }

    return (
        <>
            <li className="player-name">
                <h3>{listPosition}</h3>
                <div className="list-logo">
                    { team === "Los Angeles Lakers" ? 
                    <img className="team-logo-small" src={teamLogo} alt="Team logo" height="30px"/> : 
                    <img className="team-logo-small" src={teamLogo} alt="Team logo" height="40px"/>}
                </div>
                <p value={index} onClick={handleClick}>{firstName} {lastName}</p>
            </li>

            { !hideClick && selectedPlayer === players[index] ?             
            <PlayerDetail 
            key={index}
            id={id}
            firstName={firstName} 
            lastName={lastName} 
            position={position} 
            heightFeet={heightFeet} 
            heightInches={heightInches} 
            weight={weight} 
            team={team} 
            conference={conference} 
            division={division} 
            teamLogo={teamLogo} 
            onTeamClick={onTeamClick} 
            teamClick={teamClick} 
            onStatsClick={onStatsClick} 
            statsClick={statsClick} 
            onHideClick={onHideClick} 
            hideClick={hideClick} 
            stats={stats} 
            players={players} 
            selectedPlayer={selectedPlayer}
            index={index}
            /> : null }
            
        </>
    );

}

export default Player;