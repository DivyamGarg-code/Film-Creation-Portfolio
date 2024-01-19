import React from 'react';
import mail from '../images/mail.svg'


function Contact() {
  return (
    <a className='contact_btn btn' href="mailto:">
      <img src={mail} alt="error" />
      <div >Send Mail</div>
    </a>
  );
}
export default Contact;
