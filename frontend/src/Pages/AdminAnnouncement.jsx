import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/AdminAnnouncement.css';

const AdminAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');

  useEffect(() => {
    // Fetch announcements from the backend
    axios.get('/api/announcements')
      .then(response => {
        setAnnouncements(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the announcements!', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Post new announcement to the backend
    axios.post('/api/announcements', { content: newAnnouncement })
      .then(response => {
        setAnnouncements([...announcements, response.data]);
        setNewAnnouncement('');
      })
      .catch(error => {
        console.error('There was an error posting the announcement!', error);
      });
  };

  return (
    <div className="announcement-container">
      <div className="announcement-content">
        <h1 className="announcement-title">Announcement</h1>
        
        {/* Announcement Form */}
        <form className="announcement-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="announcement" className="form-label">Announcement:</label>
            <textarea
              id="announcement"
              className="form-textarea"
              value={newAnnouncement}
              onChange={(e) => setNewAnnouncement(e.target.value)}
              required
              rows={4}
              cols={50}
            />
          </div>
          <button type="submit" className="form-button">Send Announcement</button>
        </form>

        {/* Display Announcements */}
        <h2 className="announcements-title">Announcements</h2>
        <div className="announcement-list">
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement-item">
              <p className="announcement-content">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAnnouncement;
