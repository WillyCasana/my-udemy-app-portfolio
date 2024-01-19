
import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Particles from '@tsparticles/react'
import AboutMe from './screens/aboutMe/AboutMe';

import Technologies from './screens/technologies/Technologies';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <AboutMe />
      <Technologies />
    </div>
  );
}

export default App;
