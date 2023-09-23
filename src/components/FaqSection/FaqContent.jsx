import React from "react";
import Accordion from "./Accordion";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

export default function FaqContent() {
  return (
    <div>
      <p>
        We got answers to the questions that you might
        want to ask about getlinked Hackathon 1.0
      </p>
      <Accordion/>
      {/* <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Accordion Item #1
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Content for Accordion Item #1 goes here.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion> */}
    </div>
  )
}
