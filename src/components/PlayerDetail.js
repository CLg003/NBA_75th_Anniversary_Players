import React from "react";
import TeamDetail from "./TeamDetail";
import StatsDetail from "./StatsDetail";
import ATL from "../images/teams/ATL.png";
import kareemAbdulJabbar from "../images/players/KareemAbdulJabbar.jpeg";
import rayAllen from "../images/players/RayAllen.jpeg";
import giannisAntetokounmpo from "../images/players/GiannisAntetokounmpo.jpeg";
import nateArchibald from "../images/players/NateArchibald.jpeg";
import charlesBarkley from "../images/players/CharlesBarkley.jpeg";
import larryBird from "../images/playersLarryBird/.jpeg";
import kobeBryant from "../images/players/KobeBryant.jpeg";
import stephenCurry from "../images/players/StephenCurry.jpeg";
import kevinDurant from "../images/players/KevinDurant.jpeg";
import kevinGarnett from "../images/players/KevinGarnett.jpeg";
import jamesHarden from "../images/players/JamesHarden.jpeg";
import allenIverson from "../images/players/AllenIverson.jpeg";
import leBronJames from "../images/players/LeBronJames.jpeg";
import magicJohnson from "../images/players/MagicJohnson.jpeg";
import michaelJordan from "../images/players/MichaelJordan.jpeg";
import damianLillard from "../images/players/DamianLillard.jpeg";
import reggieMiller from "../images/players/ReggieMiller.jpeg";
import steveNash from "../images/players/SteveNash.jpeg";
import dirkNowitzki from "../images/players/DirkNowitzki.jpeg";
import hakeemOlajuwon from "../images/players/HakeemOlajuwon.jpeg";
import shaquilleONeal from "../images/players/ShaquilleONeal.jpeg";
import chrisPaul from "../images/players/ChrisPaul.jpeg";
import scottiePippen from "../images/players/ScottiePippen.jpeg";
import dennisRodman from "../images/players/DennisRodman.jpeg";
import russellWestbrook from "../images/players/RussellWestbrook.jpeg";

const PlayerDetail = ({firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamLogo, onTeamClick, teamClick, onStatsClick, statsClick, onHideClick, hideClick, stats, selectedPlayer, players, index}) => {

    const playerImagesAll = [
        kareemAbdulJabbar, rayAllen, giannisAntetokounmpo, nateArchibald, charlesBarkley, larryBird, kobeBryant, stephenCurry, kevinDurant, kevinGarnett, jamesHarden, allenIverson, leBronJames, magicJohnson, michaelJordan, damianLillard, reggieMiller, steveNash, dirkNowitzki, hakeemOlajuwon, shaquilleONeal, chrisPaul, scottiePippen, dennisRodman, russellWestbrook
    ];

    const playerName = firstName + lastName;

    const playerImage = playerImagesAll.filter(image => {
        return image.toLowerCase().includes(playerName.toLowerCase().replace(/[^a-zA-z ]/g, ""));
    });

    const statNodes = stats.map((stat, index) => {
        return (
            <StatsDetail 
            key={index}
            playerId={stat.data[0].player_id}
            selectedPlayerId={selectedPlayer.data[0].id}
            firstName={firstName} 
            lastName={lastName}
            season={stat.data[0].season} 
            gamesPlayed={stat.data[0].games_played} 
            minsPerGame={stat.data[0].min} 
            pointsPerGame={stat.data[0].pts} 
            reboundsPerGame={stat.data[0].reb} 
            assistsPerGame={stat.data[0].ast} 
            stealsPerGame={stat.data[0].stl} 
            blocksPerGame={stat.data[0].blk} 
            foulsPerGame={stat.data[0].pf}
            />
        );
    });

    const handleTeamClick = function() {
        console.log("Team clicked")
        onTeamClick();
    }

    const handleStatsClick = function() {
        console.log("Stats clicked")
        onStatsClick();
    }

    const handleHideClick = function() {
        console.log("Hide clicked")
        onHideClick();
    }

    const altTag = `Image of ${firstName} ${lastName}`

    return (
        <div className="player-focus">
            <div className="player-team">
                <img src={playerImage} alt={altTag} />
                <div className="player-box">
                    <h3>{firstName} {lastName}</h3>
                    <p><strong>Team: </strong><span className="team" onClick={handleTeamClick}>{team}</span><span id="arrow">&#10148;</span></p>
                    { position ? <p><strong>Position: </strong>{position}</p> : null}
                    { heightFeet ? <p><strong>Height: </strong>{heightFeet}'{heightInches}"</p> : null}
                    { weight ? <p><strong>Weight: </strong>{weight}lbs</p> : null}
                    { statsClick ?
                    <p className="show-stats" onClick={handleStatsClick}>Hide player stats</p> :
                    <p className="show-stats" onClick={handleStatsClick}>View player stats</p> }
                </div>
                { teamClick ? 
                <TeamDetail team={team} conference={conference} division={division} teamLogo={teamLogo} /> : null }
            </div>
            { statsClick && selectedPlayer === players[index] ? <>{statNodes}</> : null }
            <p className="hide-player-detail" onClick={handleHideClick}>Hide player details</p>
        </div>
    );

}

export default PlayerDetail;