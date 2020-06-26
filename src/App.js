import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
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
          <NavBar />
          {/* <Wrapper></Wrapper> */}
          <Footer />
        </>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;
