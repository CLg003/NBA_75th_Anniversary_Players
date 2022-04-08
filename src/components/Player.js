import React from 'react';
import PlayerDetail from './PlayerDetail';

const Player = ({listPosition, firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamInit}) => {

    return (
        <>
            <li className="player-name">
                <h3>{listPosition}</h3>
                <img src="" alt="Team logo"/>
                <p>{firstName} {lastName}</p>
            </li>
            {/* + onPlayerClick={onPlayerClick} */}
            {/* { selectedPlayer ? <PlayerDetail player={selectedPlayer}/> : null} */}
            {/* <PlayerDetail player={selectedPlayer}/> */}
            <PlayerDetail 
            firstName={firstName} 
            lastName={lastName} 
            position={position} 
            heightFeet={heightFeet} 
            heightInches={heightInches} 
            weight={weight} 
            team={team} 
            conference={conference} 
            division={division} 
            teamInit={teamInit}
            />
        </>
    );

}

export default Player;