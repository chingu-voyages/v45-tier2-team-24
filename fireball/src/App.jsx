import { useState, useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import './aos.css'
// components import
import Hero from './components/hero/Hero'
import Team from './components/team/Team';


const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container flex justify-center">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="main-content" data-aos="flip-left">
          <Hero />
          <Team />
        </div>
      )}
    </div>
  );
};

export default App;