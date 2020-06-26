import React from "react";


const styles = {
  card: {
    width: "18rem",
    height: "350px",
    margin: "45px",
  },
};

function Cards(props) {
  return (
    <div className="card" style={styles.card}>
      <img src={props.cardImage} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <a href={props.liveLink} target="_blank" className="btn btn-dark">
          Live Link
        </a>
        <a href={props.code} target="_blank" className="btn btn-dark">
          Code
        </a>
      </div>
    </div>
  );
}

export default Cards;
