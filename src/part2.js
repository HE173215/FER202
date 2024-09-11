// src/Part2.js
import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Part3 from './part3';

function Part2() {
  return (
    <header className="App-header">
      <p className="text-large">
        Hello <span className="text-blue">React</span>
      </p>
      <img src={logo} className="App-logo" alt="logo" />
      <p style={{ color: 'black' }}>This is the React logo!</p>
      <a className="text-small-italic">(I don't know why it is here either)</a>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      
    </header>
  );
}

export default Part2;
