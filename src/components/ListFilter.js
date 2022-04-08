import React from 'react';

const ListFilter = ({players, handlePlayerSearch}) => {

    const onChange = (event) => {
        handlePlayerSearch(event.target.value);
    }

    return (
        <div id="search">
            <p>Filter by TEAM / Search</p>
            <label id="search-label">Search players</label>
            <input type="text" onChange={onChange} />
        </div>
    );
}

export default ListFilter;