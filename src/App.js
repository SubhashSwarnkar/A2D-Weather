
import './App.css';
import React from "react";
import SignUp from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';


function App() {
  return (
    <div >
   
     <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
