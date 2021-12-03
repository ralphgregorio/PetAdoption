import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import StaffNavbar from "../navbar/StaffNav";
import '../css/adoptform.css'


const Createstaff = () => {
    const navigate = useNavigate();
   // const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    //const username = new URLSearchParams(useLocation().search).get("username");
    const fref = useRef();
    const lref = useRef();
    const pasref=useRef();
    const unref=useRef();
    const handleSubmit = () => {
        const fname = fref.current.value;
        const lname = lref.current.value;
        const pass = pasref.current.value;
        const username = unref.current.value;
      
        let req = `fname=${fname}&lname=${lname}&username=${username}&pass=${pass}`;
        fetch("http://localhost:3030/api/createStaff", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to create staff database for ${fname}`)
              } else {
                window.alert(`staff database for ${fname} created`)
              }
              navigate("/StaffReportspage");
            
        });

    }
    return (
      <div>
        <StaffNavbar></StaffNavbar>
      <div class="staffCreate">
        <h1>{name} Staff Creation Form</h1><hr></hr>
          <label>First Name</label><br></br>
          <input type="text" className="createStaffInput" ref={fref}></input><br></br><br></br>
          <label>Last Name</label><br></br>
          <input type="text" className="createStaffInput" ref={lref}></input><br></br><br></br>
          <label>Username</label><br></br>
          <input type="username" className="createStaffInput" ref={unref}></input><br></br><br></br>
          <label>Pass</label><br></br>
          <input type="pass" className="createStaffInput" ref={pasref}></input><br></br><br></br>
          <hr></hr>
          <button className="createStaffButton" onClick={handleSubmit}>Create staff {name}</button>
        
          </div>
      </div>
       
      );

}

export default Createstaff;