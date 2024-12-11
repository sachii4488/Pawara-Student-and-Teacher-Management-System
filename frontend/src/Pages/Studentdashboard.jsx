import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/StudentDashboard.css';
import logo from '../Components/Assests/logo.png';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/student-dashboard'); // Navigates to the StudentDashboard page
  };

  const handleTimeTableClick = () => {
    navigate('/timetable'); // Navigates to the Time Table page
  };

  const handleAnnouncementsClick = () => {
    navigate('/announcements'); // Navigates to the Announcements page
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigates to the Profile page
  };

  const handleAttendanceClick = () => {
    navigate('/attendance'); // Navigates to the Attendance page
  };

  const handleClassesClick = () => {
    navigate('/classes'); // Navigates to the Classes page
  };

  const handleExamsClick = () => {
    navigate('/exams'); // Navigates to the Exams page
  };

  return (
    <div className="student-dashboard">
      <aside className="student-sidebar">
        <div className="student-logo">
          <img src={logo} alt="Logo" />
          <h2>PAWARA INSTITUTE</h2>
        </div>
        <nav>
          <ul>
            <li onClick={handleDashboardClick} style={{ cursor: 'pointer' }}>Student Dashboard</li>
            <li onClick={handleTimeTableClick} style={{ cursor: 'pointer' }}>Time Table</li>
            <li onClick={handleAnnouncementsClick} style={{ cursor: 'pointer' }}>Announcements</li>
            <li onClick={handleProfileClick} style={{ cursor: 'pointer' }}>Profile</li>
            <li onClick={handleAttendanceClick} style={{ cursor: 'pointer' }}>Attendance</li>
            <li onClick={handleClassesClick} style={{ cursor: 'pointer' }}>Classes</li>
            <li onClick={handleExamsClick} style={{ cursor: 'pointer' }}>Exams</li>
          </ul>
        </nav>
      </aside>

      <main className="student-main-content">
        <header>
          <div className="student-welcome-message">
            <h1>Welcome to your dashboard, Pawara Institute</h1>
            <p>pawarainstitute@gmail.com</p>
          </div>
          <div className="student-logout">
            <button className="btn-logout">Log out</button>
          </div>
        </header>

        <section className="student-content">
          <div className="student-actions">
            <div className="student-action-card">
              <h3>SCIENCE</h3>
            </div>

            <div className="student-action-card">
              <h3>ENGLISH</h3>
            </div>

            <div className="student-action-card">
              <h3>MATHS</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;
