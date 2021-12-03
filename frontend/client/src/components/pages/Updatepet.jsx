import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import StaffNavbar from "../navbar/StaffNav";
import '../css/adoptform.css'


const Updatepet= () => {//Note: id is a number
    const navigate = useNavigate();
    const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    const petref = useRef();
    const iref= useRef();
    const targcol= useRef();
    const update=useRef();
    const descref=useRef();

    const pet_name = new URLSearchParams(useLocation().search).get("petname");
    const pet_id = new URLSearchParams(useLocation().search).get("id");
   
    const handleSubmit = () => {
        const petname = petref.current.value;
        const targcolumn= targcol.current.value;
        const updateval= update.current.value;
        const id= iref.current.value;
             
        let req = `pname=${petname}&targetCol=${targcolumn}&updateVal=${updateval}`;
        fetch(`http://localhost:3030/api/updatePets/${id}`, {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method:"put",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to pet infor for ${petname}`)
              } else {
                window.alert(`pet ${petname} updated`)
              }
              navigate("/PetsReportspage");
            
        });

    }
    
    return (
      <div>
      <StaffNavbar></StaffNavbar>
      <div class="petUpdate">
        <h1>{name} Pet Update</h1><hr></hr>
          <label>Pet Name</label><br></br>
          <input type="text" className="updatePetInput" ref={petref} value={pet_name} disabled></input><br></br><br></br>
          <label>Update Value</label><br></br>
          <input type="text" className="updatePetInput" ref={update}></input><br></br><br></br>
          <label>ID</label><br></br>
          <input type="text" className="updatePetInput" ref={iref}value={pet_id} disabled></input><br></br><br></br>
         

        <label for="columns">Choose a column to update:</label>
        <select name="Select Column" id="columns" ref={targcol}>
        <option value="pet_name">Pet Name</option>
        <option value="breed">Breed</option>
        <option value="age">Age</option>
        <label>Descriptions</label><br></br>
        <textarea ref={descref}></textarea><br></br>
        <option value="url">Url</option>
        <option value="adopted">Adopted</option>
        </select>
          <hr></hr>

        

          <button className="updateStaffButton" onClick={handleSubmit}>Update Pet{name}</button>
         
      </div>
      </div>
       
      );

}

export default Updatepet;