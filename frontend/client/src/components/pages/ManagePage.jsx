import React from "react";
import '../navbar/StaffNav.css'
import StaffNavbar from "../navbar/StaffNav";
import './Staffpage.css'
import { useLocation , useNavigate} from "react-router";

function Managepage() {
    const navigate = useNavigate();

    const handleclickUser = () => {  
        navigate ("/Createuser")
      }

    const handleclickPet = () => {  
        navigate ("/Createpet")
      }

    const handleclickStaff = () => {  
        navigate ("/Createstaff")
      }

    return (
        <div>
        <StaffNavbar></StaffNavbar>
            <div className="main">

            <title>ManagePage</title>
            <h1>Click options to Manage</h1>

            <button onClick={handleclickUser}>Create User</button>
            <button onClick={handleclickPet}>Create/add Pet</button>
            <button onClick={handleclickStaff}>Create/Register Staff</button>

            </div>
        </div>
        
    );
  }
  
  export default Managepage;