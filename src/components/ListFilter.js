import React from 'react';

const ListFilter = ({players, handlePlayerSearch, handleTeamSearch}) => {

    const onPlayerChange = (event) => {
        handlePlayerSearch(event.target.value);
    }

    const onTeamChange = (event) => {
        handleTeamSearch(event.target.value);
    }

    return (
        <>
            <h2 id="list-heading">The NBA 75</h2>
            <div id="search">
                {/* <p>Filter by TEAM / Search</p> */}
                <div className="search-category">
                    <label className="search-label">Search player names</label>
                    <input type="text" autoFocus onChange={onPlayerChange} />
                </div>
                <div className="search-category">
                    <label className="search-label">Search team names</label>
                    <input type="text" onChange={onTeamChange} />
                </div>
            </div>
        </>
    );

}

export default ListFilter;