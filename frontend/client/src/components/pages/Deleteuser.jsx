import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import Navbar from "../navbar/Nav";
import '../css/adoptform.css'

const Deleteuser = () => {//Note Pet id is a number
    const navigate = useNavigate();
    const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    const fref = useRef();
    const lref = useRef();
    const handleSubmit = () => {
        const fname = fref.current.value;
        const lname = lref.current.value;
        let req = `fname=${fname}&lname=${lname}`;
        fetch("http://localhost:3030/api/user", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "delete",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to delete user ${name} check functions or database`)
              } else {
                window.alert(`user for ${fname} deleted`)
              }
              navigate("/cedu");
            
        });

    }
    
    return (
      <div>
        <Navbar/>
      <div class="userDelete">
        <h1>{name} User Deletion </h1><hr></hr>
          <label>First Name</label><br></br>
          <input type="text" className="deleteUserInput" ref={fref}></input><br></br><br></br>
          <label>Last Name</label><br></br>
          <input type="text" className="deleteUserInput" ref={lref}></input><br></br><br></br>
          <hr></hr>

          <button className="deleteUserButton" onClick={handleSubmit}>Delete user {name}</button>
         
      </div>
      </div>
       
      );

}

export default Deleteuser;