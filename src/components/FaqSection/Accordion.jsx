import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import classes from "./FaqContent.module.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function BasicAccordion() {
  // State variable to track the open/closed state of each Accordion
  const [expanded, setExpanded] = React.useState(-1);

  const handleAccordionClick = (index) => {
    if (expanded === index) {
      setExpanded(-1); // Collapse if already expanded
    } else {
      setExpanded(index);
    }
  };
  const accordionData = [
    {
      heading: 'Can I work on a project I started before the hackathon?',
      content: 'Content for Accordion 1 goes here.',
    },
    {
      heading: 'What happens if I need help during the hackathon?',
      content: 'Content for Accordion 2 goes here.',
    },
    {
      heading: "What happens if I don't have an idea for a project?",
      content: 'Content for Accordion 3 goes here.',
    },
    {
      heading: "Can I join a team or do I have to come with one?",
      content: "Can I join a team or do I have to come with one?"
    },
    {
      heading: "What happens after the hackathon ends",
      content: "What happens after the hackathon ends",
    },
    {
      heading: "Can I work on a project I started before the hackathon?",
      content: "Can I work on a project I started before the hackathon?"
    }
  ];

  return (
    <div>
      {accordionData.map((item, index) => (
        <Accordion key={index}
          expanded={expanded === index}
          onChange={() => handleAccordionClick(index)}
          className={classes.accordionWrap}>
          <AccordionSummary
            expandIcon={
              expanded === index ? <RemoveIcon className={classes.accordionIcon} /> : <AddIcon className={classes.accordionIcon} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.panelHeader}
          >
            <Typography>{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionContent}>
            <Typography className={classes.accordionContent}>
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
