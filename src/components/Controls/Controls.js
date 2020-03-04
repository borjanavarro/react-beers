import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

const Controls = () => {
    const [searchString, setSearchString] = useState('');
    const history = useHistory();

    const handleSearchChange = (event) => {
        setSearchString(event.target.value);
    }

    const handleKeyPress = (event) => {
        if(searchString && event.key === 'Enter') {
            redirectToSearchPage();
        }
    }

    const handleClickButton = () => {
        if (searchString) {
            redirectToSearchPage();
        }
    }

    const redirectToSearchPage = () => {
        return history.push('/search?q=' + encodeURI(searchString));
    }

    return (
        <div id="controls">
            <div className="search-control">
                <input type="text" placeholder="Search" onChange={handleSearchChange} onKeyPress={handleKeyPress} />
                <button onClick={handleClickButton}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Controls;