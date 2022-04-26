import React from 'react';
import './App.css';
import *as FaIcons from 'react-icons/fa'
import Image from './Group 12.png';
import { Link } from 'react-router-dom';
function About() {
  return (
      <div >    
        <div>
             <div className='part_1'><text>Hello</text></div>
             <div className='part_2'><Link to="/new_page" className='link'><FaIcons.FaBars/></Link></div>
             <div className='part_3'><text>About Us</text></div>

        </div>
        <div class="centered">
             <text className='inside_next'>
             Book fair holds a traditional value. Nowadays it has become a traditional festival in Bangladesh. On every occasion, it is organized all over the country. The biggest book fair is held during the month of February. It is considered to be the most popular and gorgeous book fair. It is held in the premises of the Bangla Academy for the whole month of February in memory of the martyrs during the Language Movement.A             part from “Ekushey Boi Mela”, a lot of different small and big book fairs are held all over the country. A book fair plays a significant role in building up a more knowledgeable and cultured nation. In a book fair, many small and big stalls are organized. They are filled with thousands of books. They are decorated very nicely. Bookstalls stand in a row and are beautifully organized and well furnished. An enormous number of book lovers with diverse tastes and cultures visit book fairs every year.
             </text>  
        </div>
       
       <div id="parent">
            <div className='header_2'></div>
            <div className='header_3'></div>
            <img src={Image} alt=""/>
       </div>
       
      </div>

    
  );
}

export default About;
