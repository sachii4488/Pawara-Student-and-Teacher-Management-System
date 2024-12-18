import React from 'react';
import './CSS/AdminDashboard.css';

import { Link } from 'react-router-dom'; 
import profilepic from '../Components/Assests/AdminProfile.jpeg'; 


const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
     <aside className="sidebar">
  <div className="logo">PAWARA INSTITUTE</div>
  <div className="menu">
    <div className="menu-item">Dashboard</div>
    <div className="menu-item">Teachers</div>
    <div className="menu-item">Students</div>
    <div className="menu-item">Attendance</div>
    <div className="menu-item">Exams</div>
    <Link to="/Announcement" className="menu-item">Announcement</Link>
    <div className="menu-item">Time Table</div>
    <div className="menu-item">Setting</div>
    
  </div>
</aside>

      <main className="main-content">
        <header className="header">
          <div className="date">September 2030</div>
          <div className="profile">
            <span>Sachi Disanayaka</span>
            <img src={profilepic} alt="" />
          </div>
        </header>
        <section className="dashboard">
          <div className="cards">
            <div className="card">Students: 124,684</div>
            <div className="card">Teachers: 12,379</div>
            <div className="card">Staffs: 29,300</div>
            <div className="card">Awards: 95,800</div>
          </div>
          <div className="stats-section">
            <div className="chart">
              <h3>Attendance</h3>
              {/* Attendance chart placeholder */}
            </div>
            <div className="students-gender">
              <h3>Students</h3>
              {/* Gender breakdown placeholder */}
            </div>
          </div>
          <div className="activities-section">
            <div className="earnings-chart">
              <h3>Earnings</h3>
              {/* Earnings chart placeholder */}
            </div>
            <div className="agenda">
              <h3>Agenda</h3>
              {/* Agenda placeholder */}
            </div>
          </div>
          <div className="messages-section">
            <h3>Messages</h3>
            <ul className="messages">
              <li>Dr. Lila Ramirez: Attendance report reminder</li>
              <li>Ms. Heather Morris: Training on staff tools</li>
              <li>Mr. Carl Jenkins: Budget review meeting</li>
              {/* More messages */}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
