import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import favBeers from '../../customHooks/favBeers';
import {textEllipsis} from '../../helpers/render-helpers';

import errorImg from '../../img/beer.svg';

const BeerListItem = (props) => {
  const { item } = props;
  let { id, name, tagline, description, image_url } = item;
  const [isBeerFav, toggleBeerFav, favChanged, setFavChanged] = favBeers();
  const img = React.createRef();

  useEffect( () => {
    setFavChanged(false);
  }, [favChanged, setFavChanged]);

  const handleFavClick = (id) => {
      toggleBeerFav(id);
  }

  const onError = () => {
    img.current.src = errorImg;
    img.current.parentNode.classList.add('error');
  }
  
  return (
    <div className="beer-item">
      <div className="fav-icon" onClick={() => { handleFavClick(id) }}>
        <i className={isBeerFav(id) ? 'fas fa-star' : 'far fa-star'}></i>
      </div>
      <div className="beer-image">
        <img src={image_url ? image_url : 'error'} alt={name} ref={img} onError={onError} />
      </div>
      <div className="beer-item-content">
        <h2>{name}</h2>
        <h4>{tagline}</h4>
        <hr />
        <p>{textEllipsis(description, 110)}</p>
        <p className="see-more"><Link to={"/detail/" + id}>see more...</Link></p>
      </div>
    </div>
  )
}

export default BeerListItem;