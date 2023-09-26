import React from "react";
import classes from "./RewardSection.module.css"


export default function PrizesTemplate(props) {
  return (
    <div className={`${classes.prizeWrap} d-flex ${props.isFirst && classes.firstWrap}`}>
      <div className={classes.prizeMedal} style={{ backgroundImage: `url(${props.medal})` }}></div>
      <div className={`${classes.prizePosition} d-flex`}>
        <span>{props.position}</span>
        <span>Runner</span>
      </div>
      <h4>₦{props.prize}</h4>
    </div>
  )
}