import React, { useState, useEffect } from "react";

function Calculator({
  input,
  handleInput,
  handleOperation,
  handleOutput,
  handleClear,
  handleDelete,
}) {
  return (
    <div className="container">
      <div className="output">
        <div className="previous-output">{input}</div>
        {/*<div className="current-output">{output}</div>*/}
      </div>
      <div className="rest">
        <button onClick={handleClear} className="span-two">
          AC
        </button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={handleOperation} value="/">
          /
        </button>
      </div>
      <div className="rest">
        <button onClick={handleInput} value="1">
          1
        </button>
        <button onClick={handleInput} value="2">
          2
        </button>
        <button onClick={handleInput} value="3">
          3
        </button>
        <button onClick={handleOperation} value="*">
          *
        </button>
      </div>

      <div className="rest">
        <button onClick={handleInput} value="4">
          4
        </button>
        <button onClick={handleInput} value="5">
          5
        </button>
        <button onClick={handleInput} value="6">
          6
        </button>
        <button onClick={handleOperation} value="+">
          +
        </button>
      </div>

      <div className="rest">
        <button onClick={handleInput} value="7">
          7
        </button>
        <button onClick={handleInput} value="8">
          8
        </button>
        <button onClick={handleInput} value="9">
          9
        </button>
        <button onClick={handleOperation} value="-">
          -
        </button>
      </div>
      <div className="rest">
        <button onClick={handleInput} value=".">
          .
        </button>
        <button onClick={handleInput} value="0">
          0
        </button>
        <button onClick={handleOutput} value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
