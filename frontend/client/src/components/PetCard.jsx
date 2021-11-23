import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/card.css'

const Pet = ({pet}) => {
    let title = `/adoptForm?id=${pet.id}&name=${pet.pet_name}`;
   
    return (
      
      <div class="card">
        <img src={pet.url} class="imageCard"></img>
        <div class="containerCard">
          <h4>{pet.pet_name} - {pet.age} years old</h4>
          <h6>Breed: {pet.breed}</h6>
          <p>{pet.description}</p>
          
          <Link to={title}> <button>Adopt Me!</button>  </Link>
          
        </div>
        
      </div>
       
      );

}

export default Pet;