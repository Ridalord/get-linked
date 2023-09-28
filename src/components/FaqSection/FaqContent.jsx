import React from "react";
import Accordion from "./Accordion";
import classes from "./FaqContent.module.css"


export default function FaqContent() {
  return (
    <div>
      <p className={classes.text}>
        We got answers to the questions that you might
        want to ask about getlinked Hackathon 1.0
      </p>
      <Accordion/>
    </div>
  )
}
