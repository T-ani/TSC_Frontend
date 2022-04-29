import React from 'react';
import './App.css';
import *as FaIcons from 'react-icons/fa'
import Image from './Group 12.png';
import { Link } from 'react-router-dom';
import Data from "./info.json"

function JSON_Test() {
  return (
      <div>    
          <div className='posts'>
              {
                  Data.map(post =>{
                      return(
                          <div key={post.id}>
                           <h1>{ post.title }</h1>
                           <p>{ post.content }</p>
                          </div>
                          
                      )
                  })
              }
          </div>
      </div>

    
  );
}

export default JSON_Test;
