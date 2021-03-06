import React from "react";
import TeamDetail from "./TeamDetail";
import StatsDetail from "./StatsDetail";


const PlayerDetail = ({firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamLogo, onTeamClick, teamClick, onStatsClick, statsClick, onHideClick, hideClick, stats, selectedPlayer, players, index}) => {

    const playerName = (firstName + lastName).replace(/[^a-zA-Z ]/g, "");

    const playerImage = require(`../images/players/${playerName}.jpeg`);

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
                <img className="player-image" src={playerImage} alt={altTag} height="400px" />
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
            <div className="show-hide-buttons">
                {/* { statsClick ?
                <p className="show-stats" onClick={handleStatsClick}>Hide player stats</p> :
                <p className="show-stats" onClick={handleStatsClick}>View player stats</p> } */}
                <p className="hide-player-detail" onClick={handleHideClick}>Hide player details</p>
            </div>
        </div>
    );

}

export default PlayerDetail;