import React from "react";
import Logo from "../Logo/Logo";
import Instagram from "./insta.svg"
import X from "./x.svg"
import Linkedin from "./linkedIn.svg"
import Facebook from "./facebook.svg"
import classes from "./Footer.module.css"



export default function Footer() {
  return (
    <footer className={`${classes.footer} d-flex justify-content-between`}>
      <div className="col-sm-12 col-lg-5 d-flex justify-content-between">
        <div>
          <Logo className={classes.footerLogo} />
          <p className={classes.logoSub}>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology.</p>
        </div>
        <div className={classes.termsPolicy}>
          <a href="#tou">Terms of Use</a>
          <a href="#prvcyplcy">Privacy Policy</a>
        </div>
      </div>
      <ul className={`${classes.footerList} col-lg-3 col-sm-12 d-flex`}>
        <li>
          Useful Links
        </li>
        <li>
          <a href="#overview">Overview</a>
        </li>
        <li>
          <a href="#timeline">Timeline</a>
        </li>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
        <li>
          <a href="#register">Register</a>
        </li>
        <li className={`${classes.followUs} d-flex`}>
          <span>Follow us</span>
          <span>
            <a href="#insta">
              <img src={Instagram} alt="Instagram" />
            </a>
          </span>
          <span>
            <a href="#x">
              <img src={X} alt="X" />
            </a>
          </span>
          <span>
            <a href="#linkedin">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </span>
          <span>
            <a href="#facebook">
              <img src={Facebook} alt="Facebook" />
            </a>
          </span>
        </li>
      </ul>
      <ul className={`${classes.footerList} col-lg-2 col-sm-12 d-flex ${classes.contact}`}>
        <li>Contact Us</li>
        <li>
          <a href="#tel">+234 6707653444</a>
        </li>
        <li>
          <a href="#address">27,Alara Street Yaba 100012 Lagos State</a>
        </li>
      </ul>
      <p className={`${classes.copyright} col-12 text-center`}>All rights reserved. &copy; getlinked Ltd.</p>
    </footer>
  )
}