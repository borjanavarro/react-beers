import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import BeerListItem from '../BeerListItem';
import { fetchBeers } from '../../services/apiService';
import Pagination from '../Pagination';

import './styles.scss';

const  PER_PAGE = 6;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BeerList = () => {
  let queryParamPage = useQuery().get('page');
  queryParamPage = queryParamPage ? parseInt(queryParamPage) : 1;

  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(queryParamPage);
  const [hasNext, setHasNext] = useState(false);

  const getBeers = async (page, perPage) => {
    const beers = await fetchBeers(page, perPage);
    const nextItems = await fetchBeers(page + 1, perPage);
    setBeers(beers);
    nextItems && nextItems.length > 0 ? setHasNext(true) : setHasNext(false);
  };

  useEffect( () => {
    setPage(queryParamPage);
    getBeers(queryParamPage, PER_PAGE);
  }, [queryParamPage])

  if (!beers || beers.length === 0) {
    return (
      <div className="no-results">
        <h1>No results</h1>
      </div>
    );
  }

  return (
    <>
      <h1>All beers</h1>
      <div id="beer-list">
          {beers.map(beer => {
            return <BeerListItem key={beer.id} item={beer} />
          })}
      </div>
      <Pagination page={page} hasNext={hasNext} url={'/?'} />
    </>
  )
}

export default BeerList;