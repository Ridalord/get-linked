import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavigationBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className='wrap'>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/register' Component={Register} />
            <Route path='/contact' Component={Contact}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
