import React from "react";

const PlayerDetail = ({firstName, lastName, position, heightFeet, heightInches, weight, team, conference, division, teamInit}) => {

    const teamLogo = teamInit + ".png"

    return (
        <div className="player-click">
            <div className="player-team">
                <div className="player-detail">
                    <h3>{firstName} {lastName}</h3>
                    <p>Team: <span className="team">{team}</span></p>
                    { position ? <p>Position: {position}</p> : null}
                    { heightFeet ? <p>Height: {heightFeet}'{heightInches}"</p> : null}
                    { weight ? <p>Weight: {weight}lbs</p> : null}
                    <p className="show-stats">Show last season stats</p>
                </div>
                {/* TO SHOW onTeamClick */}
                <div className="team-detail">
                    <h3>{team}</h3>
                    <p>{conference}ern conference</p>
                    <p>{division} division</p>
                </div>
                <img src={teamLogo} alt="Team logo"/>
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
                <p>Read {firstName} {lastName}'s full NBA 75 profile at <a href="https://www.nba.com/75/team" target="_blank">NBA.com</a></p>
            </div>
        </div>
    );

}

export default PlayerDetail;