import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getBeersByIds } from '../../services/apiService';

import './styles.scss';

const Detail = () => {
    const { beerId } = useParams()
    const [beer, setBeer] = useState(null);
    let history = useHistory();

    const getBeer = useCallback(async (beerId) => {
        const fetchedBeer = await getBeersByIds([beerId]);
        setBeer(fetchedBeer[0]);
    }, []);

    useEffect( () => {
        getBeer(beerId);
    }, [getBeer, beerId]);

    const goBack = () => {
        history.goBack();
    };

    if (!beer) return "Loading...";

    return (
    <div className="detail">
        <h1>Beer detail</h1>
        <div className="main">
            <div className="img-container">
                <img src={beer.image_url} alt="Beer img"/>
            </div>
            <div className="data-container">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <hr />
                <p>{beer.description}</p>
                <p><b>Food pairing</b>: {beer.food_pairing.join(', ')}</p>
                <p><b>First brewed</b>: {beer.first_brewed}</p>
                <p className="back"><button type="button" onClick={goBack}>back</button></p>
            </div>
        </div>
    </div>
    )
}

export default Detail;