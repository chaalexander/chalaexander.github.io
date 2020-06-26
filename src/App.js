import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Contact from "./components/pages/Contact";
import Wrapper from "./components/Wraper";
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

            <Contact />

            <Footer />
          </Wrapper>
        </>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;
