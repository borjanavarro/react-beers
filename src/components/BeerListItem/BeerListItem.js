import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import favBeers from '../../customHooks/favBeers';
import {textEllipsis, onError} from '../../helpers/render-helpers';

const BeerListItem = (props) => {
  const { id, name, tagline, description, image_url } = props.item;
  const [isBeerFav, toggleBeerFav, favChanged, setFavChanged] = favBeers();
  const img = React.createRef();

  useEffect( () => {
    setFavChanged(false);
  }, [favChanged, setFavChanged]);

  const handleFavClick = (id) => {
      toggleBeerFav(id);
  }
  
  return (
    <div className="beer-item">
      <div className="fav-icon" onClick={() => { handleFavClick(id) }}>
        <i className={isBeerFav(id) ? 'fas fa-star' : 'far fa-star'}></i>
      </div>
      <div className="beer-image">
        <img src={image_url ? image_url : 'error'} alt={name} ref={img} onError={() => onError(img) } />
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