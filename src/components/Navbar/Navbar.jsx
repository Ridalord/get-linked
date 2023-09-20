import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import classes from "./Navbar.module.css"
import Button from "../Button/Button";


export default function NavigationBar(){
  return (
    <Navbar expand="lg" className={classes.background}>
      <Navbar.Brand href="#home">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#home">Timeline</Nav.Link>
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
          <Nav.Link href="register"><Button name="Register"/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}