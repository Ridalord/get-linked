// import logo from './logo.svg';
import './App.css';
// import CriteriaSection from './components/CriteriaSection/CriteriaSection';
// import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
// import Guidelinesection from './components/GuidelineSection/GuidelineSection';
import Home from './components/Home/Home';
// import IntroSection from './components/IntroSection/IntroSection';
// import Landing from './components/Landing/Landing';
import NavigationBar from './components/Navbar/Navbar';
// import PolicySection from './components/PolicySection/PolicySection';
// import RewardSection from './components/RewardSection/RewardSection';
// import SponsorSection from './components/SponsorSection/SponsorSection';
// import TimelineSection from './components/TimelineSection/TimelineSection';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Register from './components/Register/Register';


function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        {/* <Landing />
        <IntroSection />
        <Guidelinesection />
        <CriteriaSection />
        <FaqSection/>
        <TimelineSection />
        <RewardSection />
        <SponsorSection />
        <PolicySection /> */}
        <Routes>
          <Route path='/' exact Component={Home} />
          {/* <Home/> */}
            <Route path='/register' Component={Register} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
