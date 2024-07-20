import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
import Foot from './Footer';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9jxntec', 'template_3zk8l28', form.current, '_1G8K9UG5jO1ZOMu2')
      .then((result) => {
        console.log(result.text);
        alert("message sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <div className='contact text-center text-white' id='section5'>
      <br /> <h1>Contact</h1>
      <hr />
      <div className='mx-md-auto text-center container'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='form-group mt-2'>
            <label for="Uname">User name:</label>
            <input type='text' className='form-control' id='uname' placeholder='Enter name' name='user_name'></input>
          </div>
          <div className='form-group mt-2'>
            <label for="email">Email:</label>
            <input type='email' className='form-control' id='email' placeholder='Enter email' name='user_email'></input>
          </div>

          <div className='form-group mt-2'>
            <label for="message">Message:</label>
            <textarea className='form-control' placeholder='message....' cols={30} rows={10} name='message'></textarea>
          </div>
          <input className='mywork mb-3' type='submit' value="Send" />


        </form>

      </div>
      <Foot />
    </div>

  )
}

export default Contact
