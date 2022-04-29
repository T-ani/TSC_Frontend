import React from 'react';
import './App.css';
import About from './About';
import {BrowserRouter as Router,Switch,Route, BrowserRouter, Routes } from 'react-router-dom';
import Component from './Component';
import S_A_Class from './S_A_Class';
import JSON_Test from './JSON_Test'


function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/new_page" element={<S_A_Class/>}/> 
            <Route path="/json_page" element={<JSON_Test/>}/> 
         </Routes>          
      </div>
    </Router>
    
  );
}

export default App;
