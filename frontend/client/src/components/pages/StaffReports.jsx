import React, { useState, useRef, useEffect } from "react";
import '../navbar/StaffNav.css'
import StaffNavbar from "../navbar/StaffNav";
import './Staffpage.css'
import StaffTable from "./StaffTable";


const StaffReportspage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        let url = `http://localhost:3030/api/get/staff`;
        fetch(url)
        .then((response) => response.json())
        .then((response) =>{
            setIsLoaded(true);
            setData(response);
        })

      }, [])

   
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

      return (
        <div>
        <StaffNavbar></StaffNavbar>

            <div className="main">
            <title>StaffReportsPage</title>
            <h1>Staff Report Profiles</h1>

                <div className="dbItems">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((some) => <StaffTable item={some}/>)}   
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    );
  }
}
  export default StaffReportspage;