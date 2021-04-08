import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./styles.css";

function InputProblem({ updateScreenAndUpdateState }) {
  const [problemValue, setProblemValue] = useState("");
  const [codeReferenceValue, setCodeReferenceValue] = useState("");

  const handleCodeReferenceTextFieldChange = (e) => {
    setCodeReferenceValue(e.target.value);
  };

  const handlePoblemTextFieldChange = (e) => {
    setProblemValue(e.target.value);
  };

  const handleNextButtonClick = () => {
    updateScreenAndUpdateState({
      problem: problemValue,
      codeReference: codeReferenceValue,
    });
  };

  return (
    <div className="inputProblem--container">
      <h4>Describe your problem in the field below.</h4>
      <TextField
        id="outlined-textarea"
        label="Problem Statement"
        placeholder="Include as much detail as possible"
        multiline
        variant="outlined"
        rows={6}
        value={problemValue}
        onChange={handlePoblemTextFieldChange}
      />
      <h4>Add any references to your code.</h4>
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
      <Button
        className="inputProblem--nextButton"
        variant="contained"
        color="primary"
        onClick={handleNextButtonClick}
      >
        Next
      </Button>
    </div>
  );
}

export default InputProblem;
