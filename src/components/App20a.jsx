import React, { useContext } from "react";
import {CountContext} from "./App20";
function App20a(){
    const {count,setCount}=useContext(CountContext);
    return(
        <div>
            <h1>App20a</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
}
export default App20a;