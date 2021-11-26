import React from "react";
import '../navbar/Nav.css'
import './Main.css'
import '../css/card.css'
import Navbar from "../navbar/Nav";
import Pet from "../PetCard.jsx";

class Adopt extends React.Component {
  filterBy = "pet_name";
  sortBy = "asc";
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
 
  handleChange = (e) => {
  this.filterBy = e.target.value;
  fetch(`http://localhost:3030/api/get/pet?column=${this.filterBy}&orderby=${this.sortBy}&adopted=false`)
  .then((response) => response.json())
  .then((response) =>{
      this.setState({ data: response, isLoading:false })
  })
   

 }

 handleChange2 = (e) => {
  this.sortBy = e.target.value;
  fetch(`http://localhost:3030/api/get/pet?column=${this.filterBy}&orderby=${this.sortBy}&adopted=false`)
  .then((response) => response.json())
  .then((response) =>{
      this.setState({ data: response, isLoading:false })
  })  
 }
 handleSearchChange = (e) => {
   if (e.target.value === ""){
    fetch(`http://localhost:3030/api/get/pet?column=${this.filterBy}&orderby=${this.sortBy}&adopted=false`)
    .then((response) => response.json())
    .then((response) =>{
        this.setState({ data: response, isLoading:false })
    })
   } else {
    fetch(`http://localhost:3030/api/search/pet/${this.filterBy}/${e.target.value}?orderby=${this.sortBy}`)
    .then((response) => response.json())
    .then((response) =>{
        this.setState({ data: response, isLoading:false })
    })  

   }
  
 }
 

  render() {
    if(this.state.isLoading) { 
      return(<h1>Loading...</h1>); 
    }
      return(
        <div>
          <Navbar />
          <div className="main">
            <label>Search: </label>
            <input type="text" className="searchInput" onChange={this.handleSearchChange}></input>
            <div className="filters_pet">
            <title>Adopt</title>
            <label className="selectFilters">Filter by: </label>
            <select name="petFilter" id="petFilter" className="filterInput" onChange={this.handleChange}>
              <option value="pet_name">Name</option>
              <option value="age">Age</option>
              <option value="breed">Breed</option>
            </select>
            <label className="selectFilters">Sort by: </label>
            <select name="sort" id="sort" className="filterInput" onChange={this.handleChange2}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            </div>
            <br></br>
            <hr></hr>
            <div className="container" id="pet_cards">
            {this.state.data.map((data,i) => <Pet key={i} pet={data}/>)}
            </div>
          </div>
          </div>
      );
  }
}
  
  export default Adopt;