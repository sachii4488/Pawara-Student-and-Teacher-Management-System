import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/RegistrationForm.css';

const RegistrationForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayNow = () => {
    if (paymentMethod === 'creditCard') {
      // Navigate to CreditCardForm when "Credit/Debit Card" is selected
      navigate('/credit-card');
    } else {
      // Handle other payment methods (like Bank Transfer or Cash Payment)
      alert('Please select a valid payment method.');
    }
  };

  return (
    <div className="registration-form">
      <h1>Registration Form For Student</h1>
      <form>
        <div className="section">
          <h2>Student</h2>
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Middle Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-row">
            <select>
             <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="date" placeholder="Date of Birth"
             
             />
            <select>
                <option value="">Grade</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>

            </select>
          </div>
          <textarea placeholder="Residential Address of Student"></textarea>
        </div>

        <div className="section">
          <h2>Parent/Guardian</h2>
          <div className="form-row">
            <select>
             <option value="">Choose Relation</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="mother">Guardian</option>
            </select>
            <input type="text" placeholder="Guardian First Name" />
            <input type="text" placeholder="Guardian Last Name" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />
          </div>
        </div>

        <div className="section">
          <h2>Payment Details</h2>
          <div className="payment-method">
            <label>
              <input
                type="radio"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={handlePaymentMethodChange}
              />
              Credit/Debit Cards
            </label>
            <label>
              <input
                type="radio"
                value="bankTransfer"
                checked={paymentMethod === 'bankTransfer'}
                onChange={handlePaymentMethodChange}
              />
              Bank Transfer Receipt
            </label>
            <label>
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={handlePaymentMethodChange}
              />
              Cash Payment
            </label>
          </div>
          <button type="button" className="submit-button" onClick={handlePayNow}>
            Pay Now
          </button>
        </div>
      </form>
      <button className="register-button">Register Now</button>
    </div>
  );
};

export default RegistrationForm;
