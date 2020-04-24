import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
// import './bootstrap-grid.min.css';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [position, setPosition] = useState(0);
  const [result, setResult] = useState("");
  const [copyState, setCopyState] = useState(false);

  const handleSelect = event => {
    setPosition(event.target.selectionStart);
  }

  const handleInputChange = event => {
    setText(event.target.value);
  }

  const handleGetText = event => {
    const positionInt = parseInt(position);
    if (positionInt === 0 || positionInt === text.length) {
      return alert("Position must between the text");
    }
    const first = text.substring(0, positionInt);
    const last = text.substring(positionInt, text.length);
    let zeroWidth = "";
    for (let i = 0; i < 999; i++) {
      zeroWidth += "\u200d";
    }
    const result = first + zeroWidth + last;
    setResult(result);
  }

  const handleCopy = () => {
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 3000);
  }

  return (
    <div className="wrapper pt-3">
      <div className="container">
        <h1>Hidden comment</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="label" htmlFor="input">Input text</label>
              <textarea className="form-control" value={text} onSelect={handleSelect} onChange={handleInputChange} name="input" id="input" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="position">Position to hide (click on text)</label>
              <input className="form-control" readOnly value={position} type="text" name="position" id="position" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" disabled={!(position > 0 && position < text.length)} onClick={handleGetText}>Get text</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="result">Result</label>
              <textarea className="form-control" value={result} readOnly rows="3"></textarea>
            </div>
            <div className="form-group">
              <CopyToClipboard text={result} onCopy={handleCopy}>
                <button disabled={result.length === 0} className="btn btn-success">{copyState ? 'Copied' : 'Copy'}</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
