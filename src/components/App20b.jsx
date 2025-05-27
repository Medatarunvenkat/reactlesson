import React, {useContext} from "react";
import {CountContext} from "./App20";
function App20b(){
    const {count,setCount}=useContext(CountContext);
    return(
        <div>
            <h1>App20b</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
}
export default App20b;