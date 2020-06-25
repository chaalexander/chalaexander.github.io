import React from 'react';
import { Link } from "react-router-dom";


const styles = {
    card: {
        width: "18rem",
        height: "350px"
    }

}

function Cards(props) {
    return (
    
    <div className="col-sm">
    <div className="card" style={styles.card}>
    <img src={props.cardImage} className="card-img-top" alt={props.title}>
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.cardText}</p>
    <Link to={props.liveLink} target="_blank" className="btn btn-dark">Live Link</Link>
    <Link to={props.code} target="_blank" className="btn btn-dark">Code</Link>
    </div>
    </div>
    </div>
    
    );
}

export default Cards;