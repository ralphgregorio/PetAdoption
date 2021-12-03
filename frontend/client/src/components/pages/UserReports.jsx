import React, { useState, useRef, useEffect } from "react";
import '../navbar/StaffNav.css'
import StaffNavbar from "../navbar/StaffNav";
import './Staffpage.css'
import UsersTable from "./UsersTable";

function UserReportspage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [items, setData] = useState([]);

    useEffect(() => {
        let url = `http://localhost:3030/api/getParents`;
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
            <title>UserReportsPage</title>
            <h1>User Report Profiles</h1>

                <div className="dbItems">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Adopted Pet</th>
                                 <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((some) => <UsersTable item={some}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    );
  }
}
  export default UserReportspage;