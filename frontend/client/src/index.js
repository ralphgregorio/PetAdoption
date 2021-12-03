import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Createuser,
  Createstaff,
  Createpet,
  Deleteuser,
  Deletestaff,
  Deletepet,
  Updateuser,
  Updatestaff,
  Updatepet,
  Adopt,
  Login,
  NotFound,
  AdoptForm,
  StaffReportspage,
  UserReportspage,
  PetsReportspage,
  Managepage,
} from "./components/pages"
import 'bootstrap/dist/css/bootstrap.min.css'; 


ReactDOM.render(
  
  <Router>

    <Routes>
    <Route path="/login" element={<Login />} />
      <Route path="/" element={<Adopt />} />
      <Route path="/adoptForm" element={<AdoptForm />} />
      <Route path="/Createuser" element={<Createuser/>} />
      <Route path="/Createstaff" element={<Createstaff/>} />
      <Route path="/Createpet" element={<Createpet/>} />
      <Route path="/Deleteuser" element={<Deleteuser/>} />
      <Route path="/Deletestaff" element={<Deletestaff/>} />
      <Route path="/Deletepet" element={<Deletepet/>} />
      <Route path="/Updateuser" element={<Updateuser/>} />
      <Route path="/Updatestaff" element={<Updatestaff/>} />
      <Route path="/Updatepet" element={<Updatepet/>} />
      <Route path="/StaffReportspage" element={<StaffReportspage />} />
      <Route path="/UserReportspage" element={<UserReportspage />} />
      <Route path="/PetsReportspage" element={<PetsReportspage />} />
      <Route path="/Managepage" element={<Managepage />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>

  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
