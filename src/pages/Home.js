import React from 'react';

import Layout from '../components/Layout';
import BeerList from '../components/BeerList';
import Controls from '../components/Controls';

const Home = () => {

  return (
    <Layout>
      <Controls />
      <BeerList />
    </Layout>
  )
};

export default Home;