import React, { useState } from "react";
import Contact from "./portfoliocontact";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import myimage from "./images/photo.jpg";

const Home = ({backgroundcolor, txtColor}) =>{
   
    return (
        <>
          <div id="home" className="container-fluid" style={{backgroundColor:backgroundcolor, color:txtColor, border:"1px solid", borderColor:backgroundcolor}}>
            <div id="homecontent" className="row mx-auto">
              <div className="order-2 order-md-1 col-12 col-md-6">
                <div id="innerhomecontent" className="row text-center text-md-left">
                  <div className="d-none d-md-inline col-md-2 col-xl-4"></div>
                
                  <div className="col-12 col-md-10 col-xl-8">
                    <div id="Name" className="mt-2 mt-md-0">
                      <div id="border"></div>
                        <p id="nametext">Hello I am Aman Dalal</p>
                        <p id="designation">Front-End Developer</p>
                        <a href="#contact" id="contactbtnlink"><Button variant="outlined" id="contactbtn">
                              Contact Me
                        </Button></a>
                        <a href="https://instagram.com/aman_dalal111" target="blank">
                          <IconButton aria-label="Instagram" id="profile">
                            < InstagramIcon/>
                          </IconButton>
                        </a>
                        <a href="https://www.linkedin.com/in/aman-dalal-01533617a" target="blank">
                          <IconButton aria-label="LinkedIn" id="profile">
                            <LinkedInIcon/>
                          </IconButton>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100009207178332" target="blank">
                          <IconButton aria-label="Facebook" id="profile">
                            < FacebookIcon/>
                          </IconButton>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="imagecontainer" className="order-1 order-md-2  col-12 col-md-6 text-center text-md-left">
                  <div className="row">
                      <div className="col-3 col-sm-3 d-md-none" id="homeimagegrid"></div>
                      <div className="col-6 col-sm-6 col-md-10 col-xl-8 text-md-center">
                        <img id="homeimage" className="img-fluid" src={myimage} alt="loading error" />
                        <div id="imageshadow" ></div>
                      </div>
                      <div className="col-3 col-sm-3 col-md-2 col-xl-4"></div>
                  </div>
                </div>
            </div>
          </div>
        </>
    );
}

export default Home;