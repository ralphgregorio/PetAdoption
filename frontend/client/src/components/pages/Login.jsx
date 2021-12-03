import React, { useRef } from "react";
import {useNavigate} from "react-router-dom"
import '../navbar/Nav.css'
import './Main.css'


function Login() {
  let history = useNavigate();
  const user = useRef();
const pass = useRef();

function authenticate() {
  let req = `user=${user.current.value}&pass=${pass.current.value}`
  fetch("http://localhost:3030/login", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
        }).then( (response) => {
            if (response.status != 200){
                window.alert(`Login Fail`)
              } else {
                window.alert(`Login Success`)
                history("/ManagePage")
              }
              
            
        });
}
  return (
    <div className="main">
      <title>Staff Login</title>
      <div className="formAdopt">
      <h1>Staff Login</h1>
        <label>Username: </label><br></br>
        <input type="text" id="user" className="filterInput" ref={user}></input><br></br>
        <label>Password: </label><br></br>
        <input type="password" id="pass" className="filterInput"ref={pass}></input><br></br><br></br>
        <button id="back" className="filterInput" onClick={()=>history(-1)}>Back</button><button id="login" className="filterInput" onClick={authenticate}>Login</button>
      </div>
    </div>
  );
}

export default Login;