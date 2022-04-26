import React from 'react';
import './App.css';
import About from './About';
import {BrowserRouter as Router,Switch,Route, BrowserRouter, Routes } from 'react-router-dom';
import Component from './Component';
import S_A_Class from './S_A_Class';


function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/new_page" element={<S_A_Class/>}/> 
         </Routes>          
      </div>
    </Router>
    
  );
}

export default App;
