import React, { useRef,useState } from "react";
function App15(){
    const nameRef=useRef(null);
    const num1Ref=useRef(null);
    const num2Ref=useRef(null);
    const resultRef=useRef(null);
    const colorRef=useRef(null);
    const [colortext,setcolortext]=useState("");
    const handleSubmit=()=>{
        alert(nameRef.current.value);
        nameRef.current.style.color="red";
    }
    const handleAdd=()=>{
        const num1=Number(num1Ref.current.value);
        const num2=Number(num2Ref.current.value);
        resultRef.current.textContent=num1+num2;
    }
    const handleColor=()=>{
        setcolortext(colorRef.current.value);
    }
        return(
        <div>
            <h1>App15</h1>
            <h2>useRef hook</h2>
            <p>
                <input type="text" ref={nameRef} />
            </p>
            <button onClick={handleSubmit}>Submit</button>
            <hr />
            <hr />
            <input type="text" placeholder="enter number 1" ref={num1Ref}/>
            <input type="text" placeholder="enter number 2" ref={num2Ref}/>
            <button onClick={handleAdd}>Add</button>
            <p>Result:<span ref={resultRef}></span></p>
            <input
        type="text"
        placeholder="enter a color (like red, green)"
        ref={colorRef}
        onChange={handleColor}
      />
      <p style={{ color: colortext }}>Hello World</p>
        </div>
    )
}
export default App15;