import React, { useState } from "react";
import { useLocation , useNavigate} from "react-router";
import { Link } from "react-router-dom";

const StaffTable = ({item}) => {
  const navigate = useNavigate();
  let title = `/Updatestaff?username=${item.username}&id=${item.id}`;

  const handleclick = () => {
    
    navigate ("/Updatestaff")
  
  }
  const handleDelete = () => {
    fetch(`http://localhost:3030/api/staff/${item.id}`, {
      
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
        <td>{item.fname} {item.lname}</td>
        <td>{item.username}</td>
        <Link to={title}><button onClick={handleclick}>Edit Staff</button></Link> <button onClick={handleDelete}>Delete Staff</button>
        </tr>
      );

}

export default StaffTable;