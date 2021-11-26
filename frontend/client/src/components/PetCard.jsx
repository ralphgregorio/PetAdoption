import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/card.css'

const Pet = ({pet}) => {
    let title = `/adoptForm?id=${pet.id}&name=${pet.pet_name}`;
   
    return (
      
      <div className="card">
        <img src={pet.url} className="imageCard"></img>
        <div className="containerCard">
          <h4>{pet.pet_name} - {pet.age} years old</h4>
          <h6>Breed: {pet.breed}</h6>
          <p>{pet.description}</p>
          
          <Link to={title}> <button className="adoptFormButton"> Adopt Me!</button>  </Link>
          
        </div>
        
      </div>
       
      );

}

export default Pet;