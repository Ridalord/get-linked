import React from "react";
import Button from "../Button/Button";
import classes from "./PolicySection.module.css"



export default function PolicyContent() {
  return (
    <div className={classes.contentWrap}>
      <p className={classes.update}>Last updated on September 12, 2023</p>
      <p>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
      <div className={`${classes.licensingWrap} d-flex`}>
        <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
        <h4>Licensing Policy</h4>
        <h5>Here are terms of our Standard License:</h5>
        <ul className={classes.licenceList}>
          <li>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
          <li>You are licensed to use the item available at any free source sites, for your project developement</li>
        </ul>
        <Button name="Read More" className={classes.button} />
      </div>
    </div>
  )
}