import React from 'react';
import PlayerDetail from './PlayerDetail';
import ATL from "../images/teams/ATL.png";
import BOS from "../images/teams/BOS.png";
import BKN from "../images/teams/BKN.png";
import CHA from "../images/teams/CHA.png";
import CHI from "../images/teams/CHI.png";
import CLE from "../images/teams/CLE.png";
import DAL from "../images/teams/DAL.png";
import DEN from "../images/teams/DEN.png";
import DET from "../images/teams/DET.png";
import GSW from "../images/teams/GSW.png";
import HOU from "../images/teams/HOU.png";
import IND from "../images/teams/IND.png";
import LAC from "../images/teams/LAC.png";
import LAL from "../images/teams/LAL.png";
import MEM from "../images/teams/MEM.png";
import MIA from "../images/teams/MIA.png";
import MIL from "../images/teams/MIL.png";
import MIN from "../images/teams/MIN.png";
import NOP from "../images/teams/NOP.png";
import NYK from "../images/teams/NYK.png";
import OKC from "../images/teams/OKC.png";
import ORL from "../images/teams/ORL.png";
import PHI from "../images/teams/PHI.png";
import PHX from "../images/teams/PHX.png";
import POR from "../images/teams/POR.png";
import SAC from "../images/teams/SAC.png";
import SAS from "../images/teams/SAS.png";
import TOR from "../images/teams/TOR.png";
import UTA from "../images/teams/UTA.png";
import WAS from "../images/teams/WAS.png";


const Player = ({index, id, listPosition, firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamInit, onPlayerClick, selectedPlayer, players}) => {

    const teamLogoImages = [ATL, BOS, BKN, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS];
   
    const teamLogo = teamLogoImages.filter(image => {
        return image.includes(teamInit);
    });

    const handleClick = function() {
        onPlayerClick(index);
        console.log(`Clicked on ${firstName} ${lastName}`);
        console.log({index});
    }

    return (
        <>
            <li className="player-name">
                <h3>{listPosition}</h3>
                { team === "Los Angeles Lakers" ? 
                <img className="team-logo-small" src={teamLogo} alt="Team logo" height="30px"/> : 
                <img className="team-logo-small" src={teamLogo} alt="Team logo" height="40px"/>}
                <p value={index} onClick={handleClick}>{firstName} {lastName}</p>
                {/* {selectedPlayer ? <h2>SELECTED PLAYER: {selectedPlayer.data[0].id}</h2> : null} */}
            </li>

            { selectedPlayer === players[index] ?             
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
            /> : null }
        </>
    );

}

export default Player;