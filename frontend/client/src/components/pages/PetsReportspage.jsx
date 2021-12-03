import React, { useState, useRef, useEffect } from "react";
import Tables from "../Tables";


const PetsReportspage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [items, setData] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3030/api/get/pet";
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

            <div className="main">
            <title>UserReportsPage</title>
            <h1>User Report Profiles</h1>

                <div className="dbItems">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Description</th>
                                <th>Breed</th>
                                <th>Adopted Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((some) => <Tables pet={some}/>)}

                        </tbody>
                    </table>


                </div>
            </div>
        </div>

    );
  }
}

export default PetsReportspage;