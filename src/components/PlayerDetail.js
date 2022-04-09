import React from "react";
import TeamDetail from "./TeamDetail";

const PlayerDetail = ({firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamLogo, onTeamClick, teamClick, onStatsClick, statsClick, onHideClick, hideClick}) => {

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

    return (
        <div className="player-focus">
            <div className="player-team">
                <div className="player-box">
                    <h3>{firstName} {lastName}</h3>
                    <p>Team: <span className="team" onClick={handleTeamClick}>{team}</span><span id="arrow">&#10148;</span></p>
                    { position ? <p>Position: {position}</p> : null}
                    { heightFeet ? <p>Height: {heightFeet}'{heightInches}"</p> : null}
                    { weight ? <p>Weight: {weight}lbs</p> : null}
                    { statsClick ?
                    <p className="show-stats" onClick={handleStatsClick}>Hide player stats</p> :
                    <p className="show-stats" onClick={handleStatsClick}>View player stats</p> }
                </div>
                { teamClick ? 
                <TeamDetail team={team} conference={conference} division={division} teamLogo={teamLogo}/> : null }
            </div>
            { statsClick ? 
            <div className="stats">
                <h3>Season Averages - 2021/22 or last season played</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Stats</th>
                            <th>Stats</th>
                            <th>Stats</th>
                            <th>Stats</th>
                            <th>Stats</th>
                            <th>Stats</th>
                            <th>Stats</th>
                            <th>Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3.7</td>
                            <td>3.7</td>
                            <td>3.7</td>
                            <td>3.7</td>
                            <td>3.7</td>
                            <td>3.7</td>
                            <td>3.7</td>
                            <td>3.7</td>
                        </tr>
                    </tbody>
                </table>
                <p>Check out {firstName} {lastName}'s full NBA 75 profile on <a href="https:ww.nba.com/75/team" target="_blank">NBA.com</a></p>
            </div> : null }
            <p className="hide-player-detail" onClick={handleHideClick}>Hide player details</p>
        </div>
    );

}

export default PlayerDetail;