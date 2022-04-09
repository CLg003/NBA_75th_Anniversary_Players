import React from 'react';
import PlayerDetail from './PlayerDetail';
import teamLogo from "../images/teams/LAL.png";

const Player = ({listPosition, firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamInit}) => {

    // const teamLogos = require.context('../images/teams');
    // const teamLogoIndex = teamLogos.indexOf(`${teamInit}.png`);
    // const teamLogo = teamLogos[teamLogoIndex];


    // const [ATL, BKS, BKN, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS] = teamLogos;

    // const teamLogo = teamLogos.indexOf(teamInit)

    // const teamLogo = "./images/teams/" + teamInit + ".png";
    // const teamLogo = "../images/teams/LAL.png";
    // const teamLogo = teamLogos[indexOf(teamInit)];

    return (
        <>
            <li className="player-name">
                <h3>{listPosition}</h3>
                <img className="team-logo-small" src={teamLogo} alt="Team logo" height="40px"/>
                <p>{firstName} {lastName}</p>
                <p>{teamLogo}</p>
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
            teamLogo={teamLogo}
            />
        </>
    );

}

export default Player;