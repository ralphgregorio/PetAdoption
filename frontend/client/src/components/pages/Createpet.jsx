import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import Navbar from "../navbar/Nav";
import '../css/adoptform.css'



const Createpet = () => {
    const navigate = useNavigate();
   const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    //const username = new URLSearchParams(useLocation().search).get("username");
    const fref = useRef();
    const bref = useRef();
    const ageref=useRef();
    const descref=useRef();
    const adoptedornotref=useRef();
    const uref=useRef();
    const handleSubmit = () => {
        const petname = fref.current.value;
        const breed = bref.current.value;
        const desc= descref.current.value;
        const age = ageref.current.value;
        const adopted = adoptedornotref.current.value ;
        const url= uref.current.value;
        let req = `pname=${petname}&url=${url}&desc=${desc}&breed=${breed}&age=${age}&adopted=${adopted}`;
        fetch("http://localhost:3030/api/createPet", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to create pet database for ${petname}`)
              } else {
                window.alert(`pet database for ${petname} created`)
              }
              navigate("/cedu");
            
        });

    }
    return (
      <div>
        <Navbar />
      <div class="petCreate">
        <h1>{name}Pet Creation Form</h1><hr></hr>
          <label>Pet Name</label><br></br>
          <input type="text" className="createPetInput" ref={fref}></input><br></br><br></br>
          <label>Breed</label><br></br>
          <input type="text" className="createPetInput" ref={bref}></input><br></br><br></br>
          <label>Descriptions</label><br></br>
          <textarea ref={descref}></textarea><br></br>
          <label>URL</label><br></br>
          <input type="url" className="createPetInput" ref={uref}></input><br></br><br></br>
          <label>Age</label><br></br>
          <input type="age" className="createPetInput" ref={ageref}></input><br></br><br></br>
          <label>Adopted?</label><br></br>
          <input type="text" className="createPetInput" ref={adoptedornotref}></input><br></br><br></br>
          <hr></hr>
          <button className="createPetButton" onClick={handleSubmit}>Create pet {name}</button>
        
          </div>
      </div>
       
      );

}


export default Createpet;