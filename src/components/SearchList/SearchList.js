import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { searchBeersByString } from '../../services/apiService';
import SearchListItem from '../SearchListItem';

import './styles.scss';
import Pagination from '../Pagination/Pagination';

const PER_PAGE = 10;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchList = () => {
    let searchString = useQuery().get('q');
    let queryParamPage = useQuery().get('page');
    queryParamPage = queryParamPage ? parseInt(queryParamPage) : 1;

    const [page, setPage] = useState(queryParamPage);
    const [hasNext, setHasNext] = useState(false);
    const [items, setItems] = useState([]);

    useEffect( () => {
        getSearchItems(searchString, queryParamPage, PER_PAGE);
    }, [searchString, queryParamPage]);

    useEffect( () => {
        setPage(queryParamPage);
    }, [queryParamPage]);
    
    async function getSearchItems(searchString, page, perPage) {
        const items = await searchBeersByString(searchString, page, perPage);
        const nextItems = await searchBeersByString(searchString, page + 1, perPage);
        setItems(items);
        nextItems && nextItems.length > 0 ? setHasNext(true) : setHasNext(false);
    }

    const getSubtitle = (items, page, hasNext) => {
        const firstElementNumber = PER_PAGE * (page - 1) + 1;
        const lastElementNumber = hasNext ? PER_PAGE * page : firstElementNumber + items.length - 1;
        
        return 'Showing from ' + firstElementNumber + ' to ' + lastElementNumber + ' result(s)';
    }

    if (!searchString) {
        return (
            <div className="no-results">
                <h1>Try typing something...</h1>
            </div>
        )
    }

    if (!items || items.length === 0) {
        return (
            <div className="no-results">
                <h1>No results</h1>
            </div>
        )
    }

    return (
        <>
        <div className="search-list">
            <h1>Results for: <i>"{searchString}"</i></h1>
            <h3>{getSubtitle(items, page, hasNext)}</h3>
            {items.map(item => {
                return <SearchListItem key={item.id} elem={item} />
            })}
        </div>
        <Pagination page={page} hasNext={hasNext} url={'/search?q=' + searchString + '&'}/>
        </>
    )
};

export default SearchList;