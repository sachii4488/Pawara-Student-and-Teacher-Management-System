import React, { useState } from 'react';


import './CSS/PaymentForm.css';

function PaymentForm() {
  const [name, setName] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ name, nicNumber, email, phoneNumber, file });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Payment Receipt Details</h2>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>NIC Number</label>
        <input
          type="text"
          value={nicNumber}
          onChange={(e) => setNicNumber(e.target.value)}
          required
        />

        <h3>Contact information</h3>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label>Please Upload Your Payment Receipt</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,.pdf,.doc,.docx"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PaymentForm;
