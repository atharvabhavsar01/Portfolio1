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

function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Timeline />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
