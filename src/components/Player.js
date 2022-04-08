import React from 'react';

const Player = ({name, height}) => {

    return (
        <li className="player-name">
            <img src="" alt="Team logo"/>
            <p>{name} {height}</p>
        </li>
    );

}

export default Player;