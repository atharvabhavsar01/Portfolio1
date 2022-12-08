import React from 'react';
import './App.css'
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Portfolio from './components/Porfolio/Portfolio';
import Services from './components/Services/Services.jsx'
import Testimonial from './components/testimonial/Testimonial.jsx';
import Contact from './components/contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx';
import Timeline from './components/timeline/Timeline.jsx';
import Github from './components/githubrepo/Github.jsx';
import { themeContext } from './Context.js';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#0e0e0e" : "",
        color: darkMode ? "white" : "",
      }}
    >
     <Navbar />
     <Intro />
     <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Timeline />
      <Github />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
