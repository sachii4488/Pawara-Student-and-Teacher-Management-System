import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/AdminDashboard.css';

const AdminDashboard = ({ username = "User", profilePic = "defaultProfilePic.jpg" }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile'); // Navigates to the profile page
  };

  const handleAnnouncementsClick = () => {
    navigate('/admin-announcement'); // Navigates to the AdminAnnouncement page
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">SchoolHub</div>
        <ul className="menu">
          <li>Dashboard</li>
          <li>Teachers</li>
          <li>Students</li>
          <li>Attendance</li>
          <li>Finance</li>
          <li onClick={handleAnnouncementsClick} style={{ cursor: 'pointer' }}>Announcements</li>
          <li>Calendar</li>
          <li onClick={handleProfileClick} style={{ cursor: 'pointer' }}>Profile</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="date">September 2030</div>
          <div className="profile" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
            <span>{username}</span>
            <img src={profilePic} alt="Profile" className="profile-image" />
          </div>
        </header>

        {/* Dashboard Section */}
        <section className="dashboard">
          <div className="cards">
            <div className="card">Students: 124,684</div>
            <div className="card">Teachers: 12,379</div>
            <div className="card">Staff: 29,300</div>
            <div className="card">Awards: 95,800</div>
          </div>

          <div className="stats-section">
            <div className="chart">
              <h3>Attendance</h3>
              {/* Placeholder for Attendance Chart */}
            </div>
            <div className="students-gender">
              <h3>Students</h3>
              {/* Placeholder for Gender Breakdown */}
            </div>
          </div>

          <div className="activities-section">
            <div className="earnings-chart">
              <h3>Earnings</h3>
              {/* Placeholder for Earnings Chart */}
            </div>
            <div className="agenda">
              <h3>Agenda</h3>
              {/* Placeholder for Agenda */}
            </div>
          </div>

          <div className="messages-section">
            <h3>Messages</h3>
            <ul className="messages">
              <li>Dr. Lila Ramirez: Attendance report reminder</li>
              <li>Ms. Heather Morris: Training on staff tools</li>
              <li>Mr. Carl Jenkins: Budget review meeting</li>
              {/* Additional messages */}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
