import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import Navbar from "../navbar/Nav";
import '../css/adoptform.css'



const Deletepet= () => {
    const navigate = useNavigate();
   const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    //const username = new URLSearchParams(useLocation().search).get("username");
    const fref = useRef();
    const bref = useRef();
    const ageref=useRef();

    const handleSubmit = () => {
        const petname = fref.current.value;
        const breed = bref.current.value;
        const age = ageref.current.value;
        let req = `pet_name=${petname}&breed=${breed}&age=${age}`;
        fetch("http://localhost:3030/api/pet", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "delete",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to delete ${petname}`)
              } else {
                window.alert(`pet database for ${petname} deleted`)
              }
              navigate("/cedu");
            
        });

    }
    return (
      <div>
        <Navbar />
      <div class="petDelete">
        <h1>{name}Pet Deletion</h1><hr></hr>
          <label>Pet Name</label><br></br>
          <input type="text" className="deletePetInput" ref={fref}></input><br></br><br></br>
          <label>Breed</label><br></br>
          <input type="text" className="deletePetInput" ref={bref}></input><br></br><br></br>
          <label>Age</label><br></br>
          <input type="age" className="deletePetInput" ref={ageref}></input><br></br><br></br>
          
          <hr></hr>
          <button className="deletePetButton" onClick={handleSubmit}>Delete pet {name}</button>
        
          </div>
      </div>
       
       );

}

export default Deletepet;