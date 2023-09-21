// import logo from './logo.svg';
import './App.css';
import IntroSection from './components/IntroSection/IntroSection';
import Landing from './components/Landing/Landing';
import NavigationBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <IntroSection/>
    </div>
  );
}

export default App;
