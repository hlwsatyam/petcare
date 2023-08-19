import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import HomePage from './Components/HomePage/HomePage';
import PetRegistration from './Components/PetRegistration/PetRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shoping from './Components/Shop/Shoping';
import Contact from './Components/Contact/Contact';
import Consult from './Components/Consult/Consult';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <LoginSignup /> */}
      {/* <HomePage /> */}
      {/* <PetRegistration /> */}

      <BrowserRouter>
        <NavBar />
        <div className='container-fluid   pt-5 bg-warning-subtle'></div>
        <Routes>
          <Route path='/' element={<LoginSignup />} />
          <Route path='/petregistration' element={<PetRegistration />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/shop' element={<Shoping />} />
          <Route path='/consult' element={<Consult />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}
export default App;
