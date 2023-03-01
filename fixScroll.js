import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        {/* Set SchoolToTop as a component inside the router so that it works automatically
                 by the Use Effect Hook when the pathname changes */}
        <Navbar />
        <div id="section-1"></div>
        {/* Set a point for the button 'back to top' to return to */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Services />} />
          <Route path="/about" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/happen" element={<Happen />} />
        </Routes>
        <Contact />
        <Footer />
        <CopyRight />
      </Router>
    </>
  );
}

export default App;
