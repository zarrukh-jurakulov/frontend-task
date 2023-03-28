import React, { useState, useEffect, useRef } from "react";
import classes from "./styles.module.css";
import jobs from "../../Api/jobs.json";
import Card from "../Card";

const Section = ({ data }) => {
  const [jobsList, setJobsList] = useState(jobs);
  const [listLength, setListLength] = useState();
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

  const drop = () => {
    const copyListItems = [...jobsList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setJobsList(copyListItems);
  };

  useEffect(() => {
    setListLength(jobsList.length);
  }, []);

  return (
    <section key={data.id} className={classes.section}>
      <h5 className={classes.sectionHeader}>
        {data.header} - {listLength}
      </h5>
      <div className={classes.sectionBody}>
        {jobsList.map((item, index) => (
          <div
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            <Card data={item} headerStatus={data.status} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
