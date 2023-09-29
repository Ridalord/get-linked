import React from "react";
import Logo from "../Logo/Logo";



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
    </footer>
  )
}