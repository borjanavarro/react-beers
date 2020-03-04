import React from 'react';
import { Link } from 'react-router-dom';

import {textEllipsis} from '../../helpers/render-helpers';

const SearchListItem = (props) => {
  const { elem } = props;
  const { id, name, tagline, description } = elem;
  
  return (
    <div className="search-item">
        <h2>{name}</h2>
        <h4>{tagline}</h4>
        <hr />
        <p>{textEllipsis(description, 220)}</p>
        <p className="see-more"><Link to={'/detail/' + id }>see more...</Link></p>
    </div>
  )
}

export default SearchListItem;