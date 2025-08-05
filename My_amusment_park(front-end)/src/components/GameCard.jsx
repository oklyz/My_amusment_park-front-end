import React from 'react'
import {NavLink} from 'react-router-dom'

const GameCard=({game})=> {
  return (
    <div>
      <div>
      <img src={game.image} alt={`poster for ${game.name}`} />
      </div>
      <h3>Price:{`${game.entry_price}$`}</h3>
      <h3>Minimum height:{`${game.minimum_height}cm`}</h3>
      <h3>Rating:{game.rating}</h3>
    </div>
  )
}

export default GameCard
