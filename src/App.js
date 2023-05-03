import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import { Box, Button, Container, Divider, Grid, TextField, ThemeProvider } from '@mui/material';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_elw0d1v', 'template_hoftujj', form.current, 'tAz-lu9VPP0V4xVYx')
      .then((result) => {
        if (result) {
          alert("mail sent success  ")
          window.location.reload()
        } else {
          alert("something went wrong please try again.")
          window.location.reload()
        }

      }, (error) => {
        console.log(error.text);
      });
  }


  return (

    <>
      
      <Divider sx={{textAlign:"center",marginTop:"40px"}}>
      <h1>hello trippy</h1>
      </Divider>
      
      <Box sx={{
        height:"60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>


        <form ref={form} onSubmit={sendEmail}>
          <div >

            <TextField sx={{width:"100%",marginBottom:"10px" }} required label="Name" type="text" name="user_name" />
          </div>
          <div >

            <TextField sx={{width:"100%",marginBottom:"10px" }} required label="Email" type="email" name="user_mail" />
          </div>
          <div>

            <TextField required
             sx={{ width:"100%",marginBottom:"10px"}}
              label="Enter text"
              multiline
              rows={5}
              variant="outlined" name="message" />
          </div>
          <Divider sx={{alignItems:"center"}}><Button variant='contained' type="submit" value="Send" sx={{ text: "center" }}>Send</Button>
          </Divider>
        </form>
      </Box>


    </>
  );
}

export default App;
