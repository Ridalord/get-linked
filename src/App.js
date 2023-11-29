import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavigationBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import

import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className='wrap'>
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/register' element={<Register />} /> 
            <Route path='/contact' element={<Contact />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
