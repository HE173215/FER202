// src/Part1.js
import React from 'react';
import './App.css'; 
import Part3 from './part3'; 

function Part1() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#home" className="home-link">Home</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login" className="login-link">Login</a></li>
        </ul>
      </nav>
      <p className="JSX-style">This is JSX</p>
      <a style={{ color: 'black' }}>Course Name</a>
      <Part3 />
    </div>
  );
}

export default Part1;
