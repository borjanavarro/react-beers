import React from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../components/Layout';
import BeerList from '../components/BeerList';
import Controls from '../components/Controls';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  let page = useQuery().get('page');

  return (
    <Layout>
      <Controls />
      <BeerList queryPage={page ? parseInt(page) : null}/>
    </Layout>
  )
};

export default Home;