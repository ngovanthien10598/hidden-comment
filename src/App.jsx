import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
// import './bootstrap-grid.min.css';
import './App.css';

function App() {
  const [source, setSource] = useState("");
  const [position, setPosition] = useState(0);
  const [result, setResult] = useState("");
  const [copyState, setCopyState] = useState(false);

  const handleSelect = event => {
    setPosition(event.target.selectionStart);
  }

  const handleInputChange = event => {
    setSource(event.target.value);
  }

  const handleGetText = event => {
    const positionInt = parseInt(position);
    // if (positionInt === 0 || positionInt === source.length) {
    //   return alert("Position must between the text");
    // }
    const first = source.substring(0, positionInt);
    const last = source.substring(positionInt, source.length);
    const zeroWidth = "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d"
                  + "\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d\u200d";
    let middle = "";
    for (let i = 0; i < 5; i++) {
      middle += zeroWidth;
    }
    const result = first + middle + last;
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
        <div className="row py-3">
          <div className="col-md-6">
            <div className="form-group">
              <label className="label" htmlFor="input">Source (Click on text to set hide position - current: {position})</label>
              <textarea className="form-control" value={source} onSelect={handleSelect} onChange={handleInputChange} name="input" id="input" rows="3"></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={handleGetText}>Get result</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="result">Result</label>
              <textarea className="form-control" value={result} readOnly rows="3"></textarea>
            </div>
            <div className="form-group">
              <CopyToClipboard text={result} onCopy={handleCopy}>
                <button disabled={result.length === 0} className="btn btn-success">{copyState ? 'Copied' : 'Copy'} to clipboard</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-right"><small><em>Created by <a href="https://www.facebook.com/ngovanthien1051998" target="_blank" rel="noopener noreferrer">Thien Ngo Van</a></em></small></p>
      </div>
    </div>
  );
}

export default App;
