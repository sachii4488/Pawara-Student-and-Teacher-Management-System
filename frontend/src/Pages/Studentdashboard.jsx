import React from 'react';
import './CSS/StudentDashboard.css';
import logo from '../Components/Assests/logo.png';

const AdminDashboard = () => {
  return (
    <div className="Student-dashboard">
      <aside className="Student-sidebar">
        <div className="Student-logo">
        <img src={logo} alt="" />
          <h2>PAWARA INSTITUTE</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#dashboard">Student Dashboard</a></li>
            <li><a href="#teachers"> Time Table</a></li>
            <li><a href="#students">Announcement/Classes</a></li>
            
            <li><a href="#settings">Profile</a></li>
            <li><a href="#Timetable">Attendance</a></li>
            <li><a href="#Announcement">Classes</a></li>
            <li><a href="#exams">Exams</a></li>
            
            
          </ul>
        </nav>
      </aside>

      <main className="Student-main-content">
        <header>
          <div className="Student-welcome-message">
            <h1>Welcome to your dashboard, Pawara Institute</h1>
            <p>pawarainstitute@gmail.com</p>
          </div>
          <div className="Student-logout">
            <button className="btn-logout">Log out</button>
          </div>
        </header>

        <section className="Student-content">
          <div className="Student-actions">
            <div className="Student-action-card">
              <h3>SCIENCE</h3>
             
            </div>

            <div className="Student-action-card">
              <h3>ENGLISH</h3>
             
            </div>

            <div className="Student-action-card">
              <h3>MATHS</h3>
              
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
};


export default AdminDashboard;