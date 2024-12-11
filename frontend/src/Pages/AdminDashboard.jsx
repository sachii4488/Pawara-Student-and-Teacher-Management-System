import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/AdminDashboard.css';

import { Link } from 'react-router-dom'; 
import profilepic from '../Components/Assests/AdminProfile.jpeg'; 

const AdminDashboard = ({ username = "User", profilePic = "defaultProfilePic.jpg" }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile'); // Navigates to the profile page
  };

  const handleAnnouncementsClick = () => {
    navigate('/admin-announcement'); // Navigates to the AdminAnnouncement page
  };

  const handleDashboardClick = () => {
    navigate('/admin'); // Navigates to the AdminDashboard page
  };

  const handleTeachersClick = () => {
    navigate('/teachers'); // Navigates to the Teachers page
  };

  const handleStudentsClick = () => {
    navigate('/students'); // Navigates to the Students page
  };

  const handleAttendanceClick = () => {
    navigate('/attendance'); // Navigates to the Attendance page
  };

  const handleExamsClick = () => {
    navigate('/exams'); // Navigates to the Exams page
  };

  const handleTimeTableClick = () => {
    navigate('/timetable'); // Navigates to the Time Table page
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">PAWARA INSTITUTE</div>
        <div className="menu">
          <div className="menu-item" onClick={handleDashboardClick} style={{ cursor: 'pointer' }}>Dashboard</div>
          <div className="menu-item" onClick={handleTeachersClick} style={{ cursor: 'pointer' }}>Teachers</div>
          <div className="menu-item" onClick={handleStudentsClick} style={{ cursor: 'pointer' }}>Students</div>
          <div className="menu-item" onClick={handleAttendanceClick} style={{ cursor: 'pointer' }}>Attendance</div>
          <div className="menu-item" onClick={handleExamsClick} style={{ cursor: 'pointer' }}>Exams</div>
          <div className="menu-item" onClick={handleAnnouncementsClick} style={{ cursor: 'pointer' }}>Announcements</div>
          <div className="menu-item" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>Profile</div>
          <div className="menu-item" onClick={handleTimeTableClick} style={{ cursor: 'pointer' }}>Time Table</div>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="date">September 2030</div>
          <div className="profile" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
            <span>{username}</span>
            <img src={profilePic} alt="Profile" className="profile-image" />
          </div>
        </header>

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
