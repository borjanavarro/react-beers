import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Home from '../pages/Home';
import Layout from '../components/Layout';
import Controls from '../components/Controls';
import BeerList from '../components/BeerList';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import Footer from '../components/Footer';

it('layout renders all components', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
});

it('home renders all components', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(Controls)).toHaveLength(1);
    expect(wrapper.find(BeerList)).toHaveLength(1);
    expect(wrapper.find(Pagination)).toHaveLength(1);
});

test('bbbbb', () => {
    

})