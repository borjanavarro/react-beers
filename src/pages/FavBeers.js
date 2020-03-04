import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import Layout from '../components/Layout';

import { getBeersByIds } from '../services/apiService';
import favBeers from '../customHooks/favBeers';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { textEllipsis } from '../helpers/render-helpers';

const FavBeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [,,,, getAllFavBeers] = favBeers();

  const getBeers = useCallback(async (ids) => {
    const fetchedBeers = await getBeersByIds(ids);
    setBeers(fetchedBeers);
  }, []);

  useEffect ( () => {
    const ids = getAllFavBeers();
    getBeers(ids);
  }, [getBeers, getAllFavBeers]);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Layout>
        <h1>My fav beers</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {beers.map(beer => {
              const {id, image_url, name, tagline, description} = beer;

              return <div key={id}>
                        <div className="slide-container">
                          <div className="slide-img-container">
                            <img src={image_url} alt={name} className="slider-img"/>
                          </div>
                          <div className="slide-data-container">
                            <h2>{name}</h2>
                            <p>{tagline}</p>
                            <hr />
                            <p>{textEllipsis(description, 110)}</p>
                            <p className="see-more"><Link to={"/detail/" + id}>see more...</Link></p>
                          </div>
                        </div>
                      </div>
            })}
          </Slider>
        </div>
    </Layout>
  )
};

export default FavBeersPage;