import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
//import LoginSignup from './Pages/Signup';
//import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import RegistrationForm from './Pages/RegistrationForm';
import CreditCardForm from './Pages/CreditCardForm';

function App() {
  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
    
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<RegistrationForm/>} />
      <Route path="/credit-card" element={<CreditCardForm />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;
