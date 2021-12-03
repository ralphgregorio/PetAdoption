import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import StaffNavbar from "../navbar/StaffNav";
import '../css/adoptform.css'

const Updateuser= () => {//Note Pet id is a number
    const navigate = useNavigate();
    const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    const fref = useRef();
    const lref = useRef();
    const eref = useRef();
    const idref = useRef();
    const targcol= useRef();
    const update=useRef();

    const user_name = new URLSearchParams(useLocation().search).get("fname");
    const user_id = new URLSearchParams(useLocation().search).get("id");
   
    const handleSubmit = () => {
        const fname = fref.current.value;
        const targcolumn= targcol.current.value;
        const updateval= update.current.value;
        const id= idref.current.value;//Note: ID is a number
        
      
        let req = `fname=${fname}&targetCol=${targcolumn}&updateVal=${updateval}`;
        fetch(`http://localhost:3030/api/updateUser/${id}`, {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "put",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to update user ${fname}`)
              } else {
                window.alert(`user for ${fname} updated`)
              }
              navigate("/UserReportspage");
            
        });

    }
    
    return (
      <div>
        <StaffNavbar></StaffNavbar>
      <div class="userUpdate">
        <h1>{name} User Update</h1><hr></hr>
          <label>First Name</label><br></br>
          <input type="text" className="updateUserInput" ref={fref} value={user_name} disabled></input><br></br><br></br>
          <label>Update Value</label><br></br>
          <input type="text" className="updateUserInput" ref={update}></input><br></br><br></br>
          <label>ID</label><br></br>
          <input type="text" className="updateUserInput" ref={idref}
          value={user_id} disabled></input><br></br><br></br>
         

        <label for="columns">Choose a column to update:</label>
        <select name="Select Column" id="columns" ref={targcol}>
        <option value="fname">First Name</option>
        <option value="lname">Last Name</option>
        <option value="email">Email</option>
        <option value="adopted_pet_id">Pet Id</option>
        </select>
          <hr></hr>

        

          <button className="updateUserButton" onClick={handleSubmit}>Update user {name}</button>
         
      </div>
      </div>
       
      );

}

export default Updateuser;