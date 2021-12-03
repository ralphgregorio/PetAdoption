import React, { useState, useRef, useEffect } from "react";
import { useLocation , useNavigate} from "react-router";
import { Link } from "react-router-dom";


const UsersTable = ({item}) => {
  const navigate = useNavigate();
  
  let title = `/Updateuser?fname=${item.fname}&id=${item.id}`;

  const handleclick = () => {  
    navigate ("/Updateuser")
  }

  const handleDelete = () => {
    fetch(`http://localhost:3030/api/user/${item.id}`, {
      
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

  
   
    //const name = new URLSearchParams(useLocation().search).get("name");
    return (
        <tr>
        <td>{item.fname} {item.lname}</td>
        <td>{item.email}</td>
        <td>{item.pet_name}</td>
        <Link to={title}> <button onClick={handleclick}>Edit User</button></Link> <button onClick={handleDelete}>Delete User</button>
    
        </tr>
      );

}

export default UsersTable;