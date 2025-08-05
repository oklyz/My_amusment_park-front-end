import React from "react";

const ServicesCard=({service})=> {
  return( <div>
    <div>
      <img src={service.image} alt={`poster for ${service.name}`} />
    </div>
  <h2>Name:{service.name}</h2>
  <p>Description:{service.description}</p>
  <h3>Price:{service.cost}</h3>
  <h2>{service.availability}</h2>
  </div>
  )
}

export default ServicesCard;
