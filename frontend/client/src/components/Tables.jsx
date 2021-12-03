import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/card.css'

const Tables = ({pet}) => {

    return (
      
        <tr>
           <td>{pet.pet_name}</td>
        </tr>
       
      );

}

export default Tables;