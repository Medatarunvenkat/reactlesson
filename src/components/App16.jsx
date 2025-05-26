import React, { useRef, useState } from "react";

function App16() {
  const prevValueRef = useRef(0);
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleSubmit = () => {
    prevValueRef.current = value;
  };

  return (
    <div>
      <h1>App16</h1>
      <h2>useRef to store previous number</h2>
      <input type="number" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <p>Previous value: {prevValueRef.current}</p>
      <p>Current value: {value}</p>
    </div>
  );
}

export default App16;
