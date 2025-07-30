import React, { useState } from 'react';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        emailAddress: '',
        message: ''
    })

    const userInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

const submit = async (e) => {
  e.preventDefault();
  console.log(formData);

  try {
    const response = await fetch('/api/contact/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (response.ok) {
      alert('Email sent successfully!');
      window.location.href = '/';
    } else {
      alert('Failed to send email: ' + result.error);
    }
  } catch (error) {
    alert('An error occurred while sending the email.');
    console.error(error);
  }
};

    // Renders the information and the contact form
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>Ahmad S. Qaher</p>
            <p>(647) 533-3711</p>
            <p>sqaher@my.centennialcollege.ca</p>
            <h1>Contact Me</h1>
            <form onSubmit={submit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={userInput} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={userInput} />
                <input type="text" name="contactNumber" placeholder="Contact Number" onChange={userInput} />
                <input type="email" name="emailAddress" placeholder="Email Address" onChange={userInput} />
                <textarea name="message" placeholder="Message" onChange={userInput}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;