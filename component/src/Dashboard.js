import React from "react";
import './Component.css';
import *as FaIcons from 'react-icons/fa';


function Dashboard() {
    return (
      <div className="bg">
           <div class="container">
              
              <div class="child-div-1">
                <div className="head">
                  Teacher's Dashboard
                </div>

                
                <div className="info">

                  <text className="info-text-1">Hi Sabbir Ahmed</text>
                  <br></br>
                  <br></br>
                  <text className="head-2">Your Tasks for today</text>
                  <br></br>
                  <br></br>

                  <div>
                    <div className="left-info">
                      <FaIcons.FaArrowRight/>
                      <text className="info-text-2"> Clasess</text>
                      <br></br>
                      <br></br>
                      <FaIcons.FaArrowRight/>
                      <text className="info-text-2"> Exams</text>
                    </div>

                    <div className="left-info">
                      <FaIcons.FaArrowRight/>
                      <text className="info-text-2"> Assignments</text>
                      <br></br>
                      <br></br>
                      <FaIcons.FaArrowRight/>
                      <text className="info-text-2"> Messages/Community</text>
                    </div>
                  </div>

                </div>

              </div>


              <div class="child-div-2">
                  <div className="right-card-one">
                    <div className="right-card-two"></div>
                    <div className="right-card-two">
                      <text className="level">Level: 1</text>
                      <br></br>
                      <text className="xp">2400 XP</text>
                    </div>
                  </div>
                  <div className="right-card-two"></div>
              </div>
           </div>

      </div>
      
    );
  }
  
  export default Dashboard;
  