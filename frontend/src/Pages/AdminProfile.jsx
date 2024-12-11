import React, { useState, useEffect } from 'react';
import './CSS/AdminProfile.css';

const UserProfile = ({ profileName, profileEmail }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="profile-container">
      <h1 className="welcome-title">Profile Management {profileName}</h1>
      <p className="date">{currentDate}</p>

      <div className="profile-header">
        <img
          src={selectedImage || "https://via.placeholder.com/100"}
          alt="Profile"
          className="profile-image"
        />
        <div>
          <h2 className="profile-name">{profileName}</h2>
          <p className="profile-email">{profileEmail}</p>
        </div>
      </div>

      <div className="form">
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" placeholder="Your Full Name" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <select className="form-select">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">School</label>
          <input type="text" placeholder="Your School Name" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Age</label>
          <input type="number" placeholder="Your Age" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Address</label>
          <input type="text" placeholder="Your Address" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Contact Number</label>
          <input type="text" placeholder="Your Contact Number" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" placeholder="Your Email" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Upload Photo</label>
          <input type="file" onChange={handleImageChange} className="form-input" />
        </div>
      </div>

      <div className="button-section">
        <button className="edit-button">Edit</button>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
};

export default UserProfile;
