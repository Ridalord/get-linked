// import logo from './logo.svg';
import './App.css';
import CriteriaSection from './components/CriteriaSection/CriteriaSection';
import FaqSection from './components/FaqSection/FaqSection';
import Guidelinesection from './components/GuidelineSection/GuidelineSection';
import IntroSection from './components/IntroSection/IntroSection';
import Landing from './components/Landing/Landing';
import NavigationBar from './components/Navbar/Navbar';
import PolicySection from './components/PolicySection/PolicySection';
import RewardSection from './components/RewardSection/RewardSection';
import SponsorSection from './components/SponsorSection/SponsorSection';
import TimelineSection from './components/TimelineSection/TimelineSection';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <IntroSection />
      <Guidelinesection />
      <CriteriaSection />
      <FaqSection/>
      <TimelineSection />
      <RewardSection />
      <SponsorSection />
      <PolicySection/>
    </div>
  );
}

export default App;
