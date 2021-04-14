import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./styles.css";

function BlockThree() {
  return (
    <div className="home--loggedOut--contentArea--block3">
      <h2 id="faqs" className="home--loggedOut--contentArea--block3--header">
        FAQS
      </h2>
      <Accordion className="home--loggedOut--contentArea--block3--accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="home--loggedOut--contentArea--block3--accordion--header"
        >
          <Typography className="home--loggedOut--contentArea--block3--accordion--header--text">
            Q) Question Goes Here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>A) Answer goes here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="home--loggedOut--contentArea--block3--accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="home--loggedOut--contentArea--block3--accordion--header"
        >
          <Typography className="home--loggedOut--contentArea--block3--accordion--header--text">
            Q) Question Goes Here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>A) Answer goes here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="home--loggedOut--contentArea--block3--accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className="home--loggedOut--contentArea--block3--accordion--header"
        >
          <Typography className="home--loggedOut--contentArea--block3--accordion--header--text">
            Q) Question Goes Here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>A) Answer goes here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="home--loggedOut--contentArea--block3--accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          className="home--loggedOut--contentArea--block3--accordion--header"
        >
          <Typography className="home--loggedOut--contentArea--block3--accordion--header--text">
            Q) Question Goes Here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>A) Answer goes here</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="home--loggedOut--contentArea--block3--accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          className="home--loggedOut--contentArea--block3--accordion--header"
        >
          <Typography className="home--loggedOut--contentArea--block3--accordion--header--text">
            Q) Question Goes Here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>A) Answer goes here</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default BlockThree;
