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



            <p className="Contactheader">Contact</p>


            <Row>
                <Col>
              



    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />

        <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
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