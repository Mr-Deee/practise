import React from "react";
import "./about.css";
import {Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard"



function About() {

  return(

    <Container fluid className="about-section">
      
      <div className="Abouthead">About</div>
      
      <Aboutcard />
           
       <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
           
        
          </Col>
        


</Container>
    
    
    
    




// </>

  )
}

export default About;