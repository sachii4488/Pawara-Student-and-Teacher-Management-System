import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import RegistrationForm from './Pages/RegistrationForm';
import CreditCardForm from './Pages/CreditCardForm';
import PaymentForm from './Pages/PaymentForm';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import StudentDashboard from './Pages/Studentdashboard';
import AdminProfile from './Pages/AdminProfile';
import AdminAnnouncement from './Pages/AdminAnnouncement';
import Teacherdashboard from './Pages/Teacherdashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/credit-card" element={<CreditCardForm />} />
          <Route path="/bank-transfer" element={<PaymentForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/announcement" element={<AdminAnnouncement />} />
          <Route path="/teacher" element={<Teacherdashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
