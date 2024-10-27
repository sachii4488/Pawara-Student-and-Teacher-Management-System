import React from 'react';
import './Pages/TeacherDashboard.css';
import logo from '../Components/Assests/logo.png';

const TeacherDashboard = () => {
  return (
    <div className="Teacher-dashboard">
      <aside className="Teacher-sidebar">
        <div className="Teacher-logo">
        <img src={logo} alt="" />
          <h2>PAWARA INSTITUTE</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#dashboard">Teacher Dashboard</a></li>
            <li><a href="#teachers"> Time Table</a></li>
            <li><a href="#Teachers">Announcement/Classes</a></li>
            
            <li><a href="#settings">Profile</a></li>
            <li><a href="#Timetable">Attendance</a></li>
            <li><a href="#Announcement">Classes</a></li>
            <li><a href="#exams">Exams</a></li>
            
            
          </ul>
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