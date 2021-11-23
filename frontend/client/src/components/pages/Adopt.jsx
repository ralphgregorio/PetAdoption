import React from "react";
import '../navbar/Nav.css'
import './Main.css'
import '../css/card.css'
import Pet from "../PetCard.jsx";

class Adopt extends React.Component {

  componentDidMount()
  {
    fetch('http://localhost:3030/api/get/pet?column=pet_name&orderby=asc&adopted=false')
      .then((response) => response.json())
      .then((response) =>{
          this.setState({ data: response, isLoading:false })
      })
  }
  state = {
    data: null,
    isLoading:true
 }
 

  render() {
    if(this.state.isLoading) { 
      return(<h1>Loading...</h1>); 
    }
      return(
          <div className="main">
            <title>Adopt</title>
            <div className="container">
            {this.state.data.map((data,i) => <Pet pet={data}/>)}
            </div>
          </div>
      );
  }
}
  
  export default Adopt;