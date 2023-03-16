import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './homecard';
import HomeCard from "./homecard";
import './style.css';



 

function Home(){
    return(


<>


   <div className="welcome">
    
    <h1 className="welcomeText">Kwame<h2 className="HelloText">Larbi-Agyei</h2></h1>
    </div>

    <div  className="homecard-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="homecard-heading">Certifications</h1>
        {/* <h1 className="homecard-heading">
          My Recent <strong className="purple">Works </strong>
        </h1> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="homecard-card">
            <HomeCard
              // imgPath={chatify}
              isBlog={false}
              title=""
              description="....."
              ghLink="https://github.com/Mr-Deee/totalclinic"
            />
          </Col>

          


        </Row>
       
      </Container>
    </div>




   </>

    );


    }

export default Home