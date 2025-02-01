import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  // Convert text to UPPERCASE
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  // Convert text to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  // Handle text change in textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Clear text
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "warning");
  };

  // Reverse text
  const handleReverseClick = () => {
    let reversedText = text.split('').reverse().join('');
    setText(reversedText);
    props.showAlert("Text reversed!", "success");
  };

  // Copy text to clipboard
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "info");
  };

  // Remove extra spaces
  const handleRemoveClick = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            onChange={handleOnChange}
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveClick}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((word) => word.length !== 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((word) => word.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in textbox above to preview it here.."}</p>
      </div>
    </>
  );
}
