import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import Navbar from "../navbar/Nav";
import '../css/adoptform.css'

const Createuser = () => {
    const navigate = useNavigate();
    const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    const fref = useRef();
    const lref = useRef();
    const eref = useRef();
    const pref = useRef();
    const handleSubmit = () => {
        const fname = fref.current.value;
        const lname = lref.current.value;
        const email = eref.current.value;
        const id = pref.current.value;
        let req = `fname=${fname}&lname=${lname}&email=${email}&petID=${id}`;
        fetch("http://localhost:3030/api/createUser", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to create user ${name}`)
              } else {
                window.alert(`user for ${fname} created`)
              }
              navigate("/UserReportspage");
            
        });

    }
    
  

    return (
      <div>
        <Navbar/>
      <div class="userCreate">
        <h1>{name} User Creation Form</h1><hr></hr>
          <label>First Name</label><br></br>
          <input type="text" className="createUserInput" ref={fref}></input><br></br><br></br>
          <label>Last Name</label><br></br>
          <input type="text" className="createUserInput" ref={lref}></input><br></br><br></br>
          <label>Email</label><br></br>
          <input type="email" className="createUserInput" ref={eref}></input><br></br><br></br>
          <label>Pet Id</label><br></br>
          <input type="username" className="createUserInput" ref={pref}></input><br></br><br></br>
          <hr></hr>

          <button className="createUserButton" onClick={handleSubmit}>Create user ! </button>
         
        
        
      </div>
      </div>
       
      );

}

export default Createuser;