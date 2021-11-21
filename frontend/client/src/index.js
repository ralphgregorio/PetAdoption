import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Adopt,
  Contact,
  About,
  Footer,
  Home,
  Login,
  RegisterUser,
} from "./components/pages"
import 'bootstrap/dist/css/bootstrap.min.css'; 


ReactDOM.render(
  
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/adopt" element={<Adopt />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser title="Testing Form"/>} />
    </Routes>

  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
