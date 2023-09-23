// import logo from './logo.svg';
import './App.css';
import CriteriaSection from './components/CriteriaSection/CriteriaSection';
import FaqSection from './components/FaqSection/FaqSection';
import Guidelinesection from './components/GuidelineSection/GuidelineSection';
import IntroSection from './components/IntroSection/IntroSection';
import Landing from './components/Landing/Landing';
import NavigationBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <IntroSection />
      <Guidelinesection />
      <CriteriaSection />
      <FaqSection/>
    </div>
  );
}

export default App;
