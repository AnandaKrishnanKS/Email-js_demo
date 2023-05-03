import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import { Container, Grid, TextField, ThemeProvider } from '@mui/material';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_elw0d1v', 'template_hoftujj', form.current, 'tAz-lu9VPP0V4xVYx')
      .then((result) => {
          if(result){
            alert("mail sent success  ")
            window.location.reload()
          }else{
            alert("something went wrong please try again.")
            window.location.reload()
          }

      }, (error) => {
          console.log(error.text);
      });
    }

   
  return (
   
    <>
        
        <h1>hello trippy</h1>

      <Container>
      <form ref={form} onSubmit={sendEmail}>
      <div style={{margin:"20px"}}>
        <label>Name</label>
        <TextField  type="text" name="user_name" />
      </div>
      <div style={{margin:"20px"}}>
        <label>Email</label>
        <TextField type="email" name="user_mail" />
      </div>
      <div style={{margin:"20px"}}>
        <label>Message</label>
        <textarea id="outlined-basic" name="message" />
      </div>
      <div><TextField type="submit" value="Send" /></div>
    </form>
      </Container>
   

    </>
  );
}

export default App;
