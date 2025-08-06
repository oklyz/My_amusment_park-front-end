import gamesList from '../gamesList.json';
import GameCard from '../components/GameCard';


const Games = () => {
  return (
    <div className='background-container'>
      <div className="games-page">
        <h1 className="games-title">Game List</h1>
        <div className="games-grid">
          {gamesList.map((game) => (
            <GameCard 
              game={game} 
              key={game.id}
              to={`/games/${game.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;