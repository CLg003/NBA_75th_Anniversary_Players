import React from "react";

const PlayerDetail = ({firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamLogo}) => {

    let teamClick = false;

    const handleTeamClick = function(teamClick) {
        console.log("Team clicked")
        teamClick = true;
    }

    return (
        <div className="player-focus">
            <div className="player-team">
                <div className="player-box">
                    <h3>{firstName} {lastName}</h3>
                    <p>Team: <span className="team" onClick={handleTeamClick}>{team}</span><span id="arrow">&#10150;</span></p>
                    { position ? <p>Position: {position}</p> : null}
                    { heightFeet ? <p>Height: {heightFeet}'{heightInches}"</p> : null}
                    { weight ? <p>Weight: {weight}lbs</p> : null}
                    <p className="show-stats">View player stats</p>
                    <p className="show-stats">Hide player stats</p>
                </div>
                    <TeamDetail team={team} conference={conference} division={division} teamLogo={teamLogo}/>
                { teamClick ? <p>HELLO</p> : null }
                {/* <div className="team-box">
                    <div className="team-detail">
                    <h3>{team}</h3>
                    <p>{conference}ern conference</p>
                    <p>{division} division</p>
                    </div>
                </div> :
                null } */}
                { team === "Los Angeles Lakers" ? 
                <img className="team-logo-big" src={teamLogo} alt="Team logo" height="200px"/> : 
                <img className="team-logo-big" src={teamLogo} alt="Team logo" height="250px"/>}
            </div>
            {/* TO SHOW onStatsClick */}
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
            </div>
            <p className="hide-player-detail">Hide player details</p>
        </div>
    );

}

export default PlayerDetail;