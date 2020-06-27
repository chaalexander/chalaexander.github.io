import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Wrapper from "./components/Wraper";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Wrapper>
            <NavBar />
            <Route exact path="/reactPortfolio" component={About} />
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Footer />
          </Wrapper>
        </>
      </Router>
    );
  }
}

export default App;
