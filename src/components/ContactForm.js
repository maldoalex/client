import React,{ Fragment, useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {firstName, lastName, title, email, message};
      const response = await fetch('http://localhost:5000/contactForms', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

return (
  <Fragment>
    <form action="" onSubmit={onSubmitForm}>
      <div className="form-row">
        <div className="input-box">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="input-box">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="textarea">
        <div className="input-box">
          <textarea
            cols="30"
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="form-row">
        <div className="input-box">
          <button className="form-btn">Submit</button>
        </div>
      </div>
    </form>
  </Fragment>
);
}

export default ContactForm;