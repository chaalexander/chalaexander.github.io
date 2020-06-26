import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
// import Contact from "./components/Contact";
import Wrapper from "./components/Wraper";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {}

  render() {
    return (
      <Router>
        <>
          <Wrapper>
            <NavBar />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            {/* <Route path="/contact" component={Contact} /> */}
            <Footer />
          </Wrapper>
        </>
      </Router>
    );
  }
}

export default App;
