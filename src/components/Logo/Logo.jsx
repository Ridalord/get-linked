import React from "react";
import classes from "./Logo.module.css"


export default function Logo(props){
  return (
    <div className={`${classes.logo} ${props.className || ""}`}>get<span className={classes.linked}>linked</span></div>
  )
}