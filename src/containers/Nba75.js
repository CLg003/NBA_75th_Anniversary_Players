import React, {useState, useEffect} from 'react';
import Intro from '../components/Intro';
import ListFilter from '../components/ListFilter';
import PlayerList from '../components/PlayerList';
// import PlayerDetail from '../components/PlayerDetail';
import nbaLogo from '../images/nba_logo.png';
import nba75Logo from '../images/nba_75_logo.jpeg';

const Nba75 = () => {

    // DUE TO 60 REQUESTS PER MINUTE MAX, NOW REDUCED TO NBA25 PLAYER LIST:
    // const playersToFetch = [
    //     "Kareem Abdul-Jabbar", "Ray Allen", "Giannis Antetokounmpo", "Charles Barkley", "Larry Bird", "Kobe Bryant", "Stephen Curry", "Kevin Durant", "Patrick Ewing", "Walt Frazier", "James Harden", "Allen Iverson", "LeBron James", "Magic Johnson", "Michael Jordan", "Damian Lillard", "Reggie Miller", "Steve Nash", "Dirk Nowitzki", "Hakeem Olajuwon", "Shaquille O'Neal", "Chris Paul", "Scottie Pippen", "Dennis Rodman", "Russell Westbrook"
    // ];

    // SHORT LIST TO USE FOR REPEATED REQUESTS WHILE WRITING CODE:
    const playersToFetch = ["Giannis Antetokounmpo", "Kobe Bryant", "Stephen Curry", "Michael Jordan", "Russell Westbrook"];

    // ORIGINAL NBA75 PLAYER LIST:
    // const playersToFetch = ["Kareem Abdul-Jabbar", "Ray Allen", "Giannis Antetokounmpo", "Carmelo Anthony", "Nate Archibald", "Paul Arizin", "Charles Barkley", "Rick Barry", "Elgin Baylor", "Dave Bing", "Larry Bird", "Kobe Bryant", "Wilt Chamberlain", "Bob Cousy", "Dave Cowens", "Billy Cunningham", "Stephen Curry", "Anthony Davis", "Dave DeBusschere", "Clyde Drexler", "Tim Duncan", "Kevin Durant", "Julius Erving", "Patrick Ewing", "Walt Frazier", "Kevin Garnett", "George Gervin", "Hal Greer", "James Harden", "John Havlicek", "Elvin Hayes", "Allen Iverson", "LeBron James", "Magic Johnson", "Sam Jones", "Michael Jordan", "Jason Kidd", "Kawhi Leonard", "Damian Lillard", "Jerry Lucas", "Karl Malone", "Moses Malone", "Pete Maravich", "Bob McAdoo", "Kevin McHale", "George Mikan", "Reggie Miller", "Earl Monroe", "Steve Nash", "Dirk Nowitzki", "Hakeem Olajuwon", "Shaquille O'Neal", "Robert Parish", "Chris Paul", "Gary Payton", "Bob Pettit", "Paul Pierce", "Scottie Pippen", "Willis Reed", "Oscar Robertson", "David Robinson", "Dennis Rodman", "Bill Russell", "Dolph Schayes", "Bill Sharman", "John Stockton", "Isiah Thomas", "Nate Thurmond", "Wes Unseld", "Dwyane Wade", "Bill Walton", "Jerry West", "Russell Westbrook", "Lenny Wilkens", "Dominique Wilkins", "James Worthy"];

    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [teamClick, setTeamClick] = useState(false);
    const [statsClick, setStatsClick] = useState(false);
    const [hideClick, setHideClick] = useState(false);


    useEffect(() => {fetchPlayers()}, []);
    useEffect(() => {setSelectedPlayer(null)}, [hideClick]);
    useEffect(() => {setTeamClick(false)}, [selectedPlayer]);
    useEffect(() => {setStatsClick(false)}, [selectedPlayer]);
    useEffect(() => {setHideClick(false)}, [selectedPlayer]);

    const fetchPlayers = () => {
        const playerRequests = playersToFetch.map(player => {
            return fetch(`https://www.balldontlie.io/api/v1/players?search=${player}`)
            .then(response => response.json());
        });
        Promise.all(playerRequests)
        .then(data => {
            setPlayers(data);
            setFilteredPlayers(data);
        });
    }

    const handlePlayerSearch = (search) => {
        const playersAfterSearch = players.filter(player => {
            return (
                player.data[0].first_name.toLowerCase().includes(search.toLowerCase()) || 
                player.data[0].last_name.toLowerCase().includes(search.toLowerCase())
            );
        });
        setFilteredPlayers(playersAfterSearch);
    }

    const handleTeamSearch = (search) => {
        const playersAfterSearch = players.filter(player => {
            return (
                player.data[0].team.full_name.toLowerCase().includes(search.toLowerCase())
            );
        });
        setFilteredPlayers(playersAfterSearch);
    }

    const onPlayerClick = function(index) {
        const playerToSelect = players[index];
        setSelectedPlayer(playerToSelect);
    }

    const onTeamClick = function() {
        const newTeamClickStatus = true;
        setTeamClick(newTeamClickStatus);
    }

    const onStatsClick = function() { 
        statsClick ? setStatsClick(false) : setStatsClick(true)
    }

    const onHideClick = function() { 
        hideClick ? setHideClick(false) : setHideClick(true)
    }

    return (
        <div id="nba-75">
            <header>
                <img id="nba-75-logo" src={nba75Logo} alt="NBA 75 logo" height="250px"/>
                <h1>NBA 75</h1>
                <img id="nba-logo" src={nbaLogo} alt="NBA logo" height="200px"/>
            </header>
            { selectedPlayer ? <><p>{selectedPlayer.data[0].first_name}</p> <p>{selectedPlayer.data[0].id}</p></> : null} 
            <Intro />
            <ListFilter players={filteredPlayers} handlePlayerSearch={handlePlayerSearch} handleTeamSearch={handleTeamSearch}/>
            <PlayerList players={filteredPlayers} onPlayerClick={onPlayerClick} selectedPlayer={selectedPlayer} onTeamClick={onTeamClick} teamClick={teamClick}onStatsClick={onStatsClick} statsClick={statsClick} onHideClick={onHideClick} hideClick={hideClick}/>

        </div>
    );

}

export default Nba75;