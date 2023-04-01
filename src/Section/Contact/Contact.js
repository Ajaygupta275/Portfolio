import React from 'react';
import './contact.css';
// import {MdOutlineEmail} from 'react-icon/md';
// import {FaBeer} from 'react-icons/fa';
const Contact = () => {
  return (
    <section id='contact'>
    <h5 style={{textAlign:'center'}}>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact_container'>
      <div className='contact_option'>
        <article className='contact_option'>
         {/* <MdOutlineEmail/> */}
          <h4>Email</h4>
          <h5>ajaykumargupta275@gmail.com</h5>
          {/* <a href='mailto:ajaykumargupta275@gmail.com'></a> */}
        
          <a href="mailto:ajaykumargupta275@gmail.com">Example mailto link</a>
        </article>


        <article className='contact_option'>
         {/* <MdOutlineEmail/> */}
          <h4>Whatsapp</h4>
          <h5>8737836614</h5>
          <a href='https://wa.me/8737836614'></a>
        </article>
      </div>

      <form action=''>
        <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
    </div>
    </section>

  )
}

export default Contact
