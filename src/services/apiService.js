import axios from 'axios';

const BASE_URL = 'https://api.punkapi.com/v2';

function fetchBeers(page, perPage) {
    return axios.get(`${BASE_URL}/beers?page=${page}&per_page=${perPage}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        // return error;
        alert ("Ha habido un error");
    });
}

function searchBeersByString(searchString, page, perPage) {
    return axios.get(`${BASE_URL}/beers?beer_name=${searchString}&page=${page}&per_page=${perPage}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        // return error;
        alert ("Ha habido un error");
    });
}

function getBeersByIds(ids) {
    const idString = ids.join('|');

    return axios.get(`${BASE_URL}/beers?ids=${idString}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        // return error;
        alert ("Ha habido un error");
    });
}

export {
    fetchBeers,
    searchBeersByString,
    getBeersByIds
}