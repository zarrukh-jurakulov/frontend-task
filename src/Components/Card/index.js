import React from "react";
import classes from "./styles.module.css";

const Card = ({ data }) => {
  return (
    <div className={classes.cardContainer}>
      <h5>{data.jobName}</h5>
      <p>{data.description}</p>
      <div>
        <span>{data.status}</span>
        <span>{data.people}</span>
        <span>{data.documents}</span>
      </div>
      <div>
        <p>{data.recruiterName}</p>
      </div>
    </div>
  );
};

export default Card;
