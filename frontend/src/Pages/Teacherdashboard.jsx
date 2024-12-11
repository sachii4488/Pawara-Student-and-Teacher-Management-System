import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Teacherdashboard.css';
import profilepic from '../Components/Assests/AdminProfile.jpeg'; 

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/teacher-dashboard'); // Navigates to the TeacherDashboard page
  };

  const handleTimeTableClick = () => {
    navigate('/timetable'); // Navigates to the Time Table page
  };

  const handleAnnouncementsClick = () => {
    navigate('/announcements'); // Navigates to the Announcements page
  };

  const handleClassesClick = () => {
    navigate('/classes'); // Navigates to the Classes page
  };

  const handleAttendanceClick = () => {
    navigate('/attendance'); // Navigates to the Attendance page
  };

  const handleExamsClick = () => {
    navigate('/exams'); // Navigates to the Exams page
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigates to the Profile page
  };

  return (
    <div className="teacher-dashboard">
      <aside className="teacher-sidebar">
        <div className="teacher-logo">
          <img src={profilepic} alt="Profile" />
          <h2>PAWARA INSTITUTE</h2>
        </div>
        <nav>
          <div className="menu">
            <div className="menu-item" onClick={handleDashboardClick} style={{ cursor: 'pointer' }}>Dashboard</div>
            <div className="menu-item" onClick={handleTimeTableClick} style={{ cursor: 'pointer' }}>Time Table</div>
            <div className="menu-item" onClick={handleAnnouncementsClick} style={{ cursor: 'pointer' }}>Announcements</div>
            <div className="menu-item" onClick={handleClassesClick} style={{ cursor: 'pointer' }}>Classes</div>
            <div className="menu-item" onClick={handleAttendanceClick} style={{ cursor: 'pointer' }}>Attendance</div>
            <div className="menu-item" onClick={handleExamsClick} style={{ cursor: 'pointer' }}>Exams</div>
            <div className="menu-item" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>Profile</div>
          </div>
        </nav>
      </aside>

      <main className="teacher-main-content">
        <header>
          <div className="teacher-welcome-message">
            <h1>Welcome to your dashboard, Pawara Institute</h1>
            <p>pawarainstitute@gmail.com</p>
          </div>
          <div className="teacher-logout">
            <button className="btn-logout">Log out</button>
          </div>
        </header>

        <section className="teacher-content">
          <div className="teacher-actions">
            <div className="teacher-action-card">
              <h3>SCIENCE</h3>
            </div>

            <div className="teacher-action-card">
              <h3>ENGLISH</h3>
            </div>

            <div className="teacher-action-card">
              <h3>MATHS</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;
