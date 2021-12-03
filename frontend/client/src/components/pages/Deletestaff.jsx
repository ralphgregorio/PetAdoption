import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import Navbar from "../navbar/Nav";
import '../css/adoptform.css'

const Deletestaff = () => {//Note Pet id is a number
    const navigate = useNavigate();
    const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    const fref = useRef();
    const lref = useRef();
    const handleSubmit = () => {
        const fname = fref.current.value;
        const lname = lref.current.value;
        let req = `fname=${fname}&lname=${lname}`;
        fetch("http://localhost:3030/api/staff", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "delete",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to delete staff ${fname} check functions or database`)
              } else {
                window.alert(`user for ${fname} deleted`)
              }
              navigate("/cedu");
            
        });

    }
    
    return (
      <div>
        <Navbar/>
      <div class="staffDelete">
        <h1>{name} Staff Deletion </h1><hr></hr>
          <label>First Name</label><br></br>
          <input type="text" className="deleteStaffInput" ref={fref}></input><br></br><br></br>
          <label>Last Name</label><br></br>
          <input type="text" className="deleteStaffInput" ref={lref}></input><br></br><br></br>
          <hr></hr>

          <button className="deleteStaffButton" onClick={handleSubmit}>Delete staff </button>
         
      </div>
      </div>
       
      );

}

export default Deletestaff;