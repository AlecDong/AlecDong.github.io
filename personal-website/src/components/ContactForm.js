import React from "react";

const ContactForm = () => {
  return (
    <form class="form" action="https://formspree.io/f/xeqweglr" method="POST">
      <input
        name="name"
        type="text"
        class="feedback-input"
        placeholder="Name"
        required
      />
      <input
        name="email"
        type="email"
        class="feedback-input"
        placeholder="Email"
        required
      />
      <textarea
        name="text"
        class="feedback-input"
        placeholder="Message"
        required
      ></textarea>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default ContactForm;
