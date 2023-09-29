import React from "react";
import Logo from "../Logo/Logo";
import Instagram from "./insta.svg"
import X from "./x.svg"
import Linkedin from "./linkedIn.svg"
import Facebook from "./facebook.svg"



export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Logo />
          <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology.</p>
        </div>
        <div>
          <a href="#tou">Terms of Use</a>
          <a href="#prvcyplcy">Privacy Policy</a>
        </div>
      </div>
      <ul>
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
        <li>
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
    </footer>
  )
}