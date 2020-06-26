import React, { Component } from "react";
import portfolioInfo from "../../portfolio.json";
import Cards from "../Cards";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioInfo,
    };
  }

  render() {
    return (
      <div className="container port" id="portfolio">
        <div className="row">
          {this.state.portfolioInfo.map((portfolioInfo) => (
            <Cards
              key={portfolioInfo.id}
              cardImage={portfolioInfo.cardImage}
              cardTitle={portfolioInfo.cardTitle}
              cardText={portfolioInfo.cardText}
              liveLink={portfolioInfo.liveLink}
              code={portfolioInfo.code}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
