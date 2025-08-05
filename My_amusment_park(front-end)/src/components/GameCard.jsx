import React from 'react'
import {NavLink} from 'react-router-dom'

const GameCard=({game})=> {
  return (
    <div>
      <div>
      <img src={game.image} alt={`poster for ${game.name}`} />
      </div>
      <h2>{game.name}</h2>
    </div>
  )
}

export default GameCard
