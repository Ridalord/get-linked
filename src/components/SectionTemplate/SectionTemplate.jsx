import React from "react";
import classes from "./SectionTemplate.module.css"

export default function SectionTemplate(props) {
  return (
    <section className={`${classes.sectionWrap} d-flex`}>
      <div className={classes.sectionImage} style={{ backgroundImage: `url(${props.sectionImage})` }}></div>
      <div className={classes.sectionDetails}>
        <div className={classes.sectionHeading}>
          <span>{props.topHeader}</span>
          <span className={classes.coloredHeader}>{props.buttomHeader}</span>
        </div>
        <div className={classes.sectionContent}>
          {props.sectionContent}
        </div>
      </div>
    </section>
  )
}