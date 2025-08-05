import gamesList from '../gamesList.json';
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

function GameDetails() {
  const [gameDetails, setGameDetails] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const selectedGame = gamesList.find(game => game.id === parseInt(id));
    setGameDetails(selectedGame || null);
  }, [id]);

  if (!gameDetails) {
    return <div className="loading">Loading game details...</div>;
  }

  return (
    <div className="game-details-container">
      <Link to="/games" className="back-button">Back to Games</Link>
      
      <div className="game-details-content">
        <div className="game-image-container">
          <img 
            src={gameDetails.image} 
            alt={`poster for ${gameDetails.name}`} 
            className="game-detail-image"
          />
        </div>
        
        <div className="game-info">
          <h1 className="game-title">{gameDetails.name}</h1>
          
          <div className="game-meta">
          
            <div className="meta-item">
              <span className="meta-label">Minimum Height:</span>
              <span className="meta-value">{gameDetails.minimum_height} cm</span>
            </div>
            
            <div className="meta-item">
              <span className="meta-label">Rating:</span>
              <span className={`meta-value rating ${gameDetails.rating.toLowerCase().replace(' ', '-')}`}>
                {gameDetails.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;