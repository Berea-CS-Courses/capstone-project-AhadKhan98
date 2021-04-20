/**
 * Only shows when userStatus="helpee"
 * Allows user to enter information related to their problem
 */
import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import "./styles.css";

function InputProblem({ updateScreenAndUpdateState }) {
  const [problemValue, setProblemValue] = useState("");
  const [codeReferenceValue, setCodeReferenceValue] = useState("");
  const [codeLinkValue, setCodeLinkValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Updates codeReferenceValue in state when there is a change in the field
  const handleCodeReferenceTextFieldChange = (e) => {
    setCodeReferenceValue(e.target.value);
  };

  // Updates problemValue in state when there is a change in the field
  const handleProblemTextFieldChange = (e) => {
    setProblemValue(e.target.value);
  };

  // Updates codeLinkValue in state
  const handleCodeLinkTextFieldChange = (e) => {
    setCodeLinkValue(e.target.value);
  }

  // Checks if data is complete, updates screen and updates matchQuery in state
  const handleNextButtonClick = () => {
    if (problemValue && codeReferenceValue) {
      updateScreenAndUpdateState({
        problemStatement: problemValue,
        codeReference: codeReferenceValue,
        codeLink: codeLinkValue,
      });
    } else {
      setErrorMessage("Please fill out all the fields."); // Displays error if fields are missing.
    }
  };

  return (
    <div className="inputProblem--container">
      <h4 className="inputProblem--title">
        Describe your problem in the field below.
      </h4>
      <TextField
        id="outlined-textarea"
        label="Problem Statement"
        placeholder="Include as much detail as possible"
        multiline
        variant="outlined"
        rows={6}
        value={problemValue}
        onChange={handleProblemTextFieldChange}
      />
      <h4 className="inputProblem--title">Add any references to your code.</h4>
      <TextField
        id="outlined-textarea"
        label="Code References"
        placeholder="Only include relevant information"
        multiline
        variant="outlined"
        rows={6}
        value={codeReferenceValue}
        onChange={handleCodeReferenceTextFieldChange}
      />
      <h4 className="inputProblem--title">Enter the link to your codebase (GitHub, Bitbucket, etc.)</h4>
      <TextField
        id="outlined-textarea"
        label="Codebase Link (Optional)"
        placeholder="Paste link Here"
        variant="outlined"
        value={codeLinkValue}
        onChange={handleCodeLinkTextFieldChange}
      />
      <Button
        className="inputProblem--nextButton"
        variant="contained"
        color="primary"
        onClick={handleNextButtonClick}
      >
        Next
      </Button>
      <Typography className="inputProblem--error-text" variant="body2">
        {errorMessage}
      </Typography>
    </div>
  );
}

export default InputProblem;
