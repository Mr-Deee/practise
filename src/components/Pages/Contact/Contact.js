import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import "./Contact.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button, Checkbox, Form } from 'semantic-ui-react'


function Contact(){
    return(


        <>
        <Container className="Contactbox">



        


            <Row className="controw">
                <Col className="contcol">
              



    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} classNamebox  />

        <Form>
    <Form.Field className="First">
    
      <input placeholder='First Name' />
    </Form.Field>
   
     <Form.Field  className="First">
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
      </Container>
    </React.Fragment>


                
                </Col>
            </Row>
        
        </Container>
        
        
        
        
        </>
    )




}

export  default Contact;