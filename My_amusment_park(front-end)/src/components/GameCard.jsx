import React from 'react';
import { NavLink } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <NavLink to={`/games/${game.id}`} className="game-card-link">
      <div className='game-card'>
        <div className="game-image-container">
          <img className='card-images' 
            src={game.image} 
            alt={`${game.name}`}
          />
        </div>
        <h3 className="game-title">{game.name}</h3>
      </div>
    </NavLink>
  );
};

export default GameCard;