import gamesList from '../gamesList.json'
import GameCard from '../components/GameCard'
import { Link } from 'react-router-dom'
const Games=()=> {
  return (
    <>
    <h1>Game List</h1>
    <div className='games-container'>
      <div className='game-card'>
        
        {gamesList.map((game)=>(<Link to={`${game.id}`}>
          <GameCard game={game} key={game.id}/>
        </Link>))}
      </div>
    </div>
    </>
  )
}

export default Games
