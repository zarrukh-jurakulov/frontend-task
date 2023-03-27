import React, { useState, useRef } from "react";
import classes from "./styles.module.css";
import jobs from "../../Api/jobs.json";
import Card from "../Card";

const Section = ({ data }) => {
  const [jobsList, setJobsList] = useState(jobs);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...jobsList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setJobsList(copyListItems);
  };

  return (
    <section key={data.id} className={classes.section}>
      <h5 className={classes.sectionHeader}>{data.header}</h5>
      {jobsList?.map((item, index) => (
        <div
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          key={index}
          draggable
        >
          <Card data={item} />
        </div>
      ))}
    </section>
  );
};

export default Section;
