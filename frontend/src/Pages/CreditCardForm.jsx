import React, { useState } from 'react';
import './CSS/CreditCardForm.css';

const CreditCardForm = () => {
    const [cardDetails, setCardDetails] = useState({
        name: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        securityCode: '',
        paymentMethod: 'Visa',
        paymentAmount: ''  // Default to Visa or you can leave it empty
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({
            ...cardDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(cardDetails);
    };

    return (
        <div className="credit-card-form">
            <h2>Credit Card Details</h2>
            <div className="payment-method">
                <p>Payment Method</p>
                <div className="icons">
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Visa"
                            checked={cardDetails.paymentMethod === 'Visa'}
                            onChange={handleChange}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="Visa"
                            width="50"
                        />
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="MasterCard"
                            checked={cardDetails.paymentMethod === 'MasterCard'}
                            onChange={handleChange}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                            alt="MasterCard"
                            width="50"
                        />
                    </label>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name on card
                    <input
                        type="text"
                        name="name"
                        value={cardDetails.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </label>
                <label>
                    Card number
                    <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleChange}
                        placeholder="0000 0000 0000 0000"
                    />
                </label>
                <div className="expiration-security">
                    <label>
                        Expiration Month
                        <select
                            name="expirationMonth"
                            value={cardDetails.expirationMonth}
                            onChange={handleChange}
                        >
                            <option value="">Month</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>  
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </label>
                    <label>
                        Expiration Year
                        <select
                            name="expirationYear"
                            value={cardDetails.expirationYear}
                            onChange={handleChange}
                        >
                            <option value="">Year</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            
                        </select>
                    </label>
                </div>
                <label>
                    Card Security Code
                    <input
                        type="text"
                        name="securityCode"
                        value={cardDetails.securityCode}
                        onChange={handleChange}
                        placeholder="Enter security code"
                    />
                </label>
                 {/* Payment Amount Field */}
            <label className="payment-amount-label">
                Payment Amount
                <input
                    type="number"
                    name="paymentAmount"
                    value={cardDetails.paymentAmount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                />
            </label>
                <button type="submit" className="continue-button">Continue</button>
            </form>
        </div>
    );
};

export default CreditCardForm;
