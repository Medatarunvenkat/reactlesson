import React, { useRef, useState } from "react";

function App16() {
  const prevValueRef=useRef(0);
  const [value, setValue]=useState(0);

  const handleChange=(e) => {
    const newValue=Number(e.target.value);
    prevValueRef.current=value;
    setValue(newValue);
  };

  return (
    <div>
      <h1>App16</h1>
      <h2>useRef to store previous number</h2>
      <input type="number" onChange={handleChange}/>
      <p>Previous value:{prevValueRef.current}</p>
      <p>Current value:{value}</p>
    </div>
  );
}

export default App16;
