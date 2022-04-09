import React from "react";
// import PlayerDetail from "./PlayerDetail";
// import teamLogo from PlayerDetail;

const TeamDetail = ({team, conference, division, teamLogo}) => {

    return (
        <>
            <div className="team-box">
                <div className="team-detail">
                    <h3>{team}</h3>
                    <p>{conference}ern conference</p>
                    <p>{division} division</p>
                </div>
            </div>
            { team === "Los Angeles Lakers" ? 
            <img className="team-logo-big" src={teamLogo} alt="Team logo" height="200px"/> : 
            <img className="team-logo-big" src={teamLogo} alt="Team logo" height="250px"/>}
        </>
    );

}

export default TeamDetail;