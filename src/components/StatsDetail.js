import React from 'react';

const StatsDetail = ({playerId, selectedPlayerId, firstName, lastName, season, gamesPlayed, minsPerGame, pointsPerGame, reboundsPerGame, assistsPerGame, stealsPerGame, blocksPerGame, foulsPerGame}) => {
    if (playerId === selectedPlayerId) {
        return (
            <div className="stats">
                <h3>{season}-{Number(season) + 1} Season Averages (last season played)</h3>
                <table>
                    <thead>
                        <tr>
                            <th className="th-games-played">Games Played</th>
                            <th>MPG</th>
                            <th>PPG</th>
                            <th>RPG</th>
                            <th>APG</th>
                            <th>SPG</th>
                            <th>BPG</th>
                            <th>FPG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{gamesPlayed}</td>
                            <td>{minsPerGame}</td>
                            <td>{pointsPerGame}</td>
                            <td>{reboundsPerGame}</td>
                            <td>{assistsPerGame}</td>
                            <td>{stealsPerGame}</td>
                            <td>{blocksPerGame}</td>
                            <td>{foulsPerGame}</td>
                        </tr>
                    </tbody>
                </table>
                <p className="stats-key"><em>MPG: mins per game, PPG: points per game, RPG: rebounds per game, APG: assists per game, SPG: steals per game, BPG: blocks per game, FPG: fouls per game</em></p>
                <p>Check out {firstName} {lastName}'s full NBA 75 profile on <a href="https:ww.nba.com/75/team" target="_blank">NBA.com</a></p>
            </div>
        );
    }
}

export default StatsDetail;