import React, { useState } from "react";
import Calculator from "./Calculator";

function Operations() {
  const [input, setInput] = useState("");
  const [operation, setOperation] = useState("");
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const handleInput = (e) => {
    setInput((prevInput) => prevInput + e.target.value);
    if (operation === "") {
      setFirstInput((prevFirstInput) => prevFirstInput + e.target.value);
    } else {
      setSecondInput((prevSecondInput) => prevSecondInput + e.target.value);
    }
  };

  const handleOperation = (e) => {
    setOperation(e.target.value);
    setInput((prevInput) => prevInput + e.target.value);
  };

  const handleClear = () => {
    setInput("");
    setFirstInput("");
    setSecondInput("");
    setOperation("");
  };

  const handleDelete = () => {
    operation === ""
      ? setFirstInput(firstInput.substring(0, firstInput.length - 1))
      : setSecondInput(secondInput.substring(0, secondInput.length - 1));
    setInput(input.substring(0, input.length - 1));
  };

  let a1;
  let a2;
  if (parseInt(firstInput) === parseFloat(firstInput))
    a1 = parseInt(firstInput);
  else a1 = parseFloat(firstInput);

  if (parseInt(secondInput) === parseFloat(secondInput))
    a2 = parseInt(secondInput);
  else a2 = parseFloat(secondInput);

  const addition = (firstInput, secondInput) => {
    if (parseInt(firstInput) === a1 && parseInt(secondInput) === a2)
      return a1 + a2;
    else return (a1 + a2).toFixed(5);
  };
  const substraction = (firstInput, secondInput) => {
    if (parseInt(firstInput) === a1 && parseInt(secondInput) === a2)
      return a1 - a2;
    else return (a1 - a2).toFixed(5);
  };
  const multiplication = (firstInput, secondInput) => {
    if (parseInt(firstInput) === a1 && parseInt(secondInput) === a2)
      return a1 * a2;
    else return (a1 * a2).toFixed(5);
  };
  const division = (firstInput, secondInput) => {
    if (parseInt(firstInput) === a1 && parseInt(secondInput) === a2)
      return a1 / a2;
    else return (a1 / a2).toFixed(5);
  };

  const handleOutput = () => {
    let ans;
    switch (operation) {
      case "+":
        ans = addition(firstInput, secondInput);
        break;
      case "-":
        ans = substraction(firstInput, secondInput);
        break;
      case "*":
        ans = multiplication(firstInput, secondInput);
        break;
      case "/":
        ans = division(firstInput, secondInput);
        break;
      default:
        ans = firstInput;
        break;
    }
    setInput(ans);
    setFirstInput(ans);
    setSecondInput("");
  };

  return (
    <>
      <Calculator
        input={input}
        handleInput={handleInput}
        handleOperation={handleOperation}
        handleOutput={handleOutput}
        handleClear={handleClear}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Operations;
