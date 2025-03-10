import React, { useState } from "react";

const Calculate = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [result, setResult] = useState(0);
  return (
    <>
      <center className="container-fluid p-3">
        <h1>Redux Operations</h1>
        <div className="calculator">
          <input
            type="number"
            placeholder="Enter Value 1"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Value 2"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
          />
          <div className="buttons">
            <button onClick={() => setResult(Number(val1) + Number(val2))}>
              Add
            </button>
            <button onClick={() => setResult(Number(val1) - Number(val2))}>
              Substract
            </button>
            <button onClick={() => setResult(Number(val1) * Number(val2))}>
              Multiply
            </button>
            <button onClick={() => setResult(Number(val1) / Number(val2))}>
              Divide
            </button>
            <button onClick={() => setResult("")}>Clear</button>
          </div>
          <h2>Result:{result}</h2>
        </div>
      </center>
    </>
  );
};

export default Calculate;
