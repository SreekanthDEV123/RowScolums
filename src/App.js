import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [row, setRow] = useState();
  const [col, setCol] = useState();
  const [active, setActive] = useState(null);
  const inputRow = (e) => {
    setRow(e.target.value);
  };
  const inputCol = (e) => {
    setCol(e.target.value);
  };
  console.log(row);
  console.log(col);
  const changeColor = (index) => {
    setActive(index);
  };
  return (
    <div>
      <div>
        <label> row:</label>
        <input type="number" value={row} onChange={inputRow} />
      </div>
      <div>
        <label> col:</label>
        <input type="number" value={col} onChange={inputCol} />
      </div>

      <div
        className="grid"
        style={{
          gridTemplateRows: `repeat(${row}, 1fr)`,
          gridTemplateColumns: `repeat(${col}, 1fr)`,
        }}
      >
        {Array.from({ length: row * col }).map((ele, index) => (
          <button
            onClick={() => changeColor(index)}
            className={`box ${active === index ? 'red' : 'blue'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
