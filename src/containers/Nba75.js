import React, {useState, useEffect} from 'react';
import Intro from '../components/Intro';
import ListFilter from '../components/ListFilter';
import PlayerList from '../components/PlayerList';
// import PlayerDetail from '../components/PlayerDetail';

const Nba75 = () => {

    // DUE TO 60 REQUESTS PER MINUTE MAX, NOW REDUCED TO NBA25 PLAYER LIST:
    const playersToFetch = ["Kareem Abdul-Jabbar", 
    "Ray Allen", 
    "Giannis Antetokounmpo", 
    "Charles Barkley", 
    "Larry Bird", 
    "Kobe Bryant", 
    "Wilt Chamberlain", "Stephen Curry", "Patrick Ewing", "James Harden", "Allen Iverson", "LeBron James", "Magic Johnson", "Michael Jordan", "Damian Lillard", "Jerry Lucas", "Reggie Miller", "Steve Nash", "Dirk Nowitzki", "Hakeem Olajuwon", "Shaquille O'Neal", "Chris Paul", "Scottie Pippen", "Dennis Rodman", "Russell Westbrook"];

    // SHORT LIST TO USE FOR REPEATED REQUESTS WHILE WRITING CODE:
    // const playersToFetch = ["Giannis Antetokounmpo", "Kobe Bryant", "Stephen Curry", "Michael Jordan", "Russell Westbrook"];

    // ORIGINAL NBA75 PLAYER LIST:
    // const playersToFetch = ["Kareem Abdul-Jabbar", "Ray Allen", "Giannis Antetokounmpo", "Carmelo Anthony", "Nate Archibald", "Paul Arizin", "Charles Barkley", "Rick Barry", "Elgin Baylor", "Dave Bing", "Larry Bird", "Kobe Bryant", "Wilt Chamberlain", "Bob Cousy", "Dave Cowens", "Billy Cunningham", "Stephen Curry", "Anthony Davis", "Dave DeBusschere", "Clyde Drexler", "Tim Duncan", "Kevin Durant", "Julius Erving", "Patrick Ewing", "Walt Frazier", "Kevin Garnett", "George Gervin", "Hal Greer", "James Harden", "John Havlicek", "Elvin Hayes", "Allen Iverson", "LeBron James", "Magic Johnson", "Sam Jones", "Michael Jordan", "Jason Kidd", "Kawhi Leonard", "Damian Lillard", "Jerry Lucas", "Karl Malone", "Moses Malone", "Pete Maravich", "Bob McAdoo", "Kevin McHale", "George Mikan", "Reggie Miller", "Earl Monroe", "Steve Nash", "Dirk Nowitzki", "Hakeem Olajuwon", "Shaquille O'Neal", "Robert Parish", "Chris Paul", "Gary Payton", "Bob Pettit", "Paul Pierce", "Scottie Pippen", "Willis Reed", "Oscar Robertson", "David Robinson", "Dennis Rodman", "Bill Russell", "Dolph Schayes", "Bill Sharman", "John Stockton", "Isiah Thomas", "Nate Thurmond", "Wes Unseld", "Dwyane Wade", "Bill Walton", "Jerry West", "Russell Westbrook", "Lenny Wilkens", "Dominique Wilkins", "James Worthy"];

    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    // const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handlePlayerSearch = (search) => {
        const playersAfterSearch = players.filter(player => {
            return (
                player.data[0].first_name.toLowerCase().includes(search.toLowerCase()) || 
                player.data[0].last_name.toLowerCase().includes(search.toLowerCase())
            );
        });
        setFilteredPlayers(playersAfterSearch);
    }

    useEffect(() => {fetchPlayers()}, []);

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

    // const onPlayerClick = function(player) {
    //     setSelectedPlayer(player);
    // }

    return (
        <div id="nba-75">
            <h1>NBA 75</h1>
            <Intro />
            <ListFilter players={filteredPlayers} handlePlayerSearch={handlePlayerSearch}/>
            <PlayerList players={filteredPlayers}/>
            {/* + onPlayerClick={onPlayerClick} */}
            {/* { selectedPlayer ? <PlayerDetail player={selectedPlayer}/> : null} */}
            {/* <PlayerDetail player={selectedPlayer}/> */}
        </div>
    );

}

export default Nba75;