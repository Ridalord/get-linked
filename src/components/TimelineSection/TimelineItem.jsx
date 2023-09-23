import React from "react";
import classes from "./TimelineSection.module.css"


export default function TimelineItem(props) {
  return (
    <div className={`${classes.itemWrap} ${props.className || ""}`}>
      <div>
        <h4>{props.header}</h4>
        <p>{props.text}</p>
      </div>
      <div>
        <span>{props.index}</span>
        <h4>{props.date}</h4>
      </div>
    </div>
  )
}