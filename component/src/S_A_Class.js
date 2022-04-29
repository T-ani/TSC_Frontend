import React from "react";
import './S_A_Class.css';
import Image from './Ellipse 24.png';
import Data from './info.json';
import Data_1 from './mock-data.json';
import { ScrollView } from 'react-native';
import *as FaIcons from 'react-icons/fa'
import {useState} from "react";



function S_A_Class() {
  const [query, setQuery] = useState("")


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
                        {
                          Data.map(post =>{
                            return(
                              <>
                              <div className="chapter_cnt">{post.index}</div>
                              <div className="chpater_no">
                                  <button>
                                    {post.chp_id}
                                  </button>
                              </div>
                              <div className="chapter_nme">{post.chp_name}</div>

                              </>
                              
                          
                            )
                          })
                         }
                          <div className="open_chpater"><button>Open Chapter</button></div>
                        </div>
                        <div className="chapter_card">
                        {
                          Data.map(post =>{
                            return(
                              <>
                              <div className="chapter_cnt">{post.index}</div>
                              <div className="chpater_no">
                                  <button>
                                    {post.chp_id}
                                  </button>
                              </div>
                              <div className="chapter_nme">{post.chp_name}</div>

                              </>
                              
                          
                            )
                          })
                         }
                          <div className="open_chpater"><button>Open Chapter</button></div>
                        </div>
                        <div className="chapter_card">
                        {
                          Data.map(post =>{
                            return(
                              <>
                              <div className="chapter_cnt">{post.index}</div>
                              <div className="chpater_no">
                                  <button>
                                    {post.chp_id}
                                  </button>
                              </div>
                              <div className="chapter_nme">{post.chp_name}</div>

                              </>
                              
                          
                            )
                          })
                         }
                          <div className="open_chpater"><button>Open Chapter</button></div>
                        </div>
                        <div className="chapter_card">
                        {
                          Data.map(post =>{
                            return(
                              <>
                              <div className="chapter_cnt">{post.index}</div>
                              <div className="chpater_no">
                                  <button>
                                    {post.chp_id}
                                  </button>
                              </div>
                              <div className="chapter_nme">{post.chp_name}</div>

                              </>
                              
                          
                            )
                          })
                         }
                          <div className="open_chpater"><button>Open Chapter</button></div>
                        </div>
                        <div className="chapter_card">
                        {
                          Data.map(post =>{
                            return(
                              <>
                              <div className="chapter_cnt">{post.index}</div>
                              <div className="chpater_no">
                                  <button>
                                    {post.chp_id}
                                  </button>
                              </div>
                              <div className="chapter_nme">{post.chp_name}</div>

                              </>
                              
                          
                            )
                          })
                         }
                          <div className="open_chpater"><button>Open Chapter</button></div>
                        </div>
                       
                     </div>

                     
                 </div>  
                 <div className="student-info">
                        <div className="chapter_name" style={{color:"white",paddingLeft:'20px'}}>
                         <div style={{float:'left',marginRight:'80px'}}>Students</div>
                         <FaIcons.FaUserPlus/>                   
                        </div>
                        <div>
                          <input placeholder="Find Student" onChange={event => setQuery(event.target.value)} />
                        </div>
                        <div className="frnd_active">

                        {
                             Data_1.filter(post => {
                              if (query === '') {
                                return post;
                              } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                                return post;
                              }
                            }).map((post,id) => {
                              return(                              
                              <div className="box" key={post.id}>
                                <p > 
                                  {post.index}
                                </p>
                                <div className="picture_user_f"></div>
                                <text>
                                  {post.name}
                                </text>
                              </div>
                            
                              
                          
                            )
                          })
                         }
                          
                        </div>
                 </div>
              </div>
          </div>
        </div>
         
      </div>    
    );
  }
  
  export default S_A_Class;
  