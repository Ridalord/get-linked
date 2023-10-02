import React from "react";
import classes from "./Button.module.css"
import { Link } from "react-router-dom";


export default function Button(props) {
  return (
    <button className={`${classes.button} ${props.className}`} onClick={props.onClick}>
      <Link to={props.location}>
        {props.name}
      </Link>
    </button>
  )
}