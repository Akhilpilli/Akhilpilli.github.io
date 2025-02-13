import React, { useEffect }  from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ProfessionalTimeline from "./components/ProfessionalTimeline";
import MouseClickEffect from "./components/MouseClickEffect";

import "./App.css";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const fullscreenDivHeight = document.querySelector(".about-description").offsetHeight;

      if (window.scrollY > fullscreenDivHeight) {
        navbar.style.display = "flex";  // Show the navbar when scrolled beyond the fullscreen div
      } else {
        navbar.style.display = "none";  // Hide the navbar when within the fullscreen div
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener on unmount
    };
  }, []);
  return (
    <Router>
      <MouseClickEffect />
      <section id="about"><About /></section>
      <Navbar />
      <ProfessionalTimeline />
    </Router>
  );
};

export default App;
