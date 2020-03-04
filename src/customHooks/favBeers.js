import { useState } from 'react';

import localStorage from '../services/localStorage';

const FavBeers = () => {
    const [favChanged, setFavChanged] = useState(false);

    const isBeerFav = (id) => {
        const beersFavs = localStorage.getItem('beersFav');
        return beersFavs[id] === true ? true : false;
    }

    const toggleBeerFav = (id) => {
        const beersFavs = localStorage.getItem('beersFav');

        if (beersFavs[id] === true) {
            localStorage.setItem('beersFav', id, false);
        } else {
            localStorage.setItem('beersFav', id, true)
        }

        setFavChanged(true);
    }

    const getAllFavBeers = () => {
        const ids = [];
        const beersFavs = localStorage.getItem('beersFav');

        for ( const elem in beersFavs) {
            if ( beersFavs[elem] ) {
            ids.push(elem);
            }
        }

        return ids;
    }

    return [isBeerFav, toggleBeerFav, favChanged, setFavChanged, getAllFavBeers];
}

export default FavBeers;