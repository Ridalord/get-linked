// import logo from './logo.svg';
import './App.css';
import CriteriaSection from './components/CriteriaSection/CriteriaSection';
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
      <CriteriaSection/>
    </div>
  );
}

export default App;
