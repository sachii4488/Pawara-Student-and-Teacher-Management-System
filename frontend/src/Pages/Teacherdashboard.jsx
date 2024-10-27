import React from 'react';
import './CSS/Teacherdashboard.css';
import profilepic from '../Components/Assests/AdminProfile.jpeg'; 



const TeacherDashboard = () => {
  return (
    <div className="Teacher-dashboard">
      <aside className="Teacher-sidebar">
        <div className="Teacher-logo">
        <img src={profilepic} alt="" />
          <h2>PAWARA INSTITUTE</h2>
        </div>
        <nav>
        <div className="menu">
    <div className="menu-item">Dashboard</div>
    <div className="menu-item">Time Table</div>
    <div className="menu-item">Announcements</div>
    <div className="menu-item">Profile</div>
    <div className="menu-item">Classes</div>
    <div className="menu-item">Attendance</div>
    <div className="menu-item">Exams</div>
    <div className="menu-item">Profile</div>
    <div className="menu-item">Settings</div>
  </div>
        </nav>
      </aside>

      <main className="Teacher-main-content">
        <header>
          <div className="Teacher-welcome-message">
            <h1>Welcome to your dashboard, Pawara Institute</h1>
            <p>pawarainstitute@gmail.com</p>
          </div>
          <div className="Teacher-logout">
            <button className="btn-logout">Log out</button>
          </div>
        </header>

        <section className="Teacher-content">
          <div className="Teacher-actions">
            <div className="Teacher-action-card">
              <h3>SCIENCE</h3>
             
            </div>

            <div className="Teacher-action-card">
              <h3>ENGLISH</h3>
             
            </div>

            <div className="Teacher-action-card">
              <h3>MATHS</h3>
              
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
};


export default TeacherDashboard;