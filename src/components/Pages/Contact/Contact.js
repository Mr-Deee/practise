import React ,{ useState,useRef }from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef()

  const sendemail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2ij7m8', 'template_7d6cpt7', form.current, 'N1l73HklBxqzJG95A')
      .then((result) => {
          console.log(result.text);
      
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();


  };
 

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form  ref={form}  onSubmit={sendemail}>
        <label htmlFor="name">Name:</label>
        <input
        className="iname"
          type="text"
          name="u_name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
            <label htmlFor="subject">Subject:</label>
        <input
        className="isubject"
        name="u_subject"
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
        name="u_email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
        name="u_message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit" >Send Email</button>
      </form>
    </div>
  );
};

export default Contact;