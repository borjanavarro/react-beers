import React, { useEffect, useState, useCallback } from 'react';

import BeerListItem from '../BeerListItem';
import { fetchBeers } from '../../services/apiService';
import Pagination from '../Pagination';

import './styles.scss';

const  PER_PAGE = 6;

const BeerList = ({queryPage}) => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(queryPage ? queryPage : 1);
  const [hasNext, setHasNext] = useState(false);

  /*
  const getBeers = useCallback(async (page, perPage) => {
    const beers = await fetchBeers(page, perPage);
    const nextItems = await fetchBeers(page + 1, perPage);
    setBeers(beers);
    nextItems.length > 0 ? setHasNext(true) : setHasNext(false);
  });*/

  const getBeers = async (page, perPage) => {
    const beers = await fetchBeers(page, perPage);
    const nextItems = await fetchBeers(page + 1, perPage);
    setBeers(beers);
    nextItems && nextItems.length > 0 ? setHasNext(true) : setHasNext(false);
  };

  useEffect( () => {
    getBeers(page, PER_PAGE);
  }, [page]);

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
      <Pagination page={page} setPage={setPage} hasNext={hasNext} url={'/?'} />
    </>
  )
}

export default BeerList;