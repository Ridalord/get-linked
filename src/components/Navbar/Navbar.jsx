import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import classes from "./Navbar.module.css"
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
// import { Link } from "react-router-dom";

const ToggleIcons = {
  default: (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
        <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white" />
      </svg>
    </div>
  ),
  custom: (
    <div>
      {/* Your custom toggle icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_181_74)" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12" fill="white">
          X
        </text>
        <defs>
          <linearGradient id="paint0_linear_181_74" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
            <stop stop-color="#903AFF" />
            <stop offset="1" stop-color="#FF26B9" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  )
};
console.log(ToggleIcons.default)
export default function NavigationBar() {
  const [isLogoVisible, setLogoVisible] = useState(true);
  const [toggleIcon, setToggleIcon] = useState("default");

  const handleToggleClick = () => {
    // Toggle the visibility of the logo when the toggle button is clicked
    setLogoVisible(!isLogoVisible);

    // Toggle between the custom and default icons
    setToggleIcon(toggleIcon === "default" ? "custom" : "default");
  };
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div ref={ref} onClick={onClick} className="ml-auto d-lg-none">
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none" style={{visibility: toggleIcon === "default" ? "visible" : "hidden"}}>
        <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white" />
      </svg> */}
      {ToggleIcons[toggleIcon]}
    </div>
  ));
  return (
    <Navbar expand="lg" className={classes.navWrap}>
      <Navbar.Brand href="/" style={{ visibility: isLogoVisible ? 'visible' : 'hidden' }}>
        <Logo/>
      </Navbar.Brand>
      <Navbar.Toggle as={CustomToggle} onClick={handleToggleClick} aria-controls="basic-navbar-nav">

      </Navbar.Toggle>
        
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className={classes.navItemWrap}>
          <Nav.Link href="/register">Timeline</Nav.Link>
          <Nav.Link href="#about">Overview</Nav.Link>
          <Nav.Link href="#services">FAQs</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="register"><Button name="Register" location="register"/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}