import React from 'react';
import Intro from '../components/Intro';
import ListFilter from '../components/ListFilter';
import PlayerList from '../components/PlayerList';


const Nba75 = () => {
    

    return (
        <div id="nba-75">
            <h1>NBA75</h1>
            <Intro />
            <ListFilter />
            <PlayerList />
        </div>
    );
}

export default Nba75;