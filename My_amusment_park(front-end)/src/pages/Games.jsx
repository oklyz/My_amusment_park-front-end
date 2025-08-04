import gamesList from '../gamesList.json'
import GameCard from '../components/GameCard'

const Games=()=> {
  return (
    <div>
      <h1>Game List</h1>
      <div>
        {gamesList.map((game)=>(
          <GameCard game={game} key={game.id}/>
        ))}
      </div>
    </div>
  )
}

export default Games
