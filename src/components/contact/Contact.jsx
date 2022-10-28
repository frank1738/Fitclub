import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vmdt0nj',
        'template_n2sskqr',
        form.current,
        'SgVCyCcTCuhfyDPu5'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact">
      <div className="contact-left">
        <hr />
        <div>
          <span className="outline-text">READY TO </span>
          <span>LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="outline-text">WITH US?</span>
        </div>
      </div>
      <div className="contact-right">
        <form
          action=""
          className="email-container"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
