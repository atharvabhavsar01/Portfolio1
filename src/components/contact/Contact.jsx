import React, { useRef } from 'react';
import './Contact.css'

import emailjs from '@emailjs/browser';
function Contact() {

    const form = useRef();
    const [done,setDone]=React.useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_b3bceuv', 'template_xgadig9', form.current, '0s_JSJV-G81E6_QJI')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <>
        <form ref={form} onSubmit={sendEmail}> 

        <div className="contact cardcontact">

         <div className="leftside">
         <span>Get in Touch</span>
            <span>Contact me</span>
         </div>
         <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
         <div className="rightside">
                 
         <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button btn"/>
         <span>{done && "Thanks for Contacting , your message sent to atharva!!"} </span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>


         </div>
        </div>
        </form>
        </>
    )
}

export default Contact;
