import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import Navbar from "../navbar/Nav";
import '../css/adoptform.css'

const AdoptForm = () => {
    const navigate = useNavigate();
    const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    const fref = useRef();
    const lref = useRef();
    const eref = useRef();
    const handleSubmit = () => {
        const fname = fref.current.value;
        const lname = lref.current.value;
        const email = eref.current.value;
        let req = `fname=${fname}&lname=${lname}&email=${email}&petID=${id}`;
        fetch("http://localhost:3030/api/createUser", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to process adoption form for ${name}. Check for errors in your form or ${name} may have already been adopted`)
              } else {
                window.alert(`Congratulations! You have adopted ${name}. Check your email for more information on your pickup of ${name}`)
              }
              navigate("/");
            
        });

    }
    
  

    return (
      <div>
        <Navbar />
      <div class="formAdopt">
        <title>Adopt form for {name}</title>
        <h1>{name} Adoption Form</h1><hr></hr>
          <label>First Name</label><br></br>
          <input type="text" className="adoptFormInput" ref={fref}></input><br></br><br></br>
          <label>Last Name</label><br></br>
          <input type="text" className="adoptFormInput" ref={lref}></input><br></br><br></br>
          <label>Email</label><br></br>
          <input type="email" className="adoptFormInput" ref={eref}></input><br></br><br></br>
          <hr></hr>

          <button className="adoptFormButton" onClick={handleSubmit}>Adopt {name}! </button>
        
        
      </div>
      </div>
       
      );

}

export default AdoptForm;