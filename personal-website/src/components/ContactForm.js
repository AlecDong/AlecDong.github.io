import React from "react";

const ContactForm = () => {
  return (
    <form className="form" action="https://formspree.io/f/xeqweglr" method="POST">
      <input
        name="name"
        type="text"
        className="feedback-input"
        placeholder="Name"
        required
      />
      <input
        name="email"
        type="email"
        className="feedback-input"
        placeholder="Email"
        required
      />
      <textarea
        name="text"
        className="feedback-input"
        placeholder="Message"
        required
      ></textarea>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default ContactForm;
