import React from 'react';
import{useLocation} from 'react-router-dom';

import Layout from '../components/Layout';
import Controls from '../components/Controls';
import SearchList from '../components/SearchList';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
  let searchString = useQuery().get('q');
  let page = useQuery().get('page');

  return (
    <Layout>
        <Controls />
        <SearchList searchString={searchString} queryPage={page ? parseInt(page): null} />
    </Layout>
  )
};

export default SearchPage;