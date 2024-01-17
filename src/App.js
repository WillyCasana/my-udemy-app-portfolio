
import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Particles from '@tsparticles/react'
import AboutMe from './screens/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <AboutMe />
    </div>
  );
}

export default App;
