import gamesList from '../gamesList.json'
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom'
function GameDetails() {

  const [gameDetails, setGameDetails] = useState('')
  let { id } = useParams()
  
  useEffect(() => {
  let selectedGame = gamesList.find(
    (gameDetails) => gameDetails.id === parseInt(id)
  )
  setGameDetails(selectedGame)
}, [])

  return (
  <div> 
    <div>
      <img src={gameDetails.image} alt={`poster for ${gameDetails.name}`} />
      </div>
    <h3>Price:{`${gameDetails.entry_price}$`}</h3>
      <h3>Minimum height:{`${gameDetails.minimum_height}cm`}</h3>
      <h3>Rating:{gameDetails.rating}</h3>
      </div>
      )
}

export default GameDetails;
