//here is the app js file //

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
        <Navbar />
        <div id="section-1"></div>{" "}
        {/* Here is the point at which the back up button returns */}
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

///// here is the copyright where the button 'go to top' located  /////

import "../../index.css";
import "./copyright.css";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <section id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-9">
            <p>
              Copyright © 2023 <i>TAREK GHALI</i>
              <Link rel="nofollow" to="/" target="_parent"></Link>
            </p>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-3">
            <Link
              to="#section-1"
              className="smoothScroll fa fa-angle-up"
            ></Link>
            // This is the back to top button, we decide where to move it, "
            move to the point that has the id #section-1" //
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyRight;
