import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/home/index.jsx';
import About from './containers/about/index.jsx';
import Skills from './containers/skills/index.jsx';
import Portfolio from './containers/portfolio/index.jsx';
import Contact from './containers/contact/index.jsx';
import Navbar from './component/navBar/index.jsx';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./utils/particles";

function App() {
  const location = useLocation();

  const handleInit = async (engine) => {
    await loadFull(engine);
  }

  const renderParticleJsInHomepage = location.pathname === "/";

  return (
    <div className="App">
      {/* Particles hanya di Home */}
      {renderParticleJsInHomepage && (
        <Particles id="tsparticles" init={handleInit} options={particlesOptions} />
      )}

      {/* Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <div className="App__main-page-content">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
