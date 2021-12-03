import React, { useState } from "react";
import { useLocation , useNavigate} from "react-router";
import { Link } from "react-router-dom";

const PetsTable = ({pet}) => {
  const navigate = useNavigate();
  let title = `/Updatepet?petname=${pet.pet_name}&id=${pet.id}`;

  
  const handleclick = () => {
    
    navigate ("/Updatepet")
  
  }

  const handleDelete = () => {
    fetch(`http://localhost:3030/api/pet/${pet.id}`, {
      
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "delete",
      //for delete, change method to delete
      //for update & edit change to put
  }).then( (response) => {
      if (response.status === 400){
          window.alert(`Failed to delete usercheck functions or database`)
        } else {
          window.alert(`user deleted`)
        }
        window.location.reload(false)
      
  });
  }
 
    return (
        <tr>
        <td>{pet.pet_name}</td>
        <td>{pet.age}</td>
        <td>{pet.description}</td>
        <td>{pet.breed}</td>
        <Link to={title}><button onClick={handleclick}>Edit Pet</button></Link><button onClick={handleDelete}>Delete Pet</button>
        </tr>
      );

}

export default PetsTable;