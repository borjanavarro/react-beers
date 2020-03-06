import React from 'react';

import Layout from '../components/Layout';
import Controls from '../components/Controls';
import SearchList from '../components/SearchList';

const SearchPage = () => {

  return (
    <Layout>
        <Controls />
        <SearchList />
    </Layout>
  )
};

export default SearchPage;