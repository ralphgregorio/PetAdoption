import React, { useRef } from "react";
import { useLocation, useNavigate  } from "react-router";
import Navbar from "../navbar/Nav";
import '../css/adoptform.css'
import StaffNavbar from "../navbar/StaffNav";

const Updatestaff= () => {//Note: id is a number
    const navigate = useNavigate();
    //const id = new URLSearchParams(useLocation().search).get("id");
    const name = new URLSearchParams(useLocation().search).get("name");
    const uref = useRef();
    const iref= useRef();
    const targcol= useRef();
    const update=useRef();

    const user_name = new URLSearchParams(useLocation().search).get("username");
    const user_id = new URLSearchParams(useLocation().search).get("id");


   
    const handleSubmit = () => {
        const username = uref.current.value;
        const targcolumn= targcol.current.value;
        const updateval= update.current.value;
        const id= iref.current.value;
      
        let req = `username=${username}&targetCol=${targcolumn}&updateVal=${updateval}`;
        fetch(`http://localhost:3030/api/updateStaff/${id}`, {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method:"put",
            //for delete, change method to delete
            //for update & edit change to put
        }).then( (response) => {
            if (response.status === 400){
                window.alert(`Failed to update staff ${username}`)
              } else {
                window.alert(`staff ${username} updated`)
              }
              navigate("/StaffReportspage");
            
        });

    }
    
    return (
      <div>
        <StaffNavbar></StaffNavbar>
      <div class="staffUpdate">
        <h1>{name} Staff Update</h1><hr></hr>
          <label>User Name</label><br></br>
          <input type="text" className="updateStaffInput" ref={uref} value={user_name} disabled></input><br></br><br></br>
          <label>Update Value</label><br></br>
          <input type="text" className="updateStaffInput" ref={update}></input><br></br><br></br>
          <label>ID</label><br></br>
          <input type="text" className="updateStaffInput" ref={iref} value={user_id} disabled></input><br></br><br></br>
         

        <label for="columns">Choose a column to update:</label>
        <select name="Select Column" id="columns" ref={targcol}>
        <option value="fname">First Name</option>
        <option value="lname">Last Name</option>
        <option value="username">Username</option>
        <option value="id">Id</option>
        <option value="pass">Pass</option>
        </select>
          <hr></hr>

        

          <button className="updateStaffButton" onClick={handleSubmit}>Update staff</button>
         
      </div>
      </div>
       
      );

}

export default Updatestaff;