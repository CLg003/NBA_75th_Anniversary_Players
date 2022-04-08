import React, {useState, useEffect} from 'react';
import Intro from '../components/Intro';
import ListFilter from '../components/ListFilter';
import PlayerList from '../components/PlayerList';


const Nba75 = () => {

    // DUE TO 60 REQUESTS PER MINUTE MAX, NOW REDUCED TO NBA25 LIST:
    // const playersToFetch = ["Kareem Abdul-Jabbar", "Ray Allen", "Giannis Antetokounmpo", "Charles Barkley", "Larry Bird", "Kobe Bryant", "Wilt Chamberlain", "Stephen Curry", "Patrick Ewing", "James Harden", "Allen Iverson", "LeBron James", "Magic Johnson", "Michael Jordan", "Damian Lillard", "Jerry Lucas", "Reggie Miller", "Steve Nash", "Dirk Nowitzki", "Hakeem Olajuwon", "Shaquille O'Neal", "Chris Paul", "Scottie Pippen", "Dennis Rodman", "Russell Westbrook"];

    // SHORT LIST TO USE FOR REPEATED REQUESTS WHILE WRITING CODE:
    const playersToFetch = ["Giannis Antetokounmpo", "Kobe Bryant", "Stephen Curry", "Michael Jordan", "Russell Westbrook"];

    // ORIGINAL NBA75 PLAYER LIST:
    // const playersToFetch = ["Kareem Abdul-Jabbar", "Ray Allen", "Giannis Antetokounmpo", "Carmelo Anthony", "Nate Archibald", "Paul Arizin", "Charles Barkley", "Rick Barry", "Elgin Baylor", "Dave Bing", "Larry Bird", "Kobe Bryant", "Wilt Chamberlain", "Bob Cousy", "Dave Cowens", "Billy Cunningham", "Stephen Curry", "Anthony Davis", "Dave DeBusschere", "Clyde Drexler", "Tim Duncan", "Kevin Durant", "Julius Erving", "Patrick Ewing", "Walt Frazier", "Kevin Garnett", "George Gervin", "Hal Greer", "James Harden", "John Havlicek", "Elvin Hayes", "Allen Iverson", "LeBron James", "Magic Johnson", "Sam Jones", "Michael Jordan", "Jason Kidd", "Kawhi Leonard", "Damian Lillard", "Jerry Lucas", "Karl Malone", "Moses Malone", "Pete Maravich", "Bob McAdoo", "Kevin McHale", "George Mikan", "Reggie Miller", "Earl Monroe", "Steve Nash", "Dirk Nowitzki", "Hakeem Olajuwon", "Shaquille O'Neal", "Robert Parish", "Chris Paul", "Gary Payton", "Bob Pettit", "Paul Pierce", "Scottie Pippen", "Willis Reed", "Oscar Robertson", "David Robinson", "Dennis Rodman", "Bill Russell", "Dolph Schayes", "Bill Sharman", "John Stockton", "Isiah Thomas", "Nate Thurmond", "Wes Unseld", "Dwyane Wade", "Bill Walton", "Jerry West", "Russell Westbrook", "Lenny Wilkens", "Dominique Wilkins", "James Worthy"];

    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {fetchPlayers()}, []);
    useEffect(() => {fetchTeams()}, []);

    const fetchPlayers = () => {
        const playerRequests = playersToFetch.map(player => {
            return fetch(`https://www.balldontlie.io/api/v1/players?search=${player}`)
            .then(response => response.json());
    });
        Promise.all(playerRequests)
        // .then(playerRequests => Promise.all(playerRequests.map(request => request.json())))
        .then(data => setPlayers(data));
    }

    const fetchTeams = () => {
        fetch("https://www.balldontlie.io/api/v1/teams")
        .then(response => response.json())
        .then(data => setTeams(data.data));
    }

    return (
        <div id="nba-75">
            <h1>NBA75</h1>
            <p>{playersToFetch.length}</p>
            <Intro />
            <ListFilter players={players}/>
            <PlayerList players={players}/>
        </div>
    );
}

export default Nba75;