import React from 'react';
import { Link } from 'react-router-dom';
import { SearchPageProps } from '../../pages/Search/Search';

import './Card.css';
type CardProps = {
  location: SearchPageProps;
};

const Card: React.FC<CardProps> = ({ location }: CardProps) => {
  return (
    <div className="card-container">
      <Link to={`/location/${location.id}`}>
        <img src={location.picture} alt={location.location} />
        <div className="card-info">
          <h2>
            {location.title}, {location.location}
          </h2>
          <h3>€ {location.price} night</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
