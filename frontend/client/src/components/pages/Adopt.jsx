import React, {Comp} from "react";
import {useState, useEffect } from 'react';
import '../navbar/Nav.css'
import './Main.css'
import '../Pet.css'
import Pet from "../PetCard.jsx";
import { Spinner } from 'react-bootstrap';

class Adopt extends React.Component {

  componentDidMount()
  {
    fetch('http://localhost:3030/api/get/pet?column=pet_name&orderby=asc&adopted=false')
      .then((response) => response.json())
      .then((finalResponse) =>{
          this.setState({ data: finalResponse, isLoading:false })
      })
  }
  state = {
    data: null,
    isLoading:true
 }
 

  render() {
    if(this.state.isLoading) { 
      return(<div className ="load"><Spinner animation="border" role="status" size="lrg" >
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>); 
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