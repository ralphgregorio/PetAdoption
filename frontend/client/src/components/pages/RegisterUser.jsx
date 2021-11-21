import PropTypes from 'prop-types'
import React from "react";
import './Main.css'
import Create from '../createUser';

const RegisterUser = ({title}) => {
    return (
        <div className="main">
            <h1>{title}</h1>
            <Create/>
        </div>
    )
}
  
export default RegisterUser;