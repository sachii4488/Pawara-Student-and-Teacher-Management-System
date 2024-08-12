import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginSignup from './Pages/Signup';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
    
      <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
