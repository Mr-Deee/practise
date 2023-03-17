import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './homecard';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeCard from "./homecard";
import './style.css';
import cyberarch from "../../assets/images/cyberarc.png";
import identity from "../../assets/images/identity.png";
import information from "../../assets/images/information.png";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

function Home(){


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return(


<div>
  <section>
   <div className="welcome">
    
    <h1 className="welcomeText">Kwame<h2 className="HelloText">Larbi Amissah Agyei</h2></h1>
    </div>



<Row className="homecard-row">

<Col className="homecard-card">

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue }} aria-label="recipe">
           M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=" Microsoft Certified: Information Protection Administrator Associate"
        subheader=""
      />
      <CardMedia
        component="img"
        height="294"
        image={cyberarch}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
    Earning Cybersecurity Architect Expert validates subject matter expertise in designing and evolving the cybersecurity strategy to protect an organization’s 
    mission and business processes across all aspects of the enterprise architecture.

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small">Open License</Button>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
     
      </Collapse>
    </Card>

    
</Col>


<Col className="homecard-card">

{/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <Col md={4} className="homecard-card"> */}
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue }} aria-label="recipe">
           M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=" Microsoft Certified: Information Protection Administrator Associate"
        subheader=""
      />
      <CardMedia
        component="img"
        height="294"
        image={identity}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Earning Identity and Access Administrator Associate certification 
        validates the skills and knowledge to design, implement, 
        and operate an organization’s identity and access management 
        systems using Azure AD.

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small">Open License</Button>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
     
      </Collapse>
    </Card>
</Col>


<Col className="homecard-card">


    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue }} aria-label="recipe">
           M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=" Microsoft Certified: Information Protection Administrator Associate"
        subheader=""
      />
      <CardMedia
        component="img"
        height="294"
        image={information}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Earning the Information Protection Administrator Associate certification validates the
         skills and knowledge to plan and implement controls that meet organizational compliance needs. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small">Open License</Button>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
     
      </Collapse>
    </Card>





</Col>


</Row>
   












</section>
</div>
    );


    }

export default Home