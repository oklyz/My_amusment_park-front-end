import gamesList from '../gamesList.json'
import GameCard from '../components/GameCard'

const Games=()=> {
  return (
    <>
    <h1>Game List</h1>
    <div className='games-container'>
      <div className='game-card'>
        {gamesList.map((game)=>(
          <GameCard game={game} key={game.id}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Games
