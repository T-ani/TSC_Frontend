import React from "react";
import './S_A_Class.css';
import Image from './Ellipse 24.png';
import Data from './info.json';


function S_A_Class() {
    return (
      <div className="main">
        <div className="left-side"></div>
        <div className="right-side">
          <div className="division_1" style={{background:"grey"}}>
              Hello World
          </div>
          <div className="division_2" style={{background:"white"}}>
                <div className="chapter_name">
                    Physics
                </div>

                <div className="user_info"> 


                    <div className="user_info_1">


                      <div className="user">
                        <div className="user_pic"></div>
                        <div className="user_information">

                          <div className="pading">
                            <text className="name">Sabbir Ahmed (instructor)</text>
                          </div>

                          <div className="pading" >
                            <text >other information of the faculty</text>
                          </div>
                        </div>
                        <div className="btn">
                          <button>Start Class</button>
                        </div>
                      </div>


                      <div className="user_performance">
                        <div className="center">
                          <text className="name_chp">Number of Chapters</text>
                          <br></br>
                          <text className="num_chp">36</text>
                        </div>
                        <div className="center">
                          <text className="name_chp">Number of Chapters</text>
                          <br></br>
                          <text className="num_chp">36</text>
                        </div>
                        <div className="center">
                          <text className="name_chp">Number of Chapters</text>
                          <br></br>
                          <text className="num_chp">36</text>
                        </div>
                        <div className="center">
                          <text className="name_chp">Number of Chapters</text>
                          <br></br>
                          <text className="num_chp">36</text>
                        </div>
                        <div className="center">
                          <text className="name_chp">Number of Chapters</text>
                          <br></br>
                          <text className="num_chp">36</text>
                        </div>
                                              </div>
                    </div>
                    <div className="user_rating"> 
                      <div className="size">
                        <text style={{fontstyle:'italic',paddingBottom:"10px"}}>Course Rating</text>
                      
                        <img  src={Image} alt=""/>
                        <div class="centerd">A</div>

                      </div>
                      
                    </div>
                </div>
                
          </div>
        <div className="division_3" style={{background:"white"}}>
              <div className="user_info_2">
                 <div className="chapter-info">
                     <div className="chapter_list_name">
                      Chapters
                     </div>
                     <div className="chapter_lists">
                        <div className="chapter_card">
                          <div className="chapter_cnt">1</div>
                          <div className="chpater_no"><button>Chapter 1</button></div>
                          <div className="chapter_nme">Measurement</div>
                          <div className="open_chpater"><button>Open Chapter</button></div>
                        </div>
                        <div className="chapter_card"></div>
                        <div className="chapter_card"></div>
                        <div className="chapter_card"></div>
                     </div>
                     
                 </div>  
                 <div className="student-info">

                 </div>
              </div>
          </div>
        </div>
         
      </div>    
    );
  }
  
  export default S_A_Class;
  