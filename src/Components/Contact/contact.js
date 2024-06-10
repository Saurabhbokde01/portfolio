import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lxhoj84', 'template_5qads3n', form.current, {publicKey: 'UfVB1hr4rHVF9GlR3',})
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('email sent !')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };


  return (
    <section id="contact">
        <h2 className="contactTitle">Contact Me</h2>
        <p className='contactDesc'>Please fill out the form below to discuss any work opportunities.</p>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Enter Your Name' name="from_name" />
          <input type="email" className="email" placeholder='Enter Your E-mail' name="from_email" />
          <textarea name="message" rows="5" className='msg' placeholder='Enter Your Message' ></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>

          <div className="links">
            <img src={FacebookIcon} alt="Facebook-Icon" className="linkImg" />
            <img src={TwitterIcon} alt="Twitter-Icon" className="linkImg" />
            <img src={YoutubeIcon} alt="Youtube-Icon" className="linkImg" />
            <img src={InstagramIcon} alt="Instagram-Icon" className="linkImg" />
          </div>
        </form>
    </section>
  )
}

export default Contact;
